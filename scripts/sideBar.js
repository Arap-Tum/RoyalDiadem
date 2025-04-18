export function displaySideBar () {
    const humbugerButton = document.querySelector('.hamburger-menu');
    const  sidebarPlaceholder = document.querySelector('.side-bar-link');

    // console.log("humbuger", humbugerButton)
    // console.log("sidebar", sidebarPlaceholder)
    
    // toogle the sidebar 
    humbugerButton.addEventListener('click', (event) => {
        event.stopPropagation();
        window.scrollTo(0, 0);
        if (sidebarPlaceholder.innerHTML.trim() === '') {
        fetch('page-sections/side-bar.html')
            .then(response => {
                if(!response) {
                    throw new Error(`HTTP eroor! statu: ${response.status}`);   
                }
                return response.text();
            })
            .then(html => {
                // inject html into the sie bar
                sidebarPlaceholder.innerHTML = html  
                 humbugerButton.innerHTML = "X";
                 setupSidebarEvents()
            })
            .catch((err) => {
                console.log('Error loading sidebar:', err)
            })
    } 
})

// all the events inside the sidebar
function setupSidebarEvents() {

    // remove side-bar
    const removeSidebarBtn = humbugerButton;

    if( removeSidebarBtn) {
        removeSidebarBtn.addEventListener('click', () => {
            sidebarPlaceholder.innerHTML = ''
            console.log('side bar removed')
            humbugerButton.innerHTML = "☰"
        })
    }

    // Drop down functionality

 const dropdowns = document.querySelectorAll('.nav-item.dropdown .nav-link');

 dropdowns.forEach(dropdown => {
    dropdown.addEventListener( 'click',  function(e) {
        e.preventDefault();

        const parent = this.parentElement;
        const dropdownMenu = this.nextElementSibling;

        // Toggle active state for current dropdown 
        parent.classList.toggle('active');
        dropdownMenu.classList.toggle('show');

        // If opening this dropdown, closeothers
        if (parent.classList.contains('active')) {
            dropdowns.forEach(otherDropdown => {
                if(otherDropdown !== this) {
                    const otherParent = otherDropdown.parentElement;
                    const otherMenu = otherDropdown.nextElementSibling;

                    otherParent.classList.remove('active');
                    otherMenu.classList.remove('show')
                }
            })
        }
    })
 })
}


}