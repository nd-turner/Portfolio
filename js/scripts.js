

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function toggle_Experience() {
    const eduSections = document.querySelectorAll(".education-card");
    eduSections.forEach(eduSections => {
        eduSections.style.display = "none";
    });

     const ExperienceSections = document.querySelectorAll(".experience-card");
    ExperienceSections.forEach(ExperienceSections => {
        ExperienceSections.style.display = "flex";
    });
}

function toggle_Education(){
    const eduSections = document.querySelectorAll(".education-card");
    eduSections.forEach(eduSections => {
        eduSections.style.display = "flex";
    });

     const ExperienceSections = document.querySelectorAll(".experience-card");
    ExperienceSections.forEach(ExperienceSections => {
        ExperienceSections.style.display = "none";
    });
}

document.getElementById("ExperienceSelector").addEventListener("click", toggle_Experience); 
document.getElementById("EducationSelector").addEventListener("click", toggle_Education); 

