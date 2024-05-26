/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
const toggle = document.getElementById(toggleId),
nav = document.getElementById(navId)
toggle.addEventListener('click', () =>{
nav.classList.toggle('show-menu')
toggle.classList.toggle('show-icon')
})
}
showMenu('nav-toggle','nav-menu')

/*=============== Toggle Menu ===============*/

function changer(page){
       const desc=[  "Step up to our vibrant stall and savor the essence of Filipino cuisine with our classic Pancit Bato. Originating from Bicolandia, this dish features tender chicken, crisp vegetables, and thin noodles, all tossed in a savory blend of soy sauce, calamansi, and garlic. What sets ours apart is the addition of river stones from the Bicol region, infusing the dish with a unique earthy flavor. Topped with fresh scallions and a squeeze of calamansi, each bite is a harmonious blend of textures and tastes, inviting you to experience the warmth and authenticity of Filipino street food culture in every mouthful.\n\n"
                     ,"Welcome to our bustling stall, where we fuse the rich flavors of Pancit Bato with the irresistible charm of siomai! Dive into a tantalizing plate of our Pancit Bato with Siomai, a marriage of Bicolandia's iconic dish with the beloved Chinese dumpling. Picture succulent chicken slices, vibrant veggies, and thin noodles bathed in a savory soy sauce, calamansi, and garlic concoction, now crowned with plump siomai bursting with savory goodness. Each bite is a symphony of flavors, marrying the earthy undertones of Pancit Bato with the umami richness of siomai, creating a culinary delight that promises to enchant your taste buds and transport you to the bustling streets of the Philippines with every mouthful."
                     ,"Indulge in a delightful fusion of flavors at our Pancit Bato with Shanghai! This dish combines the savory essence of Bicolandia's iconic Pancit Bato with the crispy goodness of Filipino-style spring rolls. Enjoy tender chicken, crisp vegetables, and thin noodles tossed in a flavorful blend of soy sauce, calamansi, and garlic, topped with golden, crunchy Shanghai rolls filled with a savory meat mixture. Each bite offers a perfect harmony of textures and tastes, bringing the authentic warmth of Filipino street food culture straight to your plate. \n\n\n"
                     ,"Experience a bold and unique fusion at our Pancit Bato with Dinuguan! This dish marries the traditional flavors of Bicolandia's Pancit Bato with the rich, savory notes of Dinuguan. Enjoy tender chicken, fresh vegetables, and thin noodles, all tossed in a savory blend of soy sauce, calamansi, and garlic. Topped with a generous helping of Dinuguan, the Filipino savory pork blood stew, this dish delivers a robust and earthy flavor that perfectly complements the lightness of the noodles. Each bite is a culinary adventure, bringing the deep, comforting tastes of Filipino heritage right to your plate.\n\n"
                     ,"Indulge in a mouthwatering fusion of flavors with our Pancit Bato with Lechon Kawali! we bring together the iconic Bicolandia Pancit Bato and the irresistible crunch of Lechon Kawali. Enjoy tender chicken, fresh vegetables, and thin noodles, all expertly tossed in a savory blend of soy sauce, calamansi, and garlic. Topping this delightful mix are crispy, golden chunks of Lechon Kawali, adding a perfect crunch and rich, succulent flavor. Each bite is a celebration of Filipino culinary heritage, offering a satisfying blend of textures and tastes that will leave you craving more.\n\n"
                     ,"Savor a unique and delectable fusion with our Pancit Bato with Chicharon Bulaklak! we combine the beloved Bicolandia Pancit Bato with the crispy, savory goodness of Chicharon Bulaklak. Imagine tender chicken, fresh vegetables, and thin noodles, all tossed in a flavorful blend of soy sauce, calamansi, and garlic. Topping this delightful mix are crispy, golden pieces of Chicharon Bulaklak, adding a satisfying crunch and rich flavor. Each bite is a harmonious blend of textures and tastes, celebrating the rich culinary heritage of the Philippines in every mouthful.\n\n\n"
                     ,"Indulge in the ultimate Filipino culinary experience with our Pancit Bato Overload! This sumptuous dish brings together the rich flavors of Bicolandia's Pancit Bato with an extravagant array of toppings. Enjoy tender chicken, fresh vegetables, and thin noodles, all expertly tossed in a savory blend of soy sauce, calamansi, and garlic. This feast is then topped with a delectable combination of hard-boiled egg, succulent siomai, crispy Shanghai rolls, savory Dinuguan, crunchy Lechon Kawali, and the irresistible Chicharon Bulaklak. Every bite is a burst of flavor and texture, celebrating the very best of Filipino cuisine in one generous, mouthwatering plate.\n\n"];
              
                     const elements = document.querySelectorAll('#name, #desc, #prev, #testing, #rating,#line,#nyito,#addons,#size,#qnty,#toppings,#cart');
                     elements.forEach(element => {
                     element.classList.remove('fade-in');
                     element.classList.add('fade-out');
                     });
              
              setTimeout(()=>{
                     switch (page) {
                            case regular:      
                            changeItem("PANCIT BATO REGULAR",desc[0],"106px","assets/img/regular_prev.png","339px");break;
                            case siomai:  
                            changeItem("PANCIT BATO W/ SIOMAI",desc[1],"264px","assets/img/siomai_prev.png","353px");break;
                            case shanghai:
                            changeItem("PANCIT BATO W/ SHANGHAI",desc[2],"410px","assets/img/shanghai_prev.png","400px");break;
                            case dinuguan:
                            changeItem("PANCIT BATO W/ DINUGUAN",desc[3],"558px","assets/img/dinuguan_prev.png","400px");break;
                            case kawali:
                            changeItem("PANCIT BATO W/ LECHON KAWALI",desc[4],"711px","assets/img/kawali_prev.png","488px");break;
                            case bulaklak:
                            changeItem("PANCIT BATO W/ CHICHARON BULAKLAK",desc[5],"868px","assets/img/bulaklak_prev.png","589px");break;
                            case overload:
                            changeItem("PANCIT BATO OVERLOAD",desc[6],"1018px","assets/img/overload_prev.png","364px");break;
                     }
                     elements.forEach(element => {
                            element.classList.remove('fade-out');
                            element.classList.add('fade-in');
                     });
              },400);
}
function changeItem(name,desc,pointer,img,line) {
       document.getElementById('pointer').style.left=pointer;
       document.getElementById('name').innerText = name;
       if (window.innerWidth > 713) {
              document.getElementById("line-name").style.width = line;
       }
       document.getElementById('desc').innerText = desc;
       document.getElementById('prev').src=img;
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

/*===========COUNTER===========*/
document.addEventListener("DOMContentLoaded", function() {

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
              console.log("walang laman tbh");
       }
       }
       var incrementorContainers = document.querySelectorAll(".nyitoDD");
       incrementorContainers.forEach(function(container) {
       initializeIncrementor(container);
       });
});
/*===========COUNTER===========*/

/*===========RATING===========*/
const starsEl = document.querySelectorAll(".fa-star");
const editReviewEl = document.getElementById("viewrev");
const ratingEl = document.querySelector(".rating-container h3");
let hoverEnabled = false;

updateRating(0);

starsEl.forEach((starEl, index) => {
starEl.addEventListener("mouseover", () => {
       if (hoverEnabled) {
              updateRating(index + 1);
       }
});
starEl.addEventListener("click", () => {
       if (hoverEnabled) {
              updateRating(index + 1);
       }
});
});
editReviewEl.addEventListener("click", () => {
hoverEnabled = !hoverEnabled;
if (hoverEnabled) {
       editReviewEl.textContent = "Save Review";
       } else {
       editReviewEl.textContent = "Edit Review";
}
});
function updateRating(rating) {
starsEl.forEach((starEl, idx) => {
       if (idx < rating) {
       starEl.classList.add("active");
              } else {
       starEl.classList.remove("active");
       }
});

       ratingEl.textContent = `${rating}/5`;
}
/*===========RATING===========*/

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
e.preventDefault();

if (name.value.length < 3) {
       errorElement.innerHTML = 'Your name should be at least 3 characters long.';
       return false;
} 

if (!(email.value.includes('.') && (email.value.includes('@')))) {
       errorElement.innerHTML = 'Please enter a valid email address.';
       return false;
} 

