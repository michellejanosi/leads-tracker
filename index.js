const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
let myLeads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  renderLeads();
});

function renderLeads() {
  let listItems = '';
  myLeads.forEach(function (lead) {
    listItems += `<li><a href='${lead}' target='_blank'>${lead}</a></li>`;
  });

  ulEl.innerHTML = listItems;
}