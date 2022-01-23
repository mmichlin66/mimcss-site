---
layout: mimcss-guide
unit: 12
title: "Mimcss Guide: Constructable Stylesheets"
description: "Support for constructable stylesheets and custom Web elements."
rootpath: ".."
---

# Constructable Stylesheets

Constructable stylesheets is a new technology, which is currently only supported by Chrome ([see here](https://developers.google.com/web/updates/2019/02/constructable-stylesheets)). It allows programmatically creating a stylesheet (a `CSSStyleSheet` object) once and sharing it between multiple `ShadowRoot` elements. It is mostly useful for custom Web elements because globally defined styles don't apply to elements under the Shadow DOM. Without constructable stylesheets, a new `<style>` element would have to be created for every instance of a custom Web element, which is obviously wasteful. With constructable stylesheets, the `CSSStyleSheet` object is created once and then is set as a member of the array to the `adoptedStyleSheets` property, which is available on every `ShadowRoot` and `Document` elements. The latter allows sharing the same stylesheet between the document and the custom Web elements.

Mimcss supports constructable stylesheets by having an optional `root: DocumentOrShadowRoot` parameter in the `activate` function. If this parameter is defined, Mimcss will create an instance of the style definition class, serialize it to a `CSSStyleSheet` instance and adopt it to the given `Document` or `ShadowRoot` element. If the `activate` function is called again with the same style definition class but different `root` parameter, Mimcss will adopt the existing `CSSStyleSheet` instance to the new root object.

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

        this.shadow = this.attachShadow({mode: "open"});

        // pass shadow root to the activate function
        this.styles = css.activate( MyWebElementStyles, this.shadow);

        let div = document.createElement( "div");
        this.shadow.appendChild( div);
        div.className = this.styles.red.name;

        let text = document.createTextNode("Hello!");
        div.appendChild(text);
    }

    disconnectedCallback()
    {
        // must specify the shadow root in the deactivate function too
        css.deactivate( this.styles, this.shadow);

        // cleanup resources used by Mimcss for this shadow root
        css.releaseShadow( this.shadow);
    }

    private shadow: ShadowRoot;
    private styles: WebElementStyles;
}

customElements.define( "my-custom-element", MyCustomElement);
```

## Styled Components under Shadow Roots
In Mimcss, "styled components" refer to components that create instances of style definition classes directly - normally using the `new` operator instead of passing the style definition class to the `activate()` function. This allows every instance of the styled component to have its own private instance of the style definition class, so that changes of styles by one component instance don't impact other instances.

When using styled components with custom DOM elements, we cannot, unfortunately use the `new` operator directly. The reason is that in order for the style definition correctly instantiate and be adopted, Mimcss must know the shadow root at the moment of style definition instance creation. To solve this problem, Mimcss provides the `construct()` function, which accepts the style definition class and the shadow root object and returns a new style definition instance properly setup for future adoption. Here is a quick example:

```tsx
class MyWebElementStyles extends css.StyleDefinition
{
    red = this.$class({ backgroundColor: "red"})
}

class MyCustomElement extends HTMLElement
{
    constructor()
    {
        super();

        this.shadow = this.attachShadow({mode: "open"});

        // create new style definition insance for the given shadow root
        this.styles = css.activate( css.construct( MyWebElementStyles, this.shadow), this.shadow);

        ...
    }
}
```






