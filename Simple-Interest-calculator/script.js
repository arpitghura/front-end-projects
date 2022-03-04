function compute()
{
    // getting all required values 
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var year = new Date().getFullYear() + parseInt(years);
    // Validating Principle value
    if(principle > 0){
        // calculating interest
        var interest = principle * years * rate / 100 ;

        // printing the interest rate briefly
        document.getElementById("result").innerHTML = `If you deposit <span class="cyel">${principle}</span>,
        at an interest rate of <span class="cyel">${rate}</span>%.
        You will receive an amount of <span class="cyel">${interest}</span>,
        in the year <span class="cyel">${year}</span>` ;
    }
    else{
        alert("Enter a positive number");
        //focus on the principle field
        document.getElementById("principal").focus();
    }

}
// function to update rate value when user slides the slider
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
