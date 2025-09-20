const time = document.getElementById("time") as HTMLLabelElement;
    time.textContent = Date();

let interval:number;
interval = setInterval(()=>{
    time.textContent = Date();
},1000)



