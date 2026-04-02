const frame = window.frames['IframeLesson'].contentWindow;
let cookie = frame.Nida.Cookies.get("assessment");

const isDevToolsOpen = (window.outerWidth - window.innerWidth > 200) ||
    (window.outerHeight - window.innerHeight > 200);

function decode(input) {
    let encoded = input.split("$$").find(p => p.startsWith("pull:")).split(":");
    let encodedSplit = encoded[1].split(",");
    return encodedSplit.map((q, i) => {
        let parsed = parseInt(q.substr(q.length - 3, 3), 10);
        let value = parsed - 13 - i;
        return String.fromCharCode(value);
    }).join("");
}

let res = decode(cookie);
if (isDevToolsOpen) {
    console.log("Decoded Assessment:\n\n", res);
} else {
    prompt("Decoded Answer Key Created", res);
}
