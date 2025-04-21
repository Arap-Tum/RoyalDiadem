 function sendMessage () {
    

    const btn =document.querySelector('.submit-btn');
    const phoneNumber = "+254795455783"
    const successMessage = document.querySelector('.success-message');

    btn.addEventListener( 'click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const  phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        console.log(message)
        let infordata =`Hello My name is ${name} \n
            ${subject} \n\n
            ${message}\n \n
            Contact me on \n
            Phone  : ${phone}\n
            Email : ${email}\n
            `

         console.log(infordata) ;  
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(infordata.trim())}`;
        window.open(whatsappUrl, '_blank');

        successMessage.innerHTML = 'Message sent successfully. I will get back to you soon';
    })



}

sendMessage();