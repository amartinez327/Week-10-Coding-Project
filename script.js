let id=0;

document.getElementById('submit').addEventListener('click',() => {//here we have the event listener listening for the click
let table = document.getElementById('list');//my id is list from HTML
let row = table.insertRow(1);//we insert a row
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML=document.getElementById('newYear').value;
row.insertCell(1).innerHTML='$'+document.getElementById('newCost').value;
row.insertCell(2).innerHTML=document.getElementById('newModel').value;
row.insertCell(3).innerHTML=document.getElementById('newMileage').value;
row.insertCell(4).innerHTML=document.getElementById('newColor').value;
row.insertCell(5).innerHTML=document.getElementById('newMake').value;
//here we have the data being inputted in my vehicle input data portal. Data is being stored temperarly 
document.getElementById('newYear').value = ''; 
document.getElementById('newCost').value = '';
document.getElementById('newModel').value = '';
document.getElementById('newMileage').value = '';
document.getElementById('newColor').value = '';
document.getElementById('newMake').value = '';

})
