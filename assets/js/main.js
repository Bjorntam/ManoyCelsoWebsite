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

function changer(page){
       // const regular = "Step up to our vibrant stall and savor the essence of Filipino cuisine with our classic Pancit Bato. Originating from Bicolandia, this dish features tender chicken, crisp vegetables, and thin noodles, all tossed in a savory blend of soy sauce, calamansi, and garlic. What sets ours apart is the addition of river stones from the Bicol region, infusing the dish with a unique earthy flavor. Topped with fresh scallions and a squeeze of calamansi, each bite is a harmonious blend of textures and tastes, inviting you to experience the warmth and authenticity of Filipino street food culture in every mouthful.";
       // const siomai = "Welcome to our bustling stall, where we fuse the rich flavors of Pancit Bato with the irresistible charm of siomai! Dive into a tantalizing plate of our Pancit Bato with Siomai, a marriage of Bicolandia's iconic dish with the beloved Chinese dumpling. Picture succulent chicken slices, vibrant veggies, and thin noodles bathed in a savory soy sauce, calamansi, and garlic concoction, now crowned with plump siomai bursting with savory goodness. Each bite is a symphony of flavors, marrying the earthy undertones of Pancit Bato with the umami richness of siomai, creating a culinary delight that promises to enchant your taste buds and transport you to the bustling streets of the Philippines with every mouthful.";
       switch (page) {

              case regular:      
              document.getElementById('pointer').style.left="156px";
              const reg = "Step up to our vibrant stall and savor the essence of Filipino cuisine with our classic Pancit Bato. Originating from Bicolandia, this dish features tender chicken, crisp vegetables, and thin noodles, all tossed in a savory blend of soy sauce, calamansi, and garlic. What sets ours apart is the addition of river stones from the Bicol region, infusing the dish with a unique earthy flavor. Topped with fresh scallions and a squeeze of calamansi, each bite is a harmonious blend of textures and tastes, inviting you to experience the warmth and authenticity of Filipino street food culture in every mouthful."
              document.getElementById('prev').src='assets/img/regular_prev.png';
              changeItem("PANCIT BATO REGULAR",reg);break;
              case siomai:
              document.getElementById('pointer').style.left="320px";
              const sio = "Welcome to our bustling stall, where we fuse the rich flavors of Pancit Bato with the irresistible charm of siomai! Dive into a tantalizing plate of our Pancit Bato with Siomai, a marriage of Bicolandia's iconic dish with the beloved Chinese dumpling. Picture succulent chicken slices, vibrant veggies, and thin noodles bathed in a savory soy sauce, calamansi, and garlic concoction, now crowned with plump siomai bursting with savory goodness. Each bite is a symphony of flavors, marrying the earthy undertones of Pancit Bato with the umami richness of siomai, creating a culinary delight that promises to enchant your taste buds and transport you to the bustling streets of the Philippines with every mouthful."
              document.getElementById('prev').src='assets/img/siomai_prev.png';
              changeItem("PANCIT BATO W/ SIOMAI",sio);break;
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
function changeItem(name,desc) {
       document.getElementById('name').innerText = name;
       document.getElementById('desc').innerText = desc;
}

document.querySelectorAll('.nyitoDD').forEach(dropdown => {
       const menuEl = dropdown.querySelector(".dmenu");
       const menuTextEl = dropdown.querySelector(".dmenu p");
       const socialListsEl = dropdown.querySelector(".social-lists");
       const liEls = dropdown.querySelectorAll(".social-lists li");

       menuEl.addEventListener("click", () => {
       if (socialListsEl.classList.contains('show')) {
              socialListsEl.classList.remove('show');
              socialListsEl.classList.add('hide');
       } else {
              socialListsEl.classList.remove('hide');
              socialListsEl.classList.add('show');
       }
       menuEl.classList.toggle("rotate");
       });

       liEls.forEach((liEl) => {
       liEl.addEventListener("click", () => {
              menuTextEl.innerHTML = liEl.innerHTML;
              socialListsEl.classList.add('hide');
              socialListsEl.classList.remove('show');
              menuEl.classList.toggle("rotate");
       });
       });
});

document.addEventListener("DOMContentLoaded", function() {
       // Function to handle quantity incrementor
       function initializeIncrementor(container) {
       var userInput = container.querySelector("input[type='number']");
       var incrementButton = container.querySelector(".increment");
       var decrementButton = container.querySelector(".decrement");

       if (userInput && incrementButton && decrementButton) {
              incrementButton.addEventListener("click", function() {
              userInput.stepUp();
              });
              decrementButton.addEventListener("click", function() {
       userInput.stepDown();
              });
       } else {
              console.error("Some elements not found in the container:", container);
       }
       }

       // Get all quantity incrementor containers
       var incrementorContainers = document.querySelectorAll(".nyitoDD");

       // Loop through each container and initialize the incrementor
       incrementorContainers.forEach(function(container) {
       initializeIncrementor(container);
       });
});



const starsEl = document.querySelectorAll(".fa-star");
let hoverEnabled = true;

updateRating(0);

starsEl.forEach((starEl, index) => {
starEl.addEventListener("mouseover", () => {
       if (hoverEnabled) {
       updateRating(index);
       }
});

starEl.addEventListener("click", () => {
       hoverEnabled = !hoverEnabled;
       if (hoverEnabled) {
            updateRating(-1); // Optionally reset the rating on re-enable
       }
});
});

function updateRating(index) {
starsEl.forEach((starEl, idx) => {
       if (idx < index + 1) {
       starEl.classList.add("active");
       } else {
       starEl.classList.remove("active");
       }
});
}
