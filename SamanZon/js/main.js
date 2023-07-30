// DropDown Menu Showing JS in NavBar
var number=0;
DropdownBtn.addEventListener("click" , ()=>{
    if(number == 0){
        gsap.from('#dropdownMenu',{
            y:-10,
            opacity:0,
            scale:1.1
        })
        dropdownMenu.style.display = "block";
        ++number;
    }
    else{
        dropdownMenu.style.display = "none";
        number=0;
    }
})
// --------------- Dropdown menu js ends-----------

//Cart Btn Click
cart.addEventListener("click", ()=>{
    gsap.to('#cart',{
        x:10,
        yoyo:"true",
        repeat:3,
        color:'red',
        duration:'0.5'
    })
})

//News Bar Hidden Timeout Function
// setTimeout(hideNewsBar,5000);


// function hideNewsBar() {
//     newsBar.style.display="none";
// }