// DropDown Menu Showing JS in NavBar
var number=0;
DropdownBtn.addEventListener("click" , ()=>{
    
    if(number == 0){
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
    alert("Cart is Empty!");
})

//News Bar Hidden Timeout Function
setTimeout(hideNewsBar,5000);

function hideNewsBar() {
    newsBar.style.display="none";
}