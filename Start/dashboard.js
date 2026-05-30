

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
const AboutMeMenu = document.querySelector(".AboutMeMenu")
const AboutMeText = document.querySelectorAll(".AboutMeText")
const xpLeftPanelAyan = document.querySelector(".xpLeftPanelAyan")



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
    xpLeftPanelAyan.style.width = "200px"
    AboutMeText.forEach((text)=>{
        text.style.fontSize = "large"
        text.style.marginTop = "20px"
    })
    
})

// Minimize
AboutMeMinimize.addEventListener("click",function(){
    tab.style.display = "flex"
    AboutMeBrowser.style.width = "800px"
    AboutMeBrowser.style.height = "600px"
    AboutMeText.forEach((text)=>{
        text.style.fontSize = "small"
        text.style.marginTop = "0px"
    })
})

// Tab
tabCloseBtn.addEventListener("click", function(){
    AboutMeBrowser.style.display = "none";
     tab.style.display = "none"
})

//Menu

// Menu
AboutMeMenu.addEventListener("click", function(){
    menu.style.display = "none"
    AboutMeBrowser.style.display = "flex";
    tab.style.display = "flex"
})






// ================================== MY RESUME =====================================

const Resume = document.querySelector("#Resume")
const ResumeBrowser = document.querySelector(".xp-browser")
const ResumeCloseBtn = document.querySelector("#resumeCloseBtn")
const ResumeMaximize = document.querySelector(".ResumeMaximize")
const ResumeMinimize = document.querySelector(".ResumeMinimize")
const MyResumeTab = document.querySelector(".MyResumeTab")
const tabCloseBtnMyResume = document.querySelector(".tabCloseBtnMyResume")
const MyResumeMenu = document.querySelector(".MyResumeMenu")

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

// Menu
MyResumeMenu.addEventListener("click", function(){
    menu.style.display = "none"
   ResumeBrowser.style.display = "flex";
    MyResumeTab.style.display = "flex"
})






// ============================= My Project===============================

const MyProject = document.querySelector(".window")
const MyProjectIcon = document.querySelector("#MyProject")
const MyProjectClose = document.querySelector(".MyProjectClose")
const MyProjectsmaximize = document.querySelector(".MyProjectsmaximize")
const MyProjectsminimize = document.querySelector(".MyProjectsminimize")
const MyProjectsTab = document.querySelector(".MyProjectsTab")
const tabCloseBtnMyProjects = document.querySelector(".tabCloseBtnMyProjects")
const MyProjectMenu = document.querySelector(".MyProjectMenu")
const Projects = document.querySelectorAll(".projects")
const SideBar = document.querySelector(".sidebar")
const Card = document.querySelectorAll(".card")
const CardImg = document.querySelectorAll(".cardImg")

 
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
    SideBar.style.height = "560px"
    SideBar.style.width = "250px"
  

    Card.forEach((Card)=>{
    Card.style.height = "225px"
    Card.style.width = "400px"
    Card.style.marginLeft = "100px"
    })

    CardImg.forEach((img)=>{
    img.style.height = "160px"
    })
    


})

// Minimize
MyProjectsminimize.addEventListener("click" , function(){
    MyProject.style.height = "600px"
    MyProject.style.width = "800px"
    SideBar.style.height = "460px"
    SideBar.style.height = "180px"

    Card.forEach((Card)=>{
    Card.style.height = "190px"
    Card.style.width = "250px"
    Card.style.marginLeft = "20px"
   
    })
    CardImg.forEach((img)=>{
    img.style.height = "115px"
    })
    
})

// Tab
tabCloseBtnMyProjects.addEventListener("click" , function(){
    MyProject.style.display = "none";
    MyProjectsTab.style.display = "none"
})


// Menu
MyProjectMenu.addEventListener("click", function(){
    menu.style.display = "none"
    MyProjectsTab.style.display = "flex"
    MyProject.style.display = "inline";
})



// ================================Contact Me===================================

const ContactMe = document.querySelector(".contact-me")
const ContactMeIcon = document.querySelector("#ContactMe")
const ContactMeCloseBtn = document.querySelector(".ContactMeCloseBtn")
const ContactMeMaximize = document.querySelector(".ContactMeMaximize")
const ContactMeMinimize = document.querySelector(".ContactMeMinimize")
const ContactMeTab = document.querySelector(".ContactMeTab")
const tabCloseBtnContactMe = document.querySelector(".tabCloseBtnContactMe")
const ContactMeMenu = document.querySelector(".ContactMeMenu")
const ContactMeTextArea = document.querySelector(".ContactMeTextArea")
 
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
    ContactMeTextArea.style.height = "350px"
})

// Minimize
ContactMeMinimize.addEventListener("click" , function(){
    ContactMe.style.height = "600px"
    ContactMe.style.width = "800px"
    ContactMeTextArea.style.height = "250px"
})

// Tab
tabCloseBtnContactMe.addEventListener("click" , function(){
    ContactMe.style.display = "none";
    ContactMeTab.style.display = "none"
})


// Menu
ContactMeMenu.addEventListener("click", function(){
    menu.style.display = "none"
    ContactMeTab.style.display = "flex"
    ContactMe.style.display = "inline";
})






