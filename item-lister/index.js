const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Add submit event
form.addEventListener('submit', addItem);
// Add delete event
itemList.addEventListener('click', removeItem);
// Add filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();
    // Get input value
    const newItem = document.getElementById('item').value;
    // Create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = newItem;
    // Create delete button
    const button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm float-right delete';
    button.textContent = 'X';
    // Append elements
    li.appendChild(button);
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    const text = e.target.value.toLowerCase();
    const items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}