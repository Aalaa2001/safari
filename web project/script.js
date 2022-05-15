
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let videoBtn=document.querySelectorAll('.vid-btn');
//header section
window.onscroll = ()=>{
   
    loginForm.classList.remove('active');
}

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
//header section ends
//video section
videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src= btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src ;
    });
});
//video section ends


