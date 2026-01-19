export function renderUser(users) {
    const tbody = document.getElementById("userTable");
    tbody.innerHTML = "";

    users.forEach(u => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td> ${u.id} </td>
        <td> ${u.name} </td>
        <td> ${u.email} </td>
        <td> <a href = "editUser.html?id=${u.id}"> Edit </td>
        <td> <button data-id = "${u.id}"> Delete </button> </td>
        `;
        tbody.appendChild(tr);
    }) ;
}