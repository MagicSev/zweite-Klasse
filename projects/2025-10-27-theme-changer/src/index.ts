import './styles.css';
const set = document.getElementById("set") as HTMLAnchorElement;
const colorscheme = document.getElementById("colorscheme") as HTMLSelectElement;
if(set){
    set.addEventListener("click", (event)=>{
            event.preventDefault(); // stop the link from navigating

            localStorage.setItem("theme", colorscheme.value);

            window.location.href = "index.html";
            
        })
        
    }
    const savedTheme = localStorage.getItem("theme");

    if(savedTheme ==="light"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else if(savedTheme ==="dark"){
             document.body.style.backgroundColor = "rgb(50,50,50)";
        document.body.style.color = "white";
    }
