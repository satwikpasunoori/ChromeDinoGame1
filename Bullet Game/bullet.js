
document.addEventListener('keypress',() => {
    document.getElementById("Bike").classList.add('jump-animation')
    document.getElementById("Cone").classList.add("Cone") 
    setTimeout(()=>{
    document.getElementById("Bike").classList.remove('jump-animation') 
    },600)
})
 setInterval(()=>{
    document.getElementById("score").innerText++;
    
    const bikeTop = parseInt(window.getComputedStyle(document.getElementById("Bike")).getPropertyValue("top"));
    const coneLeft = parseInt(window.getComputedStyle(document.getElementById("Cone")).getPropertyValue("left"));

    if (coneLeft < 0) {
        document.getElementById("Bike").style.display = 'none' ;
    } else {
       document.getElementById("Bike").style.display = '' ;
}
    if(coneLeft > 35 && coneLeft < 200 && bikeTop >45){
        alert("keyDown To Play Agaig !")
        location.reload();
    }
    
 },50)   
