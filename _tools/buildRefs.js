let p = require("path");
let ps = require("process");
let cps = require("child_process");

ps.chdir(p.join(__dirname, "..\\..\\mimcss"));
console.log("Build mimcss Doc");
exec("typedoc");

// ps.chdir( __dirname);
// exec( "node copyRefs.js")

console.log("buildRefs.js script has finished");



function exec(cmd, options, logErrorMessage) {
    try { cps.execSync(cmd, options); } catch (err) { if (logErrorMessage) console.log(err.message); }
}