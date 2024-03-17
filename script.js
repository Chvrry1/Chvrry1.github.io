document.getElementById("encriptar").addEventListener("click", function() {
    var inputText = document.getElementById("txtInput").value;
    if (inputText.trim() === "") {
        document.getElementById("missing").style.display = "block";
        document.getElementById("out").style.display = "none";
        return;
    }
    document.getElementById("missing").style.display = "none";
    document.getElementById("out").style.display = "flex";
    document.getElementById("lblOutput").value = encriptar(inputText);
});

document.getElementById("desencriptar").addEventListener("click", function() {
    var inputText = document.getElementById("txtInput").value;
    if (inputText.trim() === "") {
        document.getElementById("missing").style.display = "block";
        document.getElementById("out").style.display = "none";
        return;
    }
    document.getElementById("missing").style.display = "none";
    document.getElementById("out").style.display = "flex";
    document.getElementById("lblOutput").value = desencriptar(inputText);
});

document.getElementById("copiar").addEventListener("click", function() {
    var outputText = document.getElementById("lblOutput");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + outputText.value);
});

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}