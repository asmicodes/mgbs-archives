// make annotations open when link clicked
for (const link of document.getElementsByClassName('annotation-link')) {
    link.addEventListener('click', () => {
      closeAllEntries();
  
      const annotation = document.getElementById(`bib-entry-${link.getAttribute('data-annotation-id')}`);
      annotation.classList.add('active');
    });
  }
  
  // close all other active entries
  function closeAllEntries() {
    for (const entry of document.getElementsByClassName('bibliography-entry')) {
      entry.classList.remove('active');
    }
  }
  
  // make annotations close when clicked
  for (const entry of document.getElementsByClassName('bibliography-entry')) {
    entry.addEventListener('click', function() {
      entry.classList.remove('active');
    });
  }