
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
document.getElementById("dropdownmenubutton").addEventListener("click", function() {
    document.getElementById("dropdownmenu").classList.toggle("show");})
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {})
  e.preventDefault();  // Prevent form refresh

  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    message: document.getElementById('message').value.trim(),
  };
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

const previewVideo = document.getElementById("previewVideo");

// Loop the first 5 seconds indefinitely
previewVideo.addEventListener('timeupdate', () => {
  if (previewVideo.currentTime >= 5) {
    previewVideo.currentTime = 0;
  }
});

function openVideoPopup() {
  const modal = document.getElementById("videoModal");
  const popupVideo = document.getElementById("popupVideo");
  modal.style.display = "block";
  popupVideo.currentTime = 0;
  popupVideo.play();
}

function closeVideoPopup() {
  const modal = document.getElementById("videoModal");
  const popupVideo = document.getElementById("popupVideo");
  popupVideo.pause();
  modal.style.display = "none";
}

  function openModal(id) {
    document.getElementById(id).style.display = "flex";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
function scrollTeam(direction) {
  const container = document.querySelector('.team-container'); // change this class to your actual scrollable content

  if (!container) return;

  const isMobile = window.innerWidth <= 768;

  // Amount to scroll per click (can be adjusted)
  const scrollAmount = isMobile ? container.clientHeight / 2 : container.clientWidth / 2;

  container.scrollBy({
    top: isMobile ? scrollAmount * direction : 0,
    left: isMobile ? 0 : scrollAmount * direction,
    behavior: 'smooth'
  });
}


//team and event
function scrollTeam(direction) {
  const container = document.querySelector('.team-container');
  if (!container) return;

  const isMobile = window.innerWidth <= 768;
  const scrollAmount = isMobile ? container.clientHeight / 2 : container.clientWidth / 2;

  container.scrollBy({
    top: isMobile ? scrollAmount * direction : 0,
    left: isMobile ? 0 : scrollAmount * direction,
    behavior: 'smooth'
  });
}

// Optional: Video popup functionality
function openVideoPopup() {
  document.getElementById('videoModal').style.display = 'block';
  document.getElementById('popupVideo').play();
}

function closeVideoPopup() {
  document.getElementById('popupVideo').pause();
  document.getElementById('videoModal').style.display = 'none';
}