function salvarArquivo() {
    const name = document.getElementById("nome-documentos").value || "Sem Nome";
    const content = document.getElementById("editor").innerHTML;
    localStorage.setItem(name, content);
    alert("Documento salvo!");
}

function baixarArquivo(type) {
    let content = document.getElementById("editor").innerHTML;
    let filename = document.getElementById("nome-documentos").value || "documento";
    
    let blob = type === "txt" 
        ? new Blob([content], { type: "text/plain" }) 
        : new Blob([content], { type: "text/html" });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename + "." + type;
    link.click();
}