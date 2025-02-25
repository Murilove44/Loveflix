const checkbox = document.getElementById('cb3-8');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.style.backgroundColor = '#808980'; 
    document.body.style.color = 'black'; 
  } else {
    document.body.style.backgroundColor = '#0A0A0A'; 
    document.body.style.color = 'white'; 
  }
});

function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

  