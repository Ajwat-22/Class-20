
//Login Form
document.getElementById('btn').addEventListener('click', function(){
    if (document.getElementById('psr').type == 'text'){
        document.getElementById('psr').type = 'password';
        document.getElementById('btn').innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    }else{
        document.getElementById('psr').type = Text;
        document.getElementById('btn').innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
})

//Dark & Light Color Generator
let mode_toggler= document.getElementById('mode_toggler');
let root= document.documentElement;

mode_toggler.addEventListener('click', function(){
    if(root.classList.contains('dark')){
        root.classList.remove('dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        localStorage.removeItem('mode')
    }else{
        root.classList.add('dark')
        localStorage.setItem('mode', 'dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
})

if(localStorage.getItem('mode') == 'dark'){
    root.classList.add('dark')
}