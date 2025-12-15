var load_or_new = "new";
const loadButton = document.getElementById("loadBtn");
const newButton = document.getElementById("newBtn");
loadButton.addEventListener("click", () => {
    document.getElementById("fileInput").click();
    load_or_new = "load";
    game_start();
    loadButton.style.display = "none";
    newButton.style.display = "none";
});
newButton.addEventListener("click", () => {
    saveData = {
        hero: {
            x: 6,
            y: 14,
            inventory: [],
            level: 1,
            hp: 10,
            mp: 0,
            gp: 100,
            exp: 0,
            name: "Roger"
        }
    }
    load_or_new = "new";
    alert(load_or_new)
    game_start();
    loadButton.style.display = "none";
    newButton.style.display = "none";
});
document.getElementById("fileInput").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
        saveData = reader.result;
        alert(load_or_new);
    };

    reader.readAsText(file);
});
