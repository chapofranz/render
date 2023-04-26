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
  
  function filterItems(items, filterValue) {
    if (filterValue === 'default') {
      return items;
    }
    return items.sort((a, b) => a[filterValue].localeCompare(b[filterValue]));
  }
  
  function initializeSearchFilter() {
    const skripteListElement = document.querySelector('.skripte-list');
    const anleitungenListElement = document.querySelector('.anleitungen-list');
  
    if (skripteListElement && anleitungenListElement) {
      const skripteList = JSON.parse(skripteListElement.dataset.skripte);
      const anleitungenList = JSON.parse(anleitungenListElement.dataset.anleitungen);
  
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
    } else {
      console.error('Unable to find elements with class .skripte-list or .anleitungen-list');
    }
  }
  
  document.addEventListener('DOMContentLoaded', initializeSearchFilter);
  