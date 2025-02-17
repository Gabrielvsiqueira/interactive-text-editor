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
    const range = selection.getRangeAt(0);

    if (!selection.rangeCount) return;

    const span = document.createElement('span');
    span.style.fontWeight = estilo === 'bold' ? 'bold' : '';
    span.style.fontStyle = estilo === 'italic' ? 'italic' : '';
    span.style.textDecoration = estilo === 'underline' ? 'underline' : '';
    
    range.surroundContents(span);
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
