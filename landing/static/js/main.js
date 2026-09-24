(function () {
    var toggle = document.querySelector('.site-nav-toggle');
    var menu = document.getElementById('site-nav-links');

    toggle.addEventListener('click', function () {
        var expanded = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(expanded));
    });
})();
