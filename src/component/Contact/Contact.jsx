import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7fzecl', 'template_aufwcw9', form.current, '99UfH0FO_fRFnWveO')
        .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    form.current.reset();
};
    return (
        <>
            <section className='sec-form'>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" placeholder='Enter Name'/>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Enter Email'/>
                    <label>Massage</label>
                    <textarea name="message" rows="10" cols="10" placeholder='Send Massage'/>
                    <input type="submit" value="Send" />
                </form>
                <div className="social-icons animate__animated animate__backInRight animate__delay">
                    <h1 style={{fontSize:"40px", marginBotton:"20px"}}>Contact Me</h1>
                    <address>
                        <a className='a1' href="https://www.linkedin.com/in/mohamed-mohamed-202840250/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a className='a2' href="https://github.com/mohammed-mahmmud20" target="_blank"><i class="fab fa-github"></i></a>
                        <a className='a3' href="https://www.youtube.com/channel/UCBcjHQXSQJYGxtjy3BNtQFA" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a className='a4' href="https://www.facebook.com/profile.php?id=100057260414811" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a className='a5' href="https://www.instagram.com/mode_el_code/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a className='a6' href="https://www.tiktok.com/@mode_el_code" target="_blank"><i class="fab fa-tiktok"></i></a>
                        <h3>Email:mohammedmahmmud20@gmail.com</h3>
                        <h3>whatsapp or Phone:01021228645</h3>
                        <h4>What are you waiting ? Let's work together</h4>
                    </address>
                </div>
            </section>
        </>
    );
};
export default Contact