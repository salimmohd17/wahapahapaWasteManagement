
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

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();  // Prevent form refresh

  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
  };

  // Make sure this URL matches your Google Apps Script deployment URL.
  const url = 'https://script.google.com/macros/s/AKfycbwvIvXgR0XRpu4TvenaEwKzL6-VxmzRol97Tvb7o0_k-O__XwXdvrTkt9u-UVAtmBg/exec';

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      if (data.status === 'success') {
        alert('Message sent successfully!');
        form.reset();  // Clear the form after successful submission
      } else {
        alert('Failed to send message. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    });
});
function doPost(e) {
    const jsonResponse = { status: 'success', message: 'Data received' };
    
    return ContentService
      .createTextOutput(JSON.stringify(jsonResponse))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',  // Allow any origin
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
  
// Navigation functions
function goback() {
    window.history.back();
}

function goforwad() {
    window.history.forward();
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function goback(){
    window.history.back();
}
function goforwad(){
    window.history.forward();
}
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
    