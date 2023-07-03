const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector('.submenu-open_btn')
const submenu = document.querySelector('.submenu')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.nav')
const overlay = document.querySelector('.overlay')
const navCloseBtn = document.querySelector('.nav-closebtn')

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

navIcon.addEventListener('click', ()=>{
    nav.classList.remove('-right-64')
    nav.classList.add('right-0')
    overlay.classList.add('overlay--visibel')
    
})

navCloseBtn.addEventListener('click', ()=>{
    nav.classList.remove('right-0')
    nav.classList.add('-right-64')
    overlay.classList.remove('overlay--visibel')
})