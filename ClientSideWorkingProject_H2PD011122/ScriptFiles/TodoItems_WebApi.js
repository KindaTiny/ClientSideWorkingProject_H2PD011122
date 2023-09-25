//const { data } = require("jquery");

//const uri = "https://todoitems.buchwaldshave34.dk/api/todoitems";
const uri = "https://cityinfo.buchwaldshave34.dk/api/City";
const uriCountry = "https://cityinfo.buchwaldshave34.dk/api/Country";


let todos = [];
let ThisUserName = "UserLukas";

function getItems() {
   fetch(uri + "?UserName=" + ThisUserName)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));

}

function addItem() {
    const addNameTextbox = document.getElementById('add-name');
    const AddDescTextbox = document.getElementById('add-desc')
    const AddCountry = document.getElementById('add-Country')

    const item = {
        name: addNameTextbox.value.trim(),
        desc: AddDescTextbox.value.trim(),
        countryID: AddCountry.options[AddCountry.selectedIndex].value

    }

    fetch(uri + "?UserName=" + ThisUserName, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextbox.value = '';
            AddDescTextbox.value = '';
        })
        //.catch(error => console.error('Unable to add item.', error));
    .catch(error => console.error('Unable to add item.', error));       
}

function deleteItem(id) {
    fetch(`${uri}/${id}` + "?UserName=" + ThisUserName, {
        method: 'DELETE'
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function displayEditForm(id,CountryID) {
    const item = todos.find(item => item.cityId === id);

    document.getElementById('edit-name').value = item.name;
    document.getElementById('edit-desc').value = item.description;
    document.getElementById('edit-id').value = item.cityId;
    document.getElementById('editForm').style.display = 'block';
    document.getElementById('edit-CountryID').value = CountryID
   

}

function updateItem() {
    const itemId = document.getElementById('edit-id').value;
    const countryID = document.getElementById('edit-CountryID').value; 
    const item = {


        name: document.getElementById('edit-name').value.trim(),
        description: document.getElementById('edit-desc').value.trim(), 
        cityId: parseInt(itemId),
        countryID: parseInt(countryID),    
    };



    fetch(`${uri}/${itemId}` + "?UserName=" + ThisUserName, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(() => getItems())
        .catch(error => console.error('Unable to update item.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'to-do' : 'to-dos';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';
    console.log(data)
  

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(item => {
        console.log(item.country.countryName);
        const CountryID = item.countryID;

        let isCompleteCheckbox = document.createElement('input');
        isCompleteCheckbox.type = 'checkbox';
        isCompleteCheckbox.disabled = true;
        isCompleteCheckbox.checked = item.isComplete;

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${item.cityId},${CountryID})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteItem(${item.cityId})`);

        
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(isCompleteCheckbox);

        let td2 = tr.insertCell(1);
        let textNode = document.createTextNode(item.name);
        td2.appendChild(textNode);

        let td5 = tr.insertCell(2);
        let textNode4 = document.createTextNode(item.description);
        td5.appendChild(textNode4);

        let td3 = tr.insertCell(3);
        let textNode2 = document.createTextNode(item.country.countryName);
        td3.appendChild(textNode2);

        //let td4 = tr.insertCell(4);
        //let textNode3 = document.cre                                 ateTextNode((insert dropdown));
        //td4.appendChild(textNode3);

        let td6 = tr.insertCell(4);
         td6.appendChild(editButton);

        let td7 = tr.insertCell(5);
        td7.appendChild(deleteButton);

      
    });
    
    todos = data;

}

function GetCountries() {
    fetch(uriCountry + "?UserName=" + ThisUserName)
        .then(response => response.json())
        .then(data => _displayCountries(data))
        .catch(error => console.error('Unable to get items.', error));
}
function _displayCountries(data)
{
    addCountry = document.getElementById('add-Country');
    removeOptions(addCountry);

        var select = document.getElementById('add-Country');

        for (i = 0; i <= data.length; i++) {
            var optco = data[i];
            var opt = document.createElement('option');
            opt.textContent = optco.countryName;
            opt.value = optco.countryID;
            select.appendChild(opt);
    }
}
function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}




