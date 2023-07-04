const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector('.submenu-open_btn')
const submenu = document.querySelector('.submenu')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.nav')
const cart = document.querySelector('.cart')
const overlay = document.querySelector('.overlay')
const navCloseBtn = document.querySelector('.nav-closebtn')
const cartCloseBtn = document.querySelector('.cart-closebtn')
const cartIcon = document.querySelector('.cart-icon')

const addEventOnElement = function(elements, eventType, callBack) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callBack);
    }
  };
  
toggleThemeBtns.forEach(btn=>{
    btn.addEventListener("click" , () => {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

submenuOpenBtn.addEventListener('click',(e)=>{
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    let sub=submenu.classList.toggle('submenu-open')
    const subs = (!sub) ? submenuOpenBtn.classList.remove('rotate-180') : submenuOpenBtn.classList.add('rotate-180') 
    subs;
})

const overlayClick = function(element,removeClass,addClass){
    overlay.addEventListener('click',()=>{
        element.classList.remove(removeClass)
        element.classList.add(addClass)
        overlay.classList.remove('overlay--visibel')
    })
}

// nav
const navIcons = ()=>{
    nav.classList.remove('-right-64')
    nav.classList.toggle('right-0')
    overlay.classList.toggle('overlay--visibel')
    
}

const navCloseBtns= ()=>{
    nav.classList.remove('right-0')
    nav.classList.toggle('-right-64')
    overlay.classList.remove('overlay--visibel')
}

// cart
const cartIcons = ()=>{
    cart.classList.remove('-left-64')
    cart.classList.toggle('left-0')
    overlay.classList.toggle('overlay--visibel')
    
}

const cartCloseBtns = ()=>{
    cart.classList.remove('left-0')
    cart.classList.toggle('-left-64')
    overlay.classList.remove('overlay--visibel')
    
}

addEventOnElement([navIcon],'click',navIcons)
addEventOnElement([navCloseBtn],'click',navCloseBtns)
addEventOnElement([cartIcon],'click',cartIcons)
addEventOnElement([cartCloseBtn],'click',cartCloseBtns)

overlayClick(cart,'left-0','-left-64')
overlayClick(nav,'right-0','-right-64')