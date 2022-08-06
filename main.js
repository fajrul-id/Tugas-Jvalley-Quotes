//buat variable menu_icon
let menu_icon = document.getElementById('menu_icon');
let aside_menu = document.getElementById('aside_menu');
let close_icon = document.getElementById('close_icon');
let menu_box = document.getElementById('menu_box');
// show menu
menu_icon.addEventListener('click', () => {
  aside_menu.style.display = 'flex';
  setTimeout(() => {
    menu_box.style.transform = 'translateX(0%)';
  }, 200);
});

// close menu
close_icon.addEventListener('click', () => {
  menu_box.style.transform = 'translateX(100%)';
  setTimeout(() => {
    aside_menu.style.display = 'none';
  }, 200);
});
