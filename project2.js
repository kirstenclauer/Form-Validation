//Babies born per second counter
var seconds = 0; 
var el = document.getElementById('birthCounter');

window.onload = function() {
    function incrementSeconds(){
    seconds += 4; 
    console.log("Birth count : " + seconds);
    document.getElementById("birthCounter").innerHTML = "About " + seconds + " babies have been born since\n\
                    you have been on this page.";
    }
    var cancel = setInterval(incrementSeconds, 1000);
};

//form validation 
function feedBackFormValidate(){
    var contactFormObj = document.getElementById("contactForm"); 
    var firstname = contactFormObj.firstname.value;
    var lastname = contactFormObj.lastname.value;
    var everythingOK = true; 
    
    if(!validateName(firstname)){
        alert("Error: Invalid first name.");
        everythingOK = false; 
    }
    if(!validateName(lastname)){
        alert("Error: Invalid last name.");
        everythingOK = false; 
    }
    if (everythingOK){
        return true;
    }
    else 
        return false; 
}

//validate name
function validateName(name){
    var p = name.search(/^[-'\w\s]+$/);
    if(p === 0)
        return true; 
    else 
        return false; 
}

