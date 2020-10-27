function myFunction() {
    var element = document.body;
    element.classList.toggle("dark");
    var img=document.getElementById("img").src;
    if(img=="http://127.0.0.1:5500/dark.png"){
        document.getElementById("img").src="http://127.0.0.1:5500/light.png"
        localStorage.setItem("theme","dark")
    }
    else{
        document.getElementById("img").src="http://127.0.0.1:5500/dark.png"
        localStorage.setItem("theme","light")
    }
}
window.onload=checkTheme();
function checkTheme(){
    const theme=localStorage.getItem("theme");
    if(theme==="dark"){
        myFunction();
    }
    
}