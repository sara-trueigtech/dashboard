// import { api } from "./api.js";
import { api } from "./apiservice.js";
import { renderUser } from "./ui.js";

async function loadUsers() {
    const users = await api.getUsers();
    renderUser(users);
}

loadUsers();

document.addEventListener("click", async (e) => {
    if(e.target.tagName === "BUTTON"){
        const id = e.target.dataset.id;
        await api.deleteUser(id);
        alert("User deleted!")
        loadUsers();
    }
});