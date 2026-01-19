import {api} from "api.js";

const form = document.getElementById("addForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = {
        name : name.value,
        email : email.value
    };

    await api.addUser(user);
    window.location.href = "index.html";


})