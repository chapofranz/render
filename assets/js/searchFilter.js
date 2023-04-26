function updateList(listType, items) {
    const tableBody = document.querySelector(`.${listType}-list`);
    tableBody.innerHTML = '';
  
    items.forEach(item => {
      const tableRow = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      tableRow.appendChild(nameCell);
  
      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = item.beschreibung;
      tableRow.appendChild(descriptionCell);
  
      const authorCell = document.createElement('td');
      authorCell.textContent = item.author;
      tableRow.appendChild(authorCell);
  
      tableBody.appendChild(tableRow);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const skripteList = JSON.parse(document.querySelector('.skripte-list').dataset.skripte);
    const anleitungenList = JSON.parse(document.querySelector('.anleitungen-list').dataset.anleitungen);
  
    document.getElementById('skripteFilter').addEventListener('change', function() {
      const filterValue = this.value;
      const filteredSkripte = filterItems(skripteList, filterValue);
      updateList('skripte', filteredSkripte);
    });
  
    document.getElementById('anleitungenFilter').addEventListener('change', function() {
      const filterValue = this.value;
      const filteredAnleitungen = filterItems(anleitungenList, filterValue);
      updateList('anleitungen', filteredAnleitungen);
    });
  });
  
  function filterItems(items, filterValue) {
    if (filterValue === 'default') {
      return items;
    }
    return items.sort((a, b) => a[filterValue].localeCompare(b[filterValue]));
  }
  