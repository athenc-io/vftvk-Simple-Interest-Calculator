//function to reflect value selected in the range(slider) element
function updateRate() {
    //retrieves the value selected on the slider
    var rateval = document.getElementById("rate").value;
    //sets the value in the span to rateval, with 2 decimal places 
    document.getElementById("rate_val").innerText = (Math.round(rateval * 100) / 100).toFixed(2) + "%";
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
      var principal = document.getElementById("principal").value;
      if(principal <0 || principal == 0){
      alert("Enter a positive number");
      principal.focus();
      return false;
      }
    }
    
    var computeBtn = document.getElementById("compute-btn");
    //when "compute-btn" button is clicked, functions checkdata and compute execute
    computeBtn.addEventListener("click", checkdata)
    computeBtn.addEventListener("click", compute)
    
    