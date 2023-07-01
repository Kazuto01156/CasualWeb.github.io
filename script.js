function openMenu(menu) {
    let i;
    let x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(menu).style.display = "block";
}