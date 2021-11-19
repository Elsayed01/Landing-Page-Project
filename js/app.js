/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/* 
   Define 2 global variables to have access to
   navbar list and all the sections in the html code
*/ 
const navBarContainer = document.getElementById("navbar__list");

const pageSections = document.querySelectorAll("section");



/*  
   building the navbar function, loop over all the sections to get the
   id and data-nav to make the navbar sections with distinctive
   id and data-nav
*/
const buildTheNav = function () 
{

    let navSections = "";

    for(const pageSection of pageSections ) 
    {
        
        const sectionId = pageSection.id;
        const sectionDataNav = pageSection.dataset.nav;

        // making the li elements which will be appended to the ul
        navSections += `<li><a href = "#${sectionId}" class = "menu__link">${sectionDataNav}</a></li>`;
           
    }; 

    // putting all the li elements to the ul element
    navBarContainer.innerHTML = navSections;

};

// call the function
buildTheNav();


// making the function that will spot the active class
const spotingTheActive = function () 
{

    // getting access to all the anchors in the html code
    const activeLink = document.getElementsByTagName("a");

    /* 
        looping over all the sections to apply the active class
        and active link to the section which has the scroll on it
    */ 
    for (let i=0; i < pageSections.length; i++) 
    {

            let pageSection = pageSections[i];

            /*
               storing the top edge of the section element into
               variable to determine which section that has
               the scroll on it
            */ 
            const sectionTopEdge = pageSection.getBoundingClientRect().top;

            // making the condition to apply the active link&class 
            // to the right section
            if ( sectionTopEdge >= 0  &&  sectionTopEdge <= 400 )
            {

                pageSection.classList.add("your-active-class");

                activeLink[i].classList.add("active__link");

            }
            
            else 
            {

                pageSection.classList.remove("your-active-class");

                activeLink[i].classList.remove("active__link");
            }    
        }
    }

// add an event listener to the window so when the page is scrolled
// it call the function of spoting the active class&link
window.addEventListener("scroll",spotingTheActive);


/*
    making anchoring function so when i click on any of the navbar sections
    it take me to that section on the page with smooth move
*/
const anchoring = function () 
{

    const theLinks = document.querySelectorAll("a");

    theLinks.forEach( function (link)
    {

        link.addEventListener("click", function (event) 
        {
            // prevent the click event's default behavior
            event.preventDefault();
            anchorTo = document.querySelector(link.getAttribute("href"));

            anchorTo.scrollIntoView(
            {

               behavior : "smooth"

            });
        });


    });
};

// calling the function
anchoring();
