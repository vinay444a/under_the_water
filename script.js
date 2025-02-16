const lenis = new Lenis({
    lerp: 0.04,
    smooth: true,
    smoothTouch: false,
    infinite: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);




// Random floating animation
gsap.to(".circle", {
    x: "random(-50, 50)vw",
    y: "random(-50, 50)vh",
    duration: "random(5, 8)",
    ease: "power1.inOut",
    repeat: -1,
    repeatRefresh: true,
    onComplete: function () {
        gsap.to(".circle", {
            scale: "random(0.5, 2)",
            duration: "random(4, 8)",
            ease: "power2.inOut"
        });
    }
});

let scrollSpeedFactor = 0.5; 


function resetBubble(bubble) {
    gsap.set(bubble, { yPercent: 100 });
}

window.addEventListener("scroll", function () {
    let scrollSpeed = window.scrollY * scrollSpeedFactor;

    document.querySelectorAll(".circle").forEach((bubble) => {
        let yValue = gsap.getProperty(bubble, "yPercent");

        if (yValue < -90) {  
            resetBubble(bubble); 
        }

        gsap.to(bubble, {
            yPercent: -scrollSpeed, 
            duration: 0.5,          
            ease: "power1.out"
        });
    });
});
vinay = ["1.png", "2.png", "3.png", "4.png" ]
vinay1= ["middle1.png", "middle2.png", "middle3.png", "midddle4.png" ]
vinay2=["shark1.png", "shark2.png", "shark3.png", "shark4.png"]
function createFish(vikki,vinay,a) {
    console.log("Function called");
    let fish = document.createElement("img");
    fish.src = vinay[Math.floor(Math.random() * vinay.length)];
    fish.classList.add("fish");
    document.querySelector(vikki).appendChild(fish);

    fish.style.position = "absolute";  
    fish.style.left = "100px"; 
    fish.style.top = "100px";
    fish.style.width = "100px"; 
    fish.style.height = "100px";

    let size = Math.random() * 80 + a; 
    let yPosition = Math.random() * 80 + "vh" ; 

    gsap.set(fish, {
        x: "-10vw",
        y: yPosition,
        width: size + "px",
        height: "auto",
        opacity: 0.65
    });

    gsap.to(fish, {
        x: "110vw", 
        duration: Math.random() * 10 + 8,
        ease: "power1.inOut",
        onComplete: () => {
            fish.remove();
        }
    });

    console.log("Fish created at:", yPosition);
}

// Generate fish every 3 seconds
setInterval(() => createFish("#overlay", vinay,110), 2500);
setInterval(() => createFish("#overlay2", vinay1,110), 2500)
setInterval(() => createFish("#overlay3", vinay2,150), 8000)
gsap.from("#diver_right img", {
    y:"-50vh",   
    duration: 5,
    ease: "power1.inOut"
});

tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "+=450%",  // Ensures full scrolling effect
        scrub: true,
        pin: "#page2",

    }
});

tl2.to("#page2_silder", {
    x: "-400vw",  // Moves the whole container, not just individual images
    ease: "power1.inOut",

});


gsap.to(".circle1", {
    x: "random(-50, 50)vw",
    y: "random(-50, 50)vh",
    duration: "random(5, 8)",
    ease: "power1.inOut",
    repeat: -1,
    repeatRefresh: true,
    onComplete: function () {
        gsap.to(".circle", {
            scale: "random(0.5, 2)",
            duration: "random(4, 8)",
            ease: "power2.inOut"
        });
    }
});

let pk = 0
document.querySelector("#menubutton").addEventListener("click",function(){
    if(pk==0){
        document.querySelector("#navbarpage").style.opacity = 1
        console.log("clicked")
        pk=1
    }
    else{
        document.querySelector("#navbarpage").style.opacity = 0
        console.log("clicked again")
        pk=0
    }
})