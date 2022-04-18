

const SideMenu = document.querySelector("aside");
const MenuBtnn = document.querySelector(".menu");
const CloseBtn = document.querySelector("#med");
const ChangeTheme = document.querySelector(".site-mode")

MenuBtnn.addEventListener('click',() => {
    SideMenu.style.display = 'block' ;
})
CloseBtn.addEventListener('click' , () => {
     SideMenu.style.display = 'none' ;
}) 
ChangeTheme.addEventListener('click' , () => {
    document.body.classList.toggle('active') ;
    ChangeTheme.querySelector('span:nth-child(1)').classList.toggle('active');
    ChangeTheme.querySelector('span:nth-child(2)').classList.toggle('active');
}) 



