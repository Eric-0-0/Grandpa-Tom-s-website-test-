document.getElementById("aboutBtn").addEventListener("click", () => {
    displaySection("about");
});

document.getElementById("productsBtn").addEventListener("click", () => {
    displaySection("products");
});

document.getElementById("contactBtn").addEventListener("click", () => {
    displaySection("contact");
});

document.getElementById("shopNowBtn").addEventListener("click", () => {
    displaySection("products");
});

function displaySection(sectionId) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}
