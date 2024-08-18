const isActive = () => {

}
const showCart = () => {
    document.getElementById("cartmenu").style.display = "flex"
    document.getElementById("opacity").style.display = "block"
}
localStorage.clear();
const closecartmenu = () => {
    document.getElementById("cartmenu").style.display = "none"
    document.getElementById("opacity").style.display = "none"
}
let fmi=document.querySelectorAll(".food-menu-item")
const buybtn = (event) => {
    let fmarr = ['fm1', 'fm2', 'fm3', 'fm4', 'fm5', 'fm6']
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    let itmcount = document.getElementById("itemcount")
    let cartmenu=document.getElementById('cartmenu')
    itmcount.innerHTML = Number(localStorage.clickcount)
    for (let i = 0; i < fmarr.length; i++) {
        if (this.event.target.id == fmarr[i]) {
            let copyclass=document.getElementsByClassName('food-menu-item');
            cartmenu.appendChild(copyclass[i].cloneNode(true));
            alert(`Food-Menu-Item-${i} is added to your`)
        }

    }

}
window.addEventListener("scroll", () => {
    if (this.scrollY >= 700) {
        document.getElementById("top").style.display = "flex";
        document.getElementById("navbar").style.position="fixed"
    }
    if (this.scrollY < 200) {
        document.getElementById("top").style.display = "none";
        document.getElementById("navbar").style.position="relative"
    }
    
})