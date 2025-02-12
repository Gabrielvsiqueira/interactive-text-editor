function formatText(command) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");

    if (command === "bold") {
        span.style.fontWeight = "bold";
    } else if (command === "italic") {
        span.style.fontStyle = "italic";
    } else if (command === "underline") {
        span.style.textDecoration = "underline";
    }

    span.appendChild(range.extractContents()); // Mantém o texto original
    range.insertNode(span); // Insere o novo elemento formatado
}