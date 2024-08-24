

gsap.registerPlugin(ScrollTrigger);
// var blr=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
 blr.style.left = dets.x-20+"px"
  blr.style.top = dets.y-150+"px"

})

document.addEventListener("mousemove",function(dets){
 
})
 // Select the cursor and blur elements
var cursor = document.getElementById("cursor");
var cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", function(e) {
    cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;
    cursorBlur.style.transform = `translate(${(e.clientX - cursorBlur.offsetWidth / 2)-20}px, ${e.clientY - cursorBlur.offsetHeight / 2}px) scale(2)`;
});

// Select all h4 elements inside #nav
var crsr = document.querySelectorAll("#nav h4");

// Add event listeners for mouseenter and mouseleave to each h4 element
crsr.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        cursor.style.width = "50px";
        cursor.style.height = "50px";
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
        cursor.style.transition = "0.3s"
    });

    elem.addEventListener("mouseleave", function() {
        cursor.style.width = "25px";
        cursor.style.height = "25px";
        cursor.style.transform = "scale(1)";
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "#96C11E";
        cursor.style.transition = "transform 0.2s ease, background-color 0.2s ease, border 0.2s ease;";
    });
});
var crsr = document.querySelectorAll("#last-page h1");

// Add event listeners for mouseenter and mouseleave to each h4 element
crsr.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        cursor.style.width = "50px";
        cursor.style.height = "50px";
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
        cursor.style.transition = "0.3s"
    });

    elem.addEventListener("mouseleave", function() {
        cursor.style.width = "25px";
        cursor.style.height = "25px";
        cursor.style.transform = "scale(1)";
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "#96C11E";
        cursor.style.transition = "transform 0.2s ease, background-color 0.2s ease, border 0.2s ease;";
    });
});



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"80px",
    transition: "0.2s",
    scrub:true,
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:true,
    }

})

gsap.to("#main",{
     backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:-1,
        height:"100%",
        width:"100%",

    }
})



document.addEventListener('DOMContentLoaded', () => {
    const marqueeItems = document.querySelectorAll('.marquee-item');

    marqueeItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all items
            marqueeItems.forEach(el => el.classList.remove('active'));

            // Add 'active' class to the clicked item
            item.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const line = document.getElementById('line');
    const text = line.innerText;
  
    const words = text.split(/\s+/);
    const highlightedText = words.map(word => `<span>${word} </span>`).join('  ');
    line.innerHTML = highlightedText;
  });
