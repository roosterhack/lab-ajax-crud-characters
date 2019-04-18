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
    return axios.post(`${this.BASE_URL}/characters`).then(response => {
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
