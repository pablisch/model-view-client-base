class View {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainDiv = document.querySelector('#main-div');
    this.buttonEl = document.querySelector('#main-button')
    this.inputEl = document.querySelector('#main-input')

    this.buttonEl.addEventListener('click', () => {
      let input = this.inputEl.value;
      console.log(input);
      this.inputEl.value = "";
    })
  }

  async displayX() {
    const data1 = await this.client.loadX();
    this.model.setX(data1);
    const data2 = this.model.getX();
    console.log(`data = ${data2}`) // VISIBILITY
    console.log(data2[0]) // VISIBILITY
    data2.forEach((data) => { 
      const dataDiv = document.createElement('div');
      dataDiv.classList.add('data-box');
      dataDiv.innerHTML = `<div class="data-inner">
      
      <div class="text">
      <h2>${data.title}</h2>
      <p class="body">${data.body}</p>
      </div></div>`;
      // <img class="image" src="${data.image}" alt=""></img>
      this.mainDiv.append(dataDiv);
    })
  }
}

module.exports = View;