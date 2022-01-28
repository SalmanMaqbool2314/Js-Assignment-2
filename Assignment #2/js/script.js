document.getElementById("clear1").onclick=function(){
    document.getElementById("statment").innerHTML="";
}
document.getElementById("clear").onclick=function(){
    document.getElementById("output").innerHTML="";
}

document.getElementById("one").onclick=function(){
    var message = "Good morning ";
    var name = prompt("Enter Your Name");
    var concatenate = message + name + "!";

    document.getElementById("statment").innerHTML='var concatenate = '+ message + name + "!";;
    document.getElementById("output").innerHTML=  concatenate;
}

document.getElementById("two").onclick=function(){
    var name = prompt("Enter Your Name");
    alert(name);
    document.getElementById("statment").innerHTML= 'Good morning '+ name;
    document.getElementById("output").innerHTML= 'Good morning '+ name;
}

document.getElementById("three").onclick=function(){
     var num1 = +prompt("Enter num1");
     var num2 = +prompt("Enter num2");
     if (num1 < num2) {
         alert("Yes, Your condition is true");
     }
}

document.getElementById("four").onclick=function(){
    var num1 = +prompt("Enter num1");
    var num2 = +prompt("Enter num2");
    if (num1 > num2) {
        alert("Yes, Your condition is true.");
    }
    else if (num1 == num2) {
        alert("Yes, Your second condition is true.");
    } else {
        alert("No, Your condition is false.");   
    }
}

document.getElementById("five").onclick=function(){
   var age = +prompt("Enter your age");
   var weight = +prompt("Enter your weight");
   if (age>=18 && weight<=70) {
       alert("You are a smart man.");   
   }
   else if (age>=18 && weight>70) {
    alert("You are a fat guy."); 
   } else{
    alert("You are a child."); 
   }
}

document.getElementById("six").onclick=function(){

    var age = +prompt("Enter your age");
    if (age>=18) {
        var weight = +prompt("Enter your weight");
        if (weight<=70) {
            alert("You are a smart man.");   
        }else{
            alert("You are a fat guy."); 
        }
    }
    else{
        alert("You are a child.");  
    }
}

document.getElementById("seven").onclick=function(){
    var userName = prompt("Your user name");
    var password = prompt("Your password");
    if (userName=="nadeem" || userName=="Nadeem" && password=="123") {
        alert("User logged in.");
    }
    else{
        alert("Your userName and password is wrong."); 
    }
 }