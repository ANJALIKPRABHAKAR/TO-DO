function validate(){
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;
    if((Username=!null)&&(Password==null)){
    window.location = "attendance_reg.html";
    return false;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
    }
  }
function welcome(){
    var welcome=document.getElementById("Username").innerHTML=Username;
    var message="Welcome" + welcome
    return message;
}