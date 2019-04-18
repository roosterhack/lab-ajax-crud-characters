class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`).then(response => {
      const { data } = response;
      return data;
    });
  }

  getOneRegister() {
    const id = document.querySelector("[name='character-id']").value;
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(response => {
      const { data } = response;
      return data;
    });
  }

  createOneRegister() {
    const name = document.querySelector("form [name='name']").value;
    const occupation = document.querySelector('form [name= "occupation"]').value;
    const weapon = document.querySelector('form [name="weapon"]').value;
    const cartoon = document.querySelector('form [name="cartoon"]').checked;

    return axios.post(`${this.BASE_URL}/characters`, { name, occupation, weapon, cartoon }).then(response => {
      const { data } = response;
      return data;
    });
  }

  updateOneRegister() {}

  deleteOneRegister() {
    const deleteId = document.querySelector("[name='character-id-delete']").value;
    return axios.delete(`${this.BASE_URL}/characters/${deleteId}`).then(response => {
      const { data } = response;
      return data;
    });
  }
}
