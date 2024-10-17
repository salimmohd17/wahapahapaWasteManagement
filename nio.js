
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
document.getElementById('contact-form').addEventListener('click', function(e) {
    e.preventDefault();  

    // Collect form data
   
  /*  var name = document.getElementById('name').value;
       var email=document.getElementById('email').value;
         var message= document.getElementById('message').value;*/
         var name= "Try"
         var email="nickeagle888@gmail.com"
         var message="hi"

         if(name == "" && email=="" && message=="" ){
            alert("Fill in the details before submiting");
         }else{
            const formData = {name,email,message }

    // Replace with your actual web app URL from Apps Script
    const webAppUrl =" https://script.google.com/macros/s/AKfycbx9nVn2xKsISdUMSuu5cz3siYfnwv2He6_HRy181UI/dev"
    // Send data to Google Sheets
   
  try {
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
  } catch (error) {
    alert(error);
  }



   

         }

  
   
    

});

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
    