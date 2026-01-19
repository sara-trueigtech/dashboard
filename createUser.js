// import { api } from "./api.js";
import { api } from "./apiservice.js";

const form = document.getElementById("addForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
        name: nameInput.value,
        email: emailInput.value
    };

    await api.addUser(user);
    window.location.href = "index.html";
});
