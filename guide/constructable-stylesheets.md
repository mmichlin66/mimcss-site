---
layout: mimcss-guide
unit: 12
title: "Mimcss Guide: Constructable Stylesheets"
description: "Support for constructable stylesheets and custom Web elements."
rootpath: ".."
---

# Constructable Stylesheets

Constructable stylesheets is a new technology, which is currently only supported by Chrome ([see here](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)). It allows programmatically creating a stylesheet (a `CSSStyleSheet` object) once and sharing it between multiple `ShadowRoot` elements. It is mostly useful for custom Web elements because globally defined styles don't apply to elements under the Shadow DOM. Without constructable stylesheets, a new `<style>` element would have to be created for every instance of a custom Web element, which is obviously wasteful. With constructable stylesheets, the `CSSStyleSheet` object is created once and then is set as a member of the array to the `adoptedStyleSheets` property, which is available on every `ShadowRoot` and `Document` elements. The latter allows sharing the same stylesheet between the document and the custom Web elements.

Mimcss supports constructable stylesheets by establishing an *adoption context* linked to a given `Document` or `ShadowRoot` object before the `activate` function call. The context is established using the `pushAdoptionContext` function and is removed using the `popAdoptionContext` function. If an adoption context is active when the `activate` function is called, Mimcss will create an instance of the style definition class, serialize it to a `CSSStyleSheet` instance and adopt it to the `Document` or `ShadowRoot` element whose adoption context is currently active. If the `activate` function is called again with the same style definition class but the adoption context for a different `root` parameter, Mimcss will adopt the existing `CSSStyleSheet` instance to the new root object.

When an adoption context is created for a given `ShadowRoot` object for a custom Web element, Mimcss creates some internal resources, which remain linked to the `ShadowRoot` object even after the adoption context is removed. This is needed because adoption context can be created and removed many times - although it is usually needed during the Web element constructor or `connectedCallback` method, it can also be needed whenever styles are activated or deactivated; for example, in an event handler. When the Web element is removed from DOM, the Web element should inform Mimcss by calling the `releaseShadow` function so that these resources can be released. This is usually done in the `disconnectedCallback` method. Note that this is only needed for `ShadowRoot` objects and not for `Document` objects.

In the browsers that don't yet support constructable stylesheets, Mimcss will instead create `<style>` elements under the given `Document` or `ShadowRoot` element so that developers don't need to worry whether the browsers support constructable stylesheets or not.

As an example, let's have a simple custom Web element:

```tsx
class MyWebElementStyles extends css.StyleDefinition
{
    red = this.$class({ backgroundColor: "red" })
}

class MyCustomElement extends HTMLElement
{
    constructor()
    {
        super();

        this.attachShadow({mode: "open"});

        // establish adoption context
        css.pushAdoptionContext( this.shadowRoot);
        this.styles = css.activate( MyWebElementStyles);
        // remove adoption context
        css.popAdoptionContext( this.shadowRoot);

        let div = document.createElement( "div");
        this.shadow.appendChild( div);
        div.className = this.styles.red.name;

        let text = document.createTextNode("Hello!");
        div.appendChild(text);
    }

    disconnectedCallback()
    {
        // establish adoption context
        css.pushAdoptionContext( this.shadowRoot);
        css.deactivate( this.styles);
        // remove adoption context
        css.popAdoptionContext( this.shadowRoot);

        // cleanup resources used by Mimcss for this shadow root
        css.releaseShadow( this.shadowRoot);
    }

    private shadow: ShadowRoot;
    private styles: WebElementStyles;
}

customElements.define( "my-custom-element", MyCustomElement);
```


