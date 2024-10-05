
const dropdownmenubutton = document.getElementById('dropdownmenubutton');
const dropdownmenu = document.getElementById('dropdownmenu');
dropdownmenubutton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    dropdownmenu.style.display = dropdownmenu.style.display === 'block' ? 'none' : 'block'; 
    document.addEventListener('click', function(event) {
        const isClickInside = dropdownmenubutton.contains(event.target) || dropdownmenu.contains(event.target);
        if (!isClickInside) {
            dropdownmenu.style.display = 'none'; 
        }
    }, { once: true }); 
});
document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();  

    
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    var webAppUrl = 'https://script.google.com/macros/s/AKfycbx9nVn2xKsISdUMSuu5cz3siYfnwv2He6_HRy181UI/dev';

    fetch(webAppUrl, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Data successfully submitted to Google Sheets');
        } else {
            alert('Submission failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your data.');
    });
});
