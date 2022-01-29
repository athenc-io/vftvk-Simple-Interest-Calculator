//function to reflect value selected in the range(slider) element
function updateRate() {
    //retrieves the value selected on the slider
    var rateval = document.getElementById("rate").value;
    //sets the value in the span to rateval
    document.getElementById("rate_val").innerText = rateval + "%";
  }
  //function to calculate return amount with interest
  function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    //retrieve the current year and add the number of years the user selected (from no. of years dropdown menu)
    var year = new Date().getFullYear() + parseInt(years);
    //modify empty string in result with new string and variables
    document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,<br>"+"at an interest rate of <mark>"+rate+"%</mark>.<br>"+"You will receive an amount of <mark>"+interest+"</mark>,<br>"+"in the year <mark>"+year+"</mark>";
    }
    
//validation for "Principal" input box 
function checkdata() {
    var principal = document.getElementById("principal");
    if(principal.value <0 || principal.value == 0){
    alert("Enter a positive number");
    return principal.focus();
    }
    //if function 'checkdata' passes then function 'compute' can execute
    return compute();
}