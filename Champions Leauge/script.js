  // JavaScript, um die Höhe des Containers auf die Höhe des letzten divs zu setzen
  document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const lastDiv = container.lastElementChild;

    if (lastDiv) {
        const lastDivHeight = lastDiv.offsetHeight;
        container.style.maxHeight = lastDivHeight + "px";
    }
});