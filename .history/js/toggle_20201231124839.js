window.onload = function(){
    let main = document.getElementById('main'),
        menu = document.querySelector('.menu-right');
        btn = document.querySelector('.toggle');
        btnIcon = document.querySelector('.toggle > span');

    btn.addEventListener('click', function () {

        if (main.classList.contains('hidden')) {
            main.classList.remove('hidden');
            btnIcon.classList.remove('fa-times');
            menu.classList.add('hidden')
            setTimeout(function () {
                main.classList.remove('visuallyhidden');
                menu.classList.add('visuallyhidden');

            }, 20);
        }
        else {
            main.classList.add('visuallyhidden');
            menu.classList.remove('visuallyhidden');
            btnIcon.classList.add('fa-times');
            main.addEventListener('transitionend', function(e) {
                main.classList.add('hidden');
                menu.classList.remove('hidden');
            }, {
                capture: false,
                once: true,
                passive: false
            });
        }

    }, false);

}