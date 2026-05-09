let profileCard = document.querySelector("#profile-card")
let container = document.querySelector("#container")
let box = document.querySelector("#box")
let welcome = document.querySelector("#welcome")





profileCard.addEventListener("click", function(){
     container.style.display = "none"
     box.style.display = "none"
     welcome.style.display = "flex"

     setTimeout(()=>{
          window.location.href = "/Dashboard/dashboard.html";
          
     },3000)

  
     
})


