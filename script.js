let state=false;
let password=document.getElementById('password');
let email=document.getElementById('email');
// let emailDiv=document.querySelector('.email')   
let username=document.getElementById('name')
let password_strength=document.getElementById('password-strength')
let lowerUpper=document.querySelector(".lower-uper-case   i");
let number=document.querySelector('.one-number   i');
let specialChar=document.querySelector('.one-special-char i');
let eightChar=document.querySelector('.eight-char i');

function _id(name)
{
   return document.getElementById(name);
}

function _class(name)
{
   return document.getElementsByClassName(name);
}
_class("toggle-password")[0].addEventListener("click",function(){
    _class("toggle-password")[0].classList.toggle("active");
    if(_id("password").getAttribute("type") == "password"){
      _id("password").setAttribute("type","text");
    } else {
      _id("password").setAttribute("type","password");
    }
  });



_id('password').addEventListener('focus',()=>
{
   _class('check')[0].classList.add('active');
//    document.querySelector('.toggle-password').style.position="absolute"
//    document.querySelector('.toggle-password').style.removeProperty="top"
//    document.querySelector('.toggle-password').style.top="500px"
//    document.querySelector('.toggle-password').style.display="inline"




})
_id('password').addEventListener('blur',()=>
{
   _class('check')[0].classList.remove('active');

})



// let emailVal=email.value;
// if (emailVal==="")
// {
//    email.classList.add('pass_err')
   
// }
// else
// {
//    email.classList.remove('pass_err')
// }










function myFunction(show)
{
    show.classList.toggle('fa-eye-slash')
}

function toggle()
{
    if (state)
    {
        password.setAttribute("type","password");
        state=false;
        
    }
    else
    {
        password.setAttribute("type","text");
        state=true;


    }
}





password.addEventListener("keyup",()=>
{
    let pass=password.value;
    checkStrength(pass);

})



function checkStrength(password)
 {
     let strength=0;
     if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
    {
        strength+=1;
        lowerUpper.classList.remove('fa-exclamation-circle');
        lowerUpper.classList.add('fa-check-circle');



        // lowerUpper.classList.remove('one-special-char');
        // lowerUpper.classList.remove('eight-char');
        // lowerUpper.classList.remove('one-number');
      //   lowerUpper.style.display="inline"

         
     }
     else
     {
        lowerUpper.classList.add('fa-exclamation-circle');
        lowerUpper.classList.remove('fa-check-circle');


        // lowerUpper.classList.remove('one-special-char');
        // lowerUpper.classList.remove('eight-char');
        // lowerUpper.classList.remove('one-number');


      //   lowerUpper.style.display="inline"

     }


     if (password.match(/([0-9])/)) 
     {
        strength+=1;
        number.classList.remove('fa-exclamation-circle');
        number.classList.add('fa-check-circle');
         
     }
     else
     {
        number.classList.add('fa-exclamation-circle');
        number.classList.remove('fa-check-circle');

     }

    if (password.match(/([!,@,#,$,%,^,&,*,/,_,~])/)) 
     {
        strength+=1;
        specialChar.classList.remove('fa-exclamation-circle');
        specialChar.classList.add('fa-check-circle');
         
     }
     else
     {
        specialChar.classList.add('fa-exclamation-circle');
        specialChar.classList.remove('fa-check-circle');

     }


     if (password.length>=7)
    {
        strength+=1;
        eightChar.classList.remove('fa-exclamation-circle');
        eightChar.classList.add('fa-check-circle');

         
     }
     else
     {
        eightChar.classList.add('fa-exclamation-circle');
        eightChar.classList.remove('fa-check-circle');
     }


     if (strength==0)
    {
        password_strength.style="width:0%"

         
     }
     else if(strength==2)
     {
           password_strength.classList.remove("progress-bar-warning")
           password_strength.classList.remove("progress-bar-success");
           password_strength.classList.add("progress-bar-danger");
           password_strength.style="width:10%"


     }
     else if(strength==3)
     {
           password_strength.classList.remove("progress-bar-danger")
           password_strength.classList.remove("progress-bar-success");
           password_strength.classList.add("progress-bar-warning");
           password_strength.style="width:60%"


     }
     else if(strength==4)
     {
           password_strength.classList.remove("progress-bar-danger")
           password_strength.classList.remove("progress-bar-warning");
           password_strength.classList.add("progress-bar-success");
           password_strength.style="width:100%"


     }
    
}