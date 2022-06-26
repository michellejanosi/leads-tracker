const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
let myLeads = [];

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  let listItems = '';
  myLeads.forEach(function (lead) {
    listItems += `<li>${lead}</li>`;
  });

  ulEl.innerHTML = listItems;
  inputEl.value = ' ';
}