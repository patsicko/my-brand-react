import "./Contact.css"
import { contactInfo } from '../../data'
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e)=>{
    e.preventDefault()
    const firstName = form.current.firstname.value.trim();
    const lastName = form.current.lastname.value.trim();
    const email = form.current.email.value.trim();
    const phone = form.current.phone.value.trim();
    const message = form.current.message.value.trim();

    if(!firstName || !lastName || !email || !phone || !message){
      return
    }
    
    emailjs.sendForm('service_pl3t2no','template_yszkpap', form.current,{
      publicKey:"e1jSKityuVJIb-bvz"
    })
    .then(
      ()=>{
        form.current.reset()
        setMessageSent(true); 
        console.log("SUCCESS")
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      },
      (error)=>{
        console.log("FAILED", error)
      }
    )
  }
  return (
    <section id='contact'>
      <div className="container full__height">
        <h3 className="sub__title">I would like to connect with you!</h3>
        <h1 className="title">
          <span className="text__gradient">Contact Me</span>
        </h1>
        <div className="contact__form">
          <div className="column">
            <h3 className="sub__title color__primary">Contact Info</h3>
            <div className="contact__info__container">
              {
                contactInfo.map((list,index)=>(
                  <div className="contact__info" key={index}>
                    <div className="icon__container">
                      {list.icon}
                    </div>
                    <p>{list.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="column">
               <div className="form__top">
               <h3 className="sub__title color__primary">Keep In Touch</h3>
               <p>Fill the form to get in touch with me</p>
               {messageSent && <p className="success__message color__primary">Your message has been sent successfully!</p>}
               </div>
               <form ref={form} onSubmit={sendEmail}>
               <div className="form__middle">
                 <div className="row">
                   <input type="text" placeholder='First name' name='firstname' className='control'/>
                   <input type="text" placeholder='Last name' name='lastname' className='control'/>
                 </div>
                 <div className="row">
                   <input type="email" placeholder='Email address' name='email' className='control'/>
                   <input type="tel" placeholder='Phone number' name='phone' className='control'/>
                 </div>
                 <textarea name="message" id="" cols={30} rows={10} placeholder='Message' className='control'></textarea>
               </div>
               <div className="form__bottom">
                 <button className="btn btn__primary">Send Message</button>
               </div>
               
               </form>
               
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact