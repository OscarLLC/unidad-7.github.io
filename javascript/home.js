const menu = document.querySelector(".menu");
const bugerButton = document.querySelector("#bugerMenu");

bugerButton.addEventListener('click', hidenShow)
    function hidenShow(){
        if(menu.classList.contains('is-active')){
            menu.classList.remove('is-active');
        }else{
            menu.classList.add('is-active');
        }
    }

