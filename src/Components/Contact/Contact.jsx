import React from 'react'
import ContactForm from './ContactForm'
import { toast } from 'react-hot-toast';


const Contact = () => {
  return (
    <div className='bg-black pt-40 p-8'>
        <div className='flex justify-center items-center flex-wrap gap-25'>
            <div>
        <ContactForm/>
            </div>
            <div>
                <img src="/images/inbox.webp" alt="" className='w-[300px]' />
            </div>

        </div>
      
    </div>
  )
}

export default Contact
