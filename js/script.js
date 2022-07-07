const burger = document.querySelector('.burger'),
      headercontainer = document.querySelector('.header__container');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    headercontainer.classList.toggle('active');
    document.body.classList.toggle('lock');
})