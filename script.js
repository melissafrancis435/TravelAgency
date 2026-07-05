let loader = document.getElementById('preloader')


window.addEventListener('load',function(){
    loader.style.display = 'none'
})


document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("themeToggle");

    // 1. Check if dark mode was saved in the browser memory before
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-theme");
    }

    // 2. When the button is clicked, flip the dark theme on or off
    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        // 3. Save the current choice so it doesn't reset on refresh
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});







document.getElementById('book').addEventListener('click', function(e) {
    
    e.preventDefault(); 
    
   alert("Next: Booking Method")
    
    const paymentSec = document.getElementById('payment-section');
    paymentSec.style.display = 'block';
    paymentSec.scrollIntoView({ behavior: 'smooth' });
    
});


document.getElementById("pay-now").addEventListener('click', function(){
    alert('Ticket Confirmed! You will get an email soon.');
    const paymentSec = document.getElementById('payment-section');
    if (paymentSec) {
        paymentSec.style.display = 'none';
    }
    
})
let count = 2465;

function newnum(){
    count++;
    document.getElementById('number').innerHTML = count
}

setInterval(newnum,1000)




 

let person = document.getElementById('name');
document.getElementById('btn').addEventListener('click', function(){
    if (person) {
        alert('Thank you, ' + person.value + ', for your message');
    } else {
        alert('Thank you for your message');
    }
})



document.querySelectorAll('.favorite-heart-btn').forEach(heartBtn => {
    heartBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        
        this.classList.toggle('is-active');
        
        if (this.classList.contains('is-active')) {
            this.innerHTML = '&#9829;'; 
        } else {
            this.innerHTML = '&#9825;'; 
        }
    });
});



const track = document.getElementById('tourTrack');

if (track) {
    function slideAndFlip() {
        
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = "translateX(-33.333%)"; 

        
        setTimeout(function() {
            
            let firstCard = track.children[0];
            track.appendChild(firstCard);

            
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
        }, 500);
    }

    
    setInterval(slideAndFlip, 4000);
}


const track2 = document.getElementById('dealsTrack');
if (track2){
    function slideandflip2(){
        track2.style.transition = "transform 0.5s ease-in-out";
        track2.style.transform = "translateX(-33.333%)";

        setTimeout(function(){

            let firstdeal = track2.children[0];
            track2.appendChild(firstdeal);

            track2.style.transition = "none";
            track2.style.transform = "translateX(0)";
        }, 600);
    }
    setInterval(slideandflip2, 4000)
}





 
document.getElementById('book').addEventListener('click', function(e) {
    

    e.preventDefault(); 
    
    
    const paymentSec = document.getElementById('payment-section');
    if (paymentSec) {
        paymentSec.style.display = 'block';
        paymentSec.scrollIntoView({ behavior: 'smooth' });
    }
});



