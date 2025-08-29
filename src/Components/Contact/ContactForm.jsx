import React, { useState } from 'react';
import { toast } from 'react-hot-toast';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("https://formsubmit.co/ajax/hassaankhaliq45@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (data.success === "true") {
          console.log("Form submitted:", formData);
          toast.success("Email sent successfully!");
  
          //  Clear karge form submit hokr
          setFormData({ name: "", email: "", message: "" });
  
          setSubmitted(true);
          setErrors({});
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } catch (error) {
        toast.error("Error sending message.");
        //  Clear karge form submit hokr
        setFormData({ name: "", email: "", message: "" });
        console.error("Formsubmit error:", error);
      }
    }
  };
  

  return (
    <div className="bg-green-950 text-white p-8 sm:w-md mx-auto w-[300px] rounded-lg shadow-md" data-aos="zoom-in">
      <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
      {submitted && <p className="text-green-400 font-medium mb-4">Email sent successfully!</p>}
      <form onSubmit={handleSubmit}>
      <input type="text" name="_honey" style={{ display: "none" }} />
        <label className="block mb-1 text-white">Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 rounded bg-black text-white border-2 border-green-800"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}

        <label className="block mt-4 mb-1 text-white">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 rounded bg-black text-white border-2 border-green-800"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}

        <label className="block mt-4 mb-1 text-white">Message</label>
        <textarea
          name="message"
          rows="4"
          className="w-full p-2 rounded bg-black text-white border-2 border-green-800"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}

        <button
          type="submit"
          className="mt-6 bg-green-900 hover:bg-green-800 text-white py-2 px-6 rounded font-semibold transition duration-300 hover:shadow-[0_0_20px_5px_rgba(0,100,0,0.6)] cursor-pointer"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
