import './styles.css';
const set = document.getElementById("set") as HTMLAnchorElement;
const colorscheme = document.getElementById("colorscheme") as HTMLSelectElement;
if(set){
    
    set.addEventListener("click", (event)=>{
          event.preventDefault(); // stop the link from navigating

        console.log(colorscheme.value);
    if(colorscheme.value==="light"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else {
             document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
      window.location.href = "index.html";

    })

}