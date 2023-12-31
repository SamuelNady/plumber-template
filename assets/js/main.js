const header = document.querySelector("header");
const menuToggler = document.querySelector("header .toggle-menu");
const menu = document.querySelector("header .container nav");
const menuOverlay = document.querySelector("header .container .overlay");
const navElements = document.querySelectorAll("header .container nav ul li");

// navbar functionaliy

menuToggler.addEventListener('click',function() {
    menu.classList.toggle('menu-vis');
});

menuOverlay.addEventListener('click', function () {
    menu.classList.remove('menu-vis')
});

navElements.forEach(function(e) {
    e.addEventListener('click',function() {
        menu.classList.remove('menu-vis');
    });
});


// status functinoality

let in_view = false;
window.onscroll = () => {
    let section = document.querySelector('.status').getBoundingClientRect().top;
    let view = section < window.innerHeight;
    if (!view) {
        in_view = false;
    }

    if (!in_view && view) {
        in_view = true;
        // status
        let status = [2536, 6784, 1059, 12239];
        status.forEach(function (e, index) {
            let i = 0;
            let int = setInterval(function () {
                if (e > 10000) {
                    i += 40;
                }else if (e > 5000){
                    i += 20;
                }else {
                    i += 10;
                }
                document.querySelector(`.status .container .item:nth-child(${index+1}) span`).innerHTML = i;
                if (i >= e) {
                    clearInterval(int);
                }
            });
        });
    }


    // header background changeing functionality

    if (window.scrollY >= 50) {
        header.classList.add('dark-bg');
    }else {
        header.classList.remove('dark-bg');
    }
}