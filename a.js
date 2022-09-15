document.getElementById('search-btn').addEventListener('click', function(){
   const inputField = document.getElementById('input-field');
   const searchData = inputField.value;
const textBox = document.getElementById('body');
textBox.innerText = searchData;
//textBox.classList.add('d-none');


   //console.log(searchData);
})