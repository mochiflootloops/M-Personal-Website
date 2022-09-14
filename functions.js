function toggle() {
    var styleSheet = document.getElementById("style").href;
    // console.log(style.href);
    // console.log("Howdy");
    if (styleSheet.match("coding.css")) {
        // console.log("coding");
        document.getElementById("style").href = "spin.css";
        localStorage.setItem("style", "spin.css");
    } else {
        // console.log("spin");
        document.getElementById("style").href = "coding.css";
        localStorage.setItem("style", "coding.css");
    }
}

window.onload = function() {
    if (!localStorage.getItem("style")) {
        localStorage.setItem("style", "coding.css");
    }
    document.getElementById("style").href = localStorage.getItem("style");
}