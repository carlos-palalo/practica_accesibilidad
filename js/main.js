var nav = false;

function openNav(elemento) {
    var x = document.getElementById("menu");
    x.classList.remove("desplazar")
    for (var i = 0; i < x.children.length; i++) {
        x.children[i].tabIndex = "0";
    }

    nav = true;
}

function closeNav(elemento) {
    var x = document.getElementById("menu");
    x.classList.add("desplazar")
    for (var i = 0; i < x.children.length; i++) {
        x.children[i].tabIndex = "-1";
    }
    nav = false;
}

function toggleNav() {
    nav ? closeNav() : openNav();
}

window.onload = codigo;

function codigo() {
    addEvent("menu1", "submenu1");
    addEvent("menu2", "submenu2");
    addEvent("menu3", "submenu3");
}

function addEvent(padre, hijo) {
    var nodoPadre = document.getElementById(padre);
    var nodoHijo = document.getElementById(hijo);
    nodoPadre.addEventListener("mouseenter", function () {
        nodoHijo.style.display = "block";
    });
    nodoPadre.addEventListener("focus", function () {
        nodoHijo.style.display = "block";
        var nietos = nodoHijo.children.length;

        document.getElementById(hijo).children[nietos - 1].addEventListener("focusout", function () {
            this.parentNode.style.display = "none";
        })
    });

    nodoHijo.addEventListener("mouseleave",function(){
        this.style.display="none";
    })
}

$(function () {
    if ($(window).width() < 801) {
        vistaMovil();
    } else {
        vistaOrdenador();
    }
    $(window).resize(function () {
        if ($(this).width() < 801) {
            vistaMovil();
        } else {
            vistaOrdenador();
        }
    })
})

function vistaMovil() {
    $(".hamburger").attr("tabIndex", "0");
    $("#menu button").attr("tabIndex", "-1");

    $("#menu").on("click", function () {
        $(this).addClass("desplazar");
    })

    $("#menu button").on("click", function () {
        $("article").hide();
        $("#" + $(this).attr("class")).show();
        $("#menu button").attr("tabIndex", "-1");
        $(window).scrollTop(0);
    })
}

function vistaOrdenador() {
    $(".hamburger").attr("tabIndex", "-1");
    $("#menu button").attr("tabIndex", "0");

    $("#menu button").on("click", function () {
        $("article").hide();
        $("#" + $(this).attr("class")).show();
        $("#menu button").attr("tabIndex", "0");
    })
}