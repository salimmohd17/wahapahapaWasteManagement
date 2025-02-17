
  const firebaseConfig = {
    apiKey: "AIzaSyC84lh3ieSHQPvZq1aeF0hAjkDB1-ULTHk",
    authDomain: "contactform-f4a1d.firebaseapp.com",
    databaseURL: "https://contactform-f4a1d-default-rtdb.firebaseio.com",
    projectId: "contactform-f4a1d",
    storageBucket: "contactform-f4a1d.appspot.com",
    messagingSenderId: "266034821447",
    appId: "1:266034821447:web:2136a8c80ab9fd1c9db462"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference your database
  var contactformDB = firebase.database().ref('contactform');

  document.getElementById('contact-form').addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");

    saveMessages(name, email, message);

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove alert after 2 seconds
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 2000);

    // Reset form
    document.getElementById('contact-form').reset();
  }

  const saveMessages = (name, email, message) => {
    var newContactForm = contactformDB.push();
    newContactForm.set({
      name: name,
      email: email,
      message: message
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