// ================================  Start Menu =========================================


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




// ================================= Window Sound ===================================

window.onload = function(){
    document.getElementById("xpSound").play();
}




// ===================================== Email JS ==============================================




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







// ========================================= TIME =======================================================

function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; 

    minutes = minutes.toString().padStart(2, "0");

    document.getElementById("task-time").textContent =
        hours + ":" + minutes + " " + ampm;
}

updateTime();
setInterval(updateTime, 1000);



// ======================================== PAINT WINDOW ================================

const Paint = document.querySelector(".paint")
const PaintWindow = document.querySelector(".Paint-window")
const PaintClose= document.querySelector(".PaintClose")
const PaintTab= document.querySelector(".PaintTab")
const tabCloseBtnPaint = document.querySelector(".tabCloseBtnPaint")
const PaintMaximize = document.querySelector(".Paintmaximize")
const PaintMinimize = document.querySelector(".Paintminimize")


Paint.addEventListener("click", function(){
menu.style.display = "none"
PaintTab.style.display = "flex"
PaintWindow.style.display = "flex";

})


PaintClose.addEventListener("click", function(){
PaintWindow.style.display = "none";
PaintTab.style.display = "none"
})

// Tab
tabCloseBtnPaint.addEventListener("click", function(){
PaintWindow.style.display = "none";
PaintTab.style.display = "none"
})

// Maximize

PaintMaximize.addEventListener("click", function(){
PaintWindow.style.height = "100%";
PaintWindow.style.width = "100%"

})


PaintMinimize.addEventListener("click", function(){
PaintWindow.style.height = "600px";
PaintWindow.style.width = "800px"
})


// ====================================== My Achievements =============================

const Achievements = document.querySelector(".Achivements")
const AchievementsWindow = document.querySelector("#xpExplorer")
const MyAchievementsClose = document.querySelector(".MyAchievementsClose")
const MyAchievementsTab = document.querySelector(".MyAchievementsTab")
const tabCloseBtnMyAchievements = document.querySelector(".tabCloseBtnMyAchievements")
const MyAchievementsMaximize = document.querySelector(".MyAchievementsmaximize")
const MyAchievementsMinimize = document.querySelector(".MyAchievementsminimize")
const items = document.querySelectorAll("#item")
const xpMainArea = document.querySelector("#xpMainArea")


Achievements.addEventListener("click", function(){
menu.style.display = "none"
MyAchievementsTab.style.display = "flex"
AchievementsWindow.style.display = "flex";

})


MyAchievementsClose.addEventListener("click", function(){
AchievementsWindow.style.display = "none";
MyAchievementsTab.style.display = "none"
})

// Tab
tabCloseBtnMyAchievements.addEventListener("click", function(){
AchievementsWindow.style.display = "none";
MyAchievementsTab.style.display = "none"
})

// Maximize
MyAchievementsMaximize.addEventListener("click", function(){
AchievementsWindow.style.height = "100%";
AchievementsWindow.style.width = "100%"
xpMainArea.style.gridTemplateColumns = "repeat(4, 1fr)";

items.forEach((item)=>{
   item.style.width = "325px"
   item.style.height = "250px"
})

})


MyAchievementsMinimize.addEventListener("click", function(){
AchievementsWindow.style.height = "600px";
AchievementsWindow.style.width = "800px"
xpMainArea.style.gridTemplateColumns = "repeat(3, 1fr)";

items.forEach((item)=>{
   item.style.width = "200px"
   item.style.height = "130px"
})


})



// ========================================= PAINT ======================================

const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

let drawing = false;
let tool = "pencil";

const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");

document.getElementById("pencil").onclick = () => tool="pencil";
document.getElementById("eraser").onclick = () => tool="eraser";

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => {
drawing=false;
ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

function draw(e){

if(!drawing) return;

if(tool==="eraser"){
ctx.strokeStyle="white";
}else{
ctx.strokeStyle=colorPicker.value;
}

ctx.lineWidth=brushSize.value;
ctx.lineCap="round";

ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(e.offsetX,e.offsetY);

}

document.getElementById("clear").onclick=()=>{
ctx.clearRect(0,0,canvas.width,canvas.height);
}

document.getElementById("save").onclick=()=>{
const link=document.createElement("a");
link.download="drawing.png";
link.href=canvas.toDataURL();
link.click();
}


//=================================== Log Off & Shut down =====================================


const logOff = document.querySelector(".log-off")
const shutdown = document.querySelector(".shut-down")


logOff.addEventListener("click" , function(){
    setTimeout(()=>{
       window.location.href = "./Login-Page.html";
    },2000)

})

shutdown.addEventListener("click" , function(){
    setTimeout(()=>{
       window.location.href = "./index.html";
    },2000)
    
    
})







// ================================ logoff & Shutdown=====================

logoff.addEventListener("click", function(){
    window.location.href = "./Login-Page.html";
          
})


// ======================================InfoContainer=============================

// const infoIcon = document.querySelector("#infoIcon")
// const infoContainer = document.querySelector("#infoContainer")

// infoIcon.addEventListener("click",function(){
//     infoContainer.style.display = "flex";
// })

















