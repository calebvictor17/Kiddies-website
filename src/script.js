const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');
const navbar = document.getElementById('nav');

// Add event listener
openMenu.addEventListener('click', function(){
    navbar.style.display = 'flex'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', function(){
    navbar.style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
})