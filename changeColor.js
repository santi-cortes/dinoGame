const colorSwitch = document.querySelector('.switch input[type="checkbox"]');


document.addEventListener("DOMContentLoaded", ready);
function ready () {
  let tema = window.localStorage.getItem("tema");
  if (tema) {
    document.documentElement.setAttribute("tema", tema);
   }
    let input = document.getElementById("inp");
  if (tema == "dark") {
    input.setAttribute("checked", "");
  } else if (tema = "light") {
    input.removeAttribute("checked");
    console.log(input.getAttribute("checked"))
  }
}



function cambiaTema(ev) {

  let temaGuardado = "";
   if (ev.target.checked) {
    document.documentElement.setAttribute("tema", "dark");
    temaGuardado = window.localStorage.setItem("tema", "dark");
  } else {
    document.documentElement.setAttribute("tema", "light");
    temaGuardado = window.localStorage.setItem("tema", "light");
  }
}


colorSwitch.addEventListener("change", cambiaTema);
