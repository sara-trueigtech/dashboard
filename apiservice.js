class Apiservice {
  constructor() {
    this.key = "users";
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.key));
  }

  addUser(user) {
    const users = this.getUsers();
    const newUser = {
      id: Date.now(),
      ...user,
    };

    users.push(newUser);
    localStorage.setItem(this.key, JSON.stringify(users));
    return newUser;
  }

  updateUser(id, updatedUser) {
    const users = this.getUsers();

    const user = users.map((u) => (u.id == id ? { ...u, ...updatedUser } : u));

    localStorage.setItem(this.key, JSON.stringify(user));
  }

  deleteUser(id) {
    let users = this.getUsers();

    const idx = users.findIndex((u) => u.id == id);

    if (idx !== -1) {
      users.splice(idx, 1);
    }
    localStorage.setItem(this.key, JSON.stringify(users));
  }
}

export const api = new Apiservice();
