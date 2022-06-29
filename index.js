const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const deleteBtn = document.querySelector('#delete-btn');
const ulEl = document.querySelector('#ul-el');
let myLeads = [];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = '';
});

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listItems = '';
  leads.forEach(function (lead) {
    listItems += `<li><a href='${lead}' target='_blank'>${lead}</a></li>`;
  });

  ulEl.innerHTML = listItems;
}