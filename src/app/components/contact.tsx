


import React from 'react'

const ContactUs = () => {
  return (
    <div id='contact'>
        <div className='contact-container'>
            <div className='left-contact'>
                <h2>Contact Us</h2>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nihil adipisci veritatis reiciendis totam eligendi consectetur repellat.</h3>
              <form className='form' >
                <label htmlFor="#" className='contact-items'>Name</label>
                <input type="text" className='contact-items input-box  '/>
                <label htmlFor="#" className='contact-items'>E-mail</label>
                <input type="text" className='contact-items input-box' />
                <label htmlFor="#" className='contact-items'>Mobile no</label>
                <input type="text" className='contact-items input-box' />
                <label htmlFor="#" className='contact-items'>Messmge</label>
                <input type="text"  className='contact-items input-box '/>
                
               <button className='button'>send </button>
              </form>
            </div>
             

        </div>
    </div>
  )
}

export default ContactUs