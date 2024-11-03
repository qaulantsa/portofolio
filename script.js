fetch('components/navbar.html')
.then(response => response.text())
.then(data => {
  document.body.insertAdjacentHTML('afterbegin', data);
});

fetch('components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('beforeend', data);
  });


  document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);


        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
  const modals = document.getElementsByClassName(' modal');
  for (let i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
          closeModal(modals[i].id);
      }
  }
}