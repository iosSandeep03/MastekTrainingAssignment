function validate(){
    const firstName=document.getElementById("firstName").value;
    const lastName=document.getElementById("lastName").value;
    const cityName=document.getElementById("cityName").value;
    
    if (firstName.trim() == null || firstName.trim() == "") {
      alert("*Please Enter Your Firstname.");
      return false;
    } else if (lastName.trim() == null || lastName.trim() == "") {
      alert("*Please Enter Your Lastname.");
      return false;
    }
    else if (cityName.trim() == null || cityName.trim() == "") {
      alert("*Please Enter Your City.");
      return false;
    } else {
  
      return true;
    }
  }