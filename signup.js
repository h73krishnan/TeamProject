document.querySelector(".green").addEventListener("click", viewFunc);


  var headname=document.querySelector("#viewmore") || []
  headname.style.maxWidth="0px"
  // how " " in quotes value result 
  
  function viewFunc(){
    var stopscroll = document.querySelector(".stopscroll");
      stopscroll.style.height="100%";
      stopscroll.style.overflow="hidden";
      var count = 0;

      if(headname.style.maxWidth=="0px"){
          headname.style.maxWidth="1200px"
          count++;
      }
      else{
          headname.style.maxWidth="0px"
      }
      if(count==0){
        closeButton(headname);
        
      }
      
  }
document.querySelector(".close").addEventListener("click", closeButton);
function closeButton(){
  var stopscroll = document.querySelector(".stopscroll");
      stopscroll.style.height="100%";
      stopscroll.style.overflow="scroll";
  
  if(headname.style.maxWidth=="1200px"){
    headname.style.maxWidth="0px"
  }else{
    headname.style.maxWidth="0px"
  }

}


// document.querySelector("#signupForm").addEventListener("submit", signupFunction);

// var signCred = JSON.parse(localStorage.getItem("signupCred")) || [];

// function signupFunction(){
//     event.preventDefault();

//     var obj = {
//         phone: document.querySelector("#phone").value,
//         otp: document.querySelector("#otp").value
//     };
//     // signCred.push(obj);
//     // console.log(signCred);
//     // localStorage.setItem("signupCred", JSON.stringify(signCred));
    

//     // document.querySelector(".view").append(btn);

// }

function signupFun(){
  event.preventDefault();

  var obj = {
      phone: document.querySelector("#phone").value,
      otp: document.querySelector("#otp").value
  };
  if (Number(obj.otp) == 1234){
    window.location.href = "index.html";
    
  }
  else{
    alert("Please enter OTP: 1234");
  }
}



