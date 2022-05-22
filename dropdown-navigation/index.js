const primaryNav = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-toggle");
const featureMenu = document.querySelector(".feature-header");
const featureText = document.querySelector(".feature-content");
const companyMenu = document.querySelector(".company-element");
const companyText = document.querySelector(".company-content");



navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false); 
    }

});

featureMenu.addEventListener("click", () => {
    const visibility = featureText.getAttribute("data-visible");
    if (visibility === "false") {
        featureText.setAttribute("data-visible", true);
        
    } else {
            featureText.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
    }
});

companyMenu.addEventListener("click", () => {
    const visibility = companyText.getAttribute("data-visible");
    if (visibility === "false") {
        companyText.setAttribute("data-visible", true);
        
    } else {
            companyText.setAttribute("data-visible", false);
            
    }
});





    
    //this.classList.toggle("active");
       // var featureDropdown = this.nextElementSibling;
       // if (featureDropdown.style.display === "none") {
         //   featureDropdown.style.display = "block";
       // }
        // else {
           // accordionAnswer.style.display = "none";
       // }
   // console.log("clicked");



