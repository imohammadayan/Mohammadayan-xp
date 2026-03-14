






//===============================ABOUT ME =============================


const AboutMe = document.querySelector("#AboutMe")
const AboutMeBrowser = document.querySelector("#xpWrapAyan")
const AboutMeCloseBtn = document.querySelector(".xpBtnCloseAyan")
const xpTitleTextAyan = document.querySelector(".xpTitleTextAyan")
const AddressAboutMe = document.querySelector("#AddressAboutMe")
const AboutMeMaximize = document.querySelector(".maximize")
const AboutMeMinimize = document.querySelector(".minimize")
const tab = document.querySelector(".AboutMeTab")
const tabCloseBtn = document.querySelector(".tabCloseBtn")



AboutMe.addEventListener("click", function(){
    AboutMeBrowser.style.display = "flex";
    tab.style.display = "flex"
})
AboutMeCloseBtn.addEventListener("click", function(){
    AboutMeBrowser.style.display = "none";
    tab.style.display = "none"
})

// Maximize
AboutMeMaximize.addEventListener("click",function(){
    AboutMeBrowser.style.width = "100%"
    AboutMeBrowser.style.height = "100%"
    
})

// Minimize
AboutMeMinimize.addEventListener("click",function(){
    tab.style.display = "flex"
    AboutMeBrowser.style.width = "800px"
    AboutMeBrowser.style.height = "600px"
})

// Tab
tabCloseBtn.addEventListener("click", function(){
    AboutMeBrowser.style.display = "none";
     tab.style.display = "none"
})






// ================================== MY RESUME =====================================

const Resume = document.querySelector("#Resume")
const ResumeBrowser = document.querySelector(".xp-browser")
const ResumeCloseBtn = document.querySelector("#resumeCloseBtn")
const ResumeMaximize = document.querySelector(".ResumeMaximize")
const ResumeMinimize = document.querySelector(".ResumeMinimize")
const MyResumeTab = document.querySelector(".MyProectsTab")
const tabCloseBtnMyResume = document.querySelector(".tabCloseBtnMyResume")

Resume.addEventListener("click", function(){
    ResumeBrowser.style.display = "flex";
    MyResumeTab.style.display = "flex"
})

ResumeCloseBtn.addEventListener("click", function(){
    ResumeBrowser.style.display = "none";
     MyResumeTab.style.display = "none"
})

// Maximize
ResumeMaximize.addEventListener("click" , function(){
    ResumeBrowser.style.height = "100%"
    ResumeBrowser.style.width = "100%"

})

// Minimize
ResumeMinimize.addEventListener("click" , function(){
    ResumeBrowser.style.height = "600px"
    ResumeBrowser.style.width = "800px"
})

// Tab
tabCloseBtnMyResume.addEventListener("click" , function(){
    ResumeBrowser.style.display = "none";
     MyResumeTab.style.display = "none"
})





// ============================= My Project===============================

const MyProject = document.querySelector(".window")
const MyProjectIcon = document.querySelector("#MyProject")
const MyProjectClose = document.querySelector(".MyProjectClose")
const MyProjectsmaximize = document.querySelector(".MyProjectsmaximize")
const MyProjectsminimize = document.querySelector(".MyProjectsminimize")
const MyProjectsTab = document.querySelector(".MyProjectsTab")
const tabCloseBtnMyProjects = document.querySelector(".tabCloseBtnMyProjects")
 
MyProjectClose.addEventListener("click", function(){
    MyProjectsTab.style.display = "none"
    MyProject.style.display = "none";
    
 
})
MyProjectIcon.addEventListener("click", function(){
    MyProjectsTab.style.display = "flex"
    MyProject.style.display = "inline";
    
 
})

// Maximize
MyProjectsmaximize.addEventListener("click" , function(){
    MyProject.style.height = "100%"
    MyProject.style.width = "100%"

})

// Minimize
MyProjectsminimize.addEventListener("click" , function(){
    MyProject.style.height = "600px"
    MyProject.style.width = "800px"
})

// Tab
tabCloseBtnMyProjects.addEventListener("click" , function(){
    MyProject.style.display = "none";
    MyProjectsTab.style.display = "none"
})




// ================================Contact Me===================================



const ContactMe = document.querySelector(".contact-me")
const ContactMeIcon = document.querySelector("#ContactMe")
const ContactMeCloseBtn = document.querySelector(".ContactMeCloseBtn")
const ContactMeMaximize = document.querySelector(".ContactMeMaximize")
const ContactMeMinimize = document.querySelector(".ContactMeMinimize")
const ContactMeTab = document.querySelector(".ContactMeTab")
const tabCloseBtnContactMe = document.querySelector(".tabCloseBtnContactMe")
 
ContactMeCloseBtn.addEventListener("click", function(){
    ContactMeTab.style.display = "none"
    ContactMe.style.display = "none";

})


ContactMeIcon.addEventListener("click", function(){
    ContactMeTab.style.display = "flex"
    ContactMe.style.display = "inline";
})

// Maximize
ContactMeMaximize.addEventListener("click" , function(){
    ContactMe.style.height = "100%"
    ContactMe.style.width = "100%"
})

// Minimize
ContactMeMinimize.addEventListener("click" , function(){
    ContactMe.style.height = "600px"
    ContactMe.style.width = "800px"
})

// Tab
tabCloseBtnContactMe.addEventListener("click" , function(){
    ContactMe.style.display = "none";
    ContactMeTab.style.display = "none"
})






// ================================  Start Menu=========================================


const startButton = document.querySelector("#startButton")
 menu = document.querySelector(".start-menu")

startButton.addEventListener("click", function(){

if(menu.style.display == "inline"){
menu.style.display = "none"
}
else{
menu.style.display = "inline"
}

})




// =================================Window Sound===================================

// window.onload = function(){
//     document.getElementById("xpSound").play();
// }




// =====================================Email JS==============================================




document.addEventListener("DOMContentLoaded", function(){

(function(){
emailjs.init("6l6CZ8DCCn5mN1Bew");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_wnlolbs",
"template_k6xtexc",
this
)
.then(function(){

alert("Message Sent Successfully!");
document.getElementById("contact-form").reset();

})
.catch(function(error){

console.log(error);
alert("Failed to send message");

});

});

});












   














// ================================ logoff & Shutdown=====================

logoff.addEventListener("click", function(){
    window.location.href = "/Login-Page/Login-Page.html";
          
})








