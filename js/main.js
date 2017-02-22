function mobileMenu() {
    var $menu = $("header nav");
    var $open = $("#menu-open");
    var $close = $("#menu-close");

    if (document.documentElement.clientWidth < 658) {
        $open.show()
        $open.on("click", function() {
            $menu.fadeIn();
            $menu.css("left", "0px");
            $menu.css("box-shadow", "0 0 20px rgba(0,0,0, .7) ");
        });

        $("#menu-close, header nav ul li a").on("click", function() {
            $menu.fadeOut();
            $menu.css("left", "-250px");
            $menu.css("box-shadow", "none");
        });

    } else {
        $open.hide()
    }
}

module.exports = mobileMenu;
