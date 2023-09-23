let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
document.body.onscroll = () =>  {
  navbar.classList.remove('active');
}


const email = document.getElementById("email");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



document.querySelectorAll('.products img').forEach(image =>{
  image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').addEventListener('click',function() {
  document.querySelector('.popup-image ').style.display = 'none';
});