if (!emailIsValid(email.value)) {
       errorElement.innerHTML = 'Please enter a valid email address.';
       return false;
}

if (message.value.length < 15) {
       errorElement.innerHTML = 'Please write a longer message.';
       return false;
}

errorElement.innerHTML = '';
successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

e.preventDefault();
setTimeout(function () {
       successMsg.innerHTML = '';
       document.getElementById('contact-form').reset();
}, 6000);

return true;

}

const emailIsValid = email => {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


document.addEventListener("DOMContentLoaded", () => {
       const nextEl = document.querySelector(".next");
       const prevEl = document.querySelector(".prev");
       const imgsEl = document.querySelectorAll(".image-container img");
       const imageContainerEl = document.querySelector(".image-container");

       let currentImg = 1;
       let timeout;

       const desktopImageSources = [
              'assets/img/front_Img1.jpg',
              'assets/img/front_Img1-2.jpg',
              'assets/img/front_Img1-3.png',
              'assets/img/front_Img1-4.jpg',
              'assets/img/front_Img1-5.jpg',
              'assets/img/front_Img1-6.jpg'
       ];

       const mobileImageSources = [
              'assets/img/mobile-front-Img1.jpg',
              'assets/img/mobile-front-Img1-2.jpg',
              'assets/img/mobile-front-Img1-3.jpg',
              'assets/img/mobile-front-Img1-4.jpg',
              'assets/img/mobile-front-Img1-5.jpg',
              'assets/img/mobile-front-Img1-6.jpg'
       ];

       const desktopTransformSize = 750;
       const mobileTransformSize = 320;
       let currentTransformSize = desktopTransformSize;

       const firstClone = imgsEl[0].cloneNode(true);
       const lastClone = imgsEl[imgsEl.length - 1].cloneNode(true);
       firstClone.id = 'first-clone';
       lastClone.id = 'last-clone';

       imageContainerEl.appendChild(firstClone);
       imageContainerEl.insertBefore(lastClone, imgsEl[0]);

       const allImgs = document.querySelectorAll(".image-container img");

       function updateImg() {
              imageContainerEl.style.transition = 'transform 0.4s ease-in-out';
              if (window.innerWidth<=425) {
                     imageContainerEl.style.transform = `translateX(-${currentImg * 425}px)`;
              } else {
                     imageContainerEl.style.transform = `translateX(-${currentImg * 750}px)`;
              }
       

              timeout = setTimeout(() => {
              currentImg++;
              updateImg();
       }, 7500);
       }

       nextEl.addEventListener("click", () => {
              if (currentImg >= allImgs.length - 1) return;
              currentImg++;
              clearTimeout(timeout);
              updateImg();
       });

       prevEl.addEventListener("click", () => {
              if (currentImg <= 0) return;
              currentImg--;
              clearTimeout(timeout);
              updateImg();
       });

       imageContainerEl.addEventListener('transitionend', () => {
       if (allImgs[currentImg].id === firstClone.id) {
              imageContainerEl.style.transition = 'none';
              currentImg = 1;
              if (window.innerWidth<=425) {
                     imageContainerEl.style.transform = `translateX(-${currentImg * 425}px)`;
              } else {
                     imageContainerEl.style.transform = `translateX(-${currentImg * 750}px)`;
              }
       }   
       if (allImgs[currentImg].id === lastClone.id) {
              imageContainerEl.style.transition = 'none';
              currentImg = imgsEl.length;
              if (window.innerWidth<=425) {
                     imageContainerEl.style.transform = `translateX(-${currentImg * 425}px)`;
              } else {
                     imageContainerEl.style.transform = `translateX(-${currentImg * 750}px)`;
              }
       }
       });
       function updateImageSources() {
              const isMobile = window.innerWidth <= 425;
              const newImageSources = isMobile ? mobileImageSources : desktopImageSources;
              allImgs.forEach((img, index) => {
                     img.src = newImageSources[index % newImageSources.length];
              });
       }

       window.addEventListener('resize', updateImageSources);

       updateImageSources();

       updateImg();
});
