import { api } from "./api.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const form = document.getElementById("editForm");

(async function loadUser() {
    const users = await api.getUsers();
    const user = users.find(u => u.id == id);

    if (!user) {
        alert("User not found");
        return;
    }

    nameInput.value = user.name;
    emailInput.value = user.email;
})();

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await api.updateUser(id, {
        name: nameInput.value,
        email: emailInput.value
    });

    window.location.href = "index.html";
});
