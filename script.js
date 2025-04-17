// Shadow on scroll
window.addEventListener("scroll", function () {
    const header = this.document.querySelector('.header');
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
    } else {
       header.style.boxShadow= "none" 
    }
})


// sevice card slides 

const cards = document.querySelectorAll('.service-card');
const dots = document.querySelectorAll('.dot');
const container = document.querySelector('.service-cards');

container.addEventListener('scroll', () => {
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left - container.getBoundingClientRect().left);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
        }

        // console.log(distance)
    });


    dots.forEach(dot => dot.classList.remove('active'));
    dots[closestIndex].classList.add('active');
});

// optional : click on the dot scrolls to card 
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const targetId = dot.getAttribute('data-target');
        const targetCard = document.getElementById(targetId);
        targetCard.scrollIntoView({behavior: 'smooth', inline: 'start'});
    });
});

// Dtect current page 
const links = document.querySelectorAll(".vav-link");
const currentPage = window.location.pathname.split('/').pop();

links.forEach(link => {
    if (link.getAttribute("href")=== currentPage) {
        link.classList.add("active")
    }
});

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

     fetch('./page-sections/header.html')
        .then(res => res.text())
        .then(data => {
             document.querySelector(".header-container").innerHTML = data;
            // console.log(footerDiv)
            

        })
        .catch(error => {
            console.log(error)
        })


};

connectSections();