export function renderUser(users) {
    const tbody = document.getElementById("userTable");
    tbody.innerHTML = "";

    users.forEach(u => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td> ${users.id} </td>
        <td> ${users.name} </td>
        <td> ${users.email} </td>
        <td> <a href = "editUser.html?id=${users.id}"> Edit </td>
        <td> <button data-id = "${users.id}"> Delete </button> </td>
        `;
        tbody.appendChild(tr);
    }) ;
}