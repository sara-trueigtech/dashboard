class api {
  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com/users";
  }

  async getUsers() {
    const res = await fetch(this.baseUrl);
    return res.json();
  }

  async addUser(user) {
    const res = await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    res.json();
  }

  async updateUser(id, user) {
    const res = await fetch(`${this.baseUrl}\${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    return res.json();
  }

  async deleteUser(id) {
    await fetch(`${this.baseUrl}\${id}`, {
      method: "DELETE",
    });
  }
}


export const api = new api();