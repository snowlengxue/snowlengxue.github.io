/*
 *
 *  menu open and close
 *
 */
var drawer = document.getElementById("drawer");
var menu = document.getElementById("menu");
menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    menu.classList.toggle('close');
    e.stopPropagation();
});