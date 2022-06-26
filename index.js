const inputEl = document.querySelector('#input-el');
const inputBtn = document.querySelector('#input-btn');
const ulEl = document.querySelector('#ul-el');
let myLeads = [];

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);

  myLeads.forEach(function (lead) {
    // ulEl.innerHTML += `<li>${lead}</li>`;
    const li = document.createElement('li');
    li.innerText = lead;
    ulEl.append(li);
  });
  
  inputEl.value = ' ';
});