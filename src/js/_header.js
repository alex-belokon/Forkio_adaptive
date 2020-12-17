const btn = document.querySelector('.burger');
const menu = document.querySelector('.main-menu');
const toggleMenu = function () {
    menu.classList.toggle('open');
}

btn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btn;
    const menu_is_active = menu.classList.contains('open');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

btn.addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
})

document.addEventListener('click', function () {
    document.querySelector('.burger span').classList.remove('active');

})
