let t = document.getElementById("textarea");
let x = () => {
    if(document.querySelector("#feature-flag").checked==true)
        localStorage.setItem("autosave-data", t.value);
}

t.value = localStorage.getItem("autosave-data");
t.onchange = x();
setInterval(x,1000);
