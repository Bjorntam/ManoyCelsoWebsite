/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId)

toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
toggle.classList.toggle('show-icon')
})
}

showMenu('nav-toggle','nav-menu')

/*=============== Toggle Menu ===============*/

const regular = "Regular Batos";

function changer(page){
       switch (page) {
              case regular:
              document.getElementById('pointer').style.left="156px";
              changeItem("PANCIT BATO REGULAR","regular");break;
              case siomai:
              document.getElementById('pointer').style.left="320px";
              changeItem("PANCIT BATO W/ SIOMAI","siomai");break;
              case shanghai:
              changeItem("PANCIT BATO W/ SHANGHAI","shanghai");break;
              case dinuguan:
              changeItem("PANCIT BATO W/ DINUGUAN","kawali");break;
              case kawali:
              changeItem("PANCIT BATO W/ LECHON KAWALI","bulaklak");break;
              case bulaklak:
              changeItem("PANCIT BATO W/ CHICHARON BULAKLAK","overload");break;
              case overload:
              changeItem("PANCIT BATO OVERLOAD");break;
       }
}
function changeItem(name,forPointer) {
       var title = document.getElementById('name');
       
       
       document.getElementById('name').innerText = name;


}
