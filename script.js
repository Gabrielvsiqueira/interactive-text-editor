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

function alterarEstilo(estilo) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    let parentElement = range.commonAncestorContainer.parentElement;
 
    if (parentElement && parentElement.tagName === "SPAN") {
        if (estilo === "strong") {
            parentElement.style.fontWeight = parentElement.style.fontWeight === "strong" ? "" : "strong";
        } else if (estilo === "italic") {
            parentElement.style.fontStyle = parentElement.style.fontStyle === "italic" ? "" : "italic";
        } else if (estilo === "underline") {
            parentElement.style.textDecoration = parentElement.style.textDecoration === "underline" ? "" : "underline";
        }
        if (!parentElement.style.fontWeight && !parentElement.style.fontStyle && !parentElement.style.textDecoration) {
            const textNode = document.createTextNode(parentElement.textContent);
            parentElement.replaceWith(textNode);
        }
    } else {
        const span = document.createElement("span");
        if (estilo === "bold") span.style.fontWeight = "bold";
        if (estilo === "italic") span.style.fontStyle = "italic";
        if (estilo === "underline") span.style.textDecoration = "underline";

        range.surroundContents(span);
    }
}

function alterarFonte(fonte) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();  
    if (selectedText) {
        let element = document.createElement('span');
        element.style.fontFamily = fonte; 

        element.appendChild(range.extractContents());
        range.insertNode(element);
    } else {
        alert('Selecione algum texto primeiro!');
    }
}

function alterarCor(cor) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();  
    if (selectedText) {
        let element = document.createElement('span');
        element.style.color = cor; 

        element.appendChild(range.extractContents());
        range.insertNode(element);
    } else {
        alert('Selecione algum texto primeiro!');
    }
}

function alterarAlinhamento(alinhamento) {
    const parentElement = document.getElementById("editor"); 
    if (parentElement) {
        parentElement.style.textAlign = alinhamento;
        console.log("Alinhamento alterado para:", alinhamento);
    } else{
        alert('Selecione algum texto primeiro!');  
    } 
}

function alterarTamanhoFonte(acao) {
    const editor = document.getElementById('editor');

    let tamanhoFonteAtual = window.getComputedStyle(editor).fontSize;

    tamanhoFonteAtual = parseInt(tamanhoFonteAtual.replace('px', ''));

    if (acao === 'increase') {
        editor.style.fontSize = (tamanhoFonteAtual + 2) + 'px';
    } else if (acao === 'decrease') {
        editor.style.fontSize = (tamanhoFonteAtual - 2) + 'px';
    }
}
