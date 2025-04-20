import { displaySideBar } from "./scripts/sideBar.js";
    
    // PAGE CONNECTOR 
    function connectSections() {
        fetch('./page-sections/footer.html')
            .then(res => res.text())
            .then(data => {
                 document.querySelector(".footer").innerHTML = data;
                // console.log(footerDiv)    
    
            })
            .catch(error => {
                console.log(error)
            })
    
            // header
         fetch('page-sections/header.html')
            .then(res => res.text())
            .then(data => {
                 document.querySelector(".header-container").innerHTML = data;
                
                displaySideBar();
                // console.log(displaySideBar)
    
            })
            .catch(error => {
                console.log(error)
            })
    
    
    };
    
    connectSections();