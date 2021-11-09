let p = require("path");
let ps = require("process");
let cps = require("child_process");

ps.chdir(p.join(__dirname, ".."));
console.log("Current directory: " + ps.cwd());

console.log("Copy mimcss reference to " + p.join(ps.cwd(), "reference"));
exec("xcopy ..\\mimcss\\reference\\*.*   reference\\ /i /y /d /s");

console.log("copyRefs.js script has finished");



function exec(cmd, logErrorMessage) {
    try { cps.execSync(cmd); } catch (err) { if (logErrorMessage) console.log(err.message); }
}