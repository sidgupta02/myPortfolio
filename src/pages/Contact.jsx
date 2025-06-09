import React,{useRef} from "react";
import emailjs from "emailjs-com"; 


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_sbuhlvb","template_3ytw5zj",form.current,"WawwAJoIsF7naPfTO").then(
      ()=>{
        alert("Message sent successfully!");
        form.current.reset(); 
      },
      (error) => {
        alert("Failed to send message, please try again later.",error.text);
      }
    )
  };
    
  return (
    <div className="bg-[#0A0F1C] min-h-screen w-full py-12 px-4 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-green-400 text-3xl font-semibold text-center mb-3">
        CONTACT ME
      </h1>

      {/* Subheading */}
      <h2 className="text-white text-xl sm:text-2xl text-center mb-10">
        Let’s discuss about the work
      </h2>

      {/* Contact Form Box */}
      <div className="bg-[#1A222D] w-full max-w-3xl p-6 sm:p-10 rounded-md shadow-md">
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          {/* Name & Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name='name'
                placeholder=""  
                className="w-full  py-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name='subject'
                placeholder=""
                className="w-full py-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Email & LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name='email'
                placeholder=""
                className="w-full py-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-300">
                Mobile Number
              </label>
              <input
                type="number"
                name='mobile'
                placeholder=""
                className="w-full py-2 bg-transparent border-b border-gray-500 text-white focus:outline-none"  
              />
            </div>
          </div>

          {/* Message Box */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              name='message'
              className="w-full py-2 bg-transparent border-b border-gray-500 text-white focus:outline-none resize-none"
              placeholder=""
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-400 hover:bg-green-500 text-black font-medium py-2 rounded-md transition-colors duration-300"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
