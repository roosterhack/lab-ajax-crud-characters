const charactersAPI = new APIHandler("http://localhost:8000");
const characterArea = document.querySelector(".characters-container");
$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      let htmlStr = "";
      data.forEach(character => {
        const { id, name, occupation, weapon, cartoon } = character;
        const characterHtml = `
        <div class="character-info" id="${id}">
          <div class= 'id'>ID: ${id}</div>
          <div class="name">Name: ${name}</div>
          <div class="occupation">Occupation: ${occupation}</div>
          <div class="cartoon">Is a Cartoon? ${cartoon}</div>
          <div class="weapon">Weapon: ${weapon}</div>
        </div>
        `;
        htmlStr += characterHtml;
      });
      characterArea.innerHTML = htmlStr;
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI.getOneRegister().then(character => {
      const { id, name, occupation, weapon, cartoon } = character;
      const characterHtml = `
      <div class="character-info" id="${id}">
      <div class= 'id'>ID: ${id}</div>
      <div class="name">Name: ${name}</div>
      <div class="occupation">Occupation: ${occupation}</div>
      <div class="cartoon">Is a Cartoon? ${cartoon}</div>
      <div class="weapon">Weapon: ${weapon}</div>
    </div>
    `;
      characterArea.innerHTML = characterHtml;
      document.querySelector("[name='character-id']").value = "";
    });
  };

  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister().then(character => {
      const { id } = character;
      const deleteOne = document.getElementById(id);
      deleteOne.parentNode.removeChild(deleteOne);
    });
  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function(evt) {
    evt.preventDefault();
    charactersAPI.createOneRegister().then(character => {
      const { id, name, occupation, weapon, cartoon } = character;
      const characterHtml = `
      <div class="character-info" id="${id}">
      <div class= 'id'>ID: ${id}</div>
      <div class="name">Name: ${name}</div>
      <div class="occupation">Occupation: ${occupation}</div>
      <div class="cartoon">Is a Cartoon? ${cartoon}</div>
      <div class="weapon">Weapon: ${weapon}</div>
    </div>
    `;
      characterArea.innerHTML += characterHtml;
    });
  };
});
