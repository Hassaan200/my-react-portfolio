import React from 'react'
import ContactForm from './ContactForm'
import { toast } from 'react-hot-toast';


const Contact = () => {
  return (
    <div className='bg-black pt-40 p-8'>
        <div className='flex justify-center  flex-wrap gap-25' data-aos="zoom-in">
            <div>
        <ContactForm/>
            </div>
            <div className='hidden lg:block mt-10'>
                <img src="/images/inbox.webp" alt="" className='w-[300px] float' />
            </div>

        </div>
      
    </div>
  )
}

export default Contact
