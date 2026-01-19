import {api} from "./api";
import {renderUser} from "./ui";

async function loadUsers() {
    const users = await api.getUsers();
    renderUser(users);
}

loadUsers();

document.addEventListener("click", async (e) => {
    if(e.target.tagName === "BUTTON"){
        const id = e.target.dataset.id;
        await api.deleteUser(id);
        loadUsers();
    }
});