import React, { useRef } from 'react';

function ContactUs() {
  // Refs for form fields
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const commentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accessing form values using refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const comment = commentRef.current.value;

    // Handle form submission logic here (e.g., send data to server or API)
    console.log({ name, email, phone, comment });
  };

  return (
    <div className=" px-6 lg:px-24 py-1 bg-[#0E100F] -my-1">
      <div className='my-24'>

      <div className='flex justify-center -mt-12 mb-12'>

      <h2  className="text-3xl text-center p-5 w-[30vw] font-bold text-cyan-600 hover:text-[#A374FF] transition-colors delay-75 duration-200  cursor-pointer" >Contact Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left side form */}
        <div className="space-y-6 ">
          <form onSubmit={handleSubmit} className="bg-white/90 p-6 rounded-lg shadow-xl focus:outline-none focus:ring-0">
            <div>
              <label htmlFor="name" className="block text font-medium text-[#0092B8]">Name</label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none  focus:ring-[#0092B8]/35 transition-all   "
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text font-medium text-[#0092B8]">Email</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none  focus:ring-blue-500/35 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text font-medium text-[#0092B8]">Phone</label>
              <input
                type="tel"
                id="phone"
                ref={phoneRef}
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none  focus:ring-blue-500/35 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="comment" className="block text font-medium text-[#0092B8]">Comment</label>
              <textarea
                id="comment"
                ref={commentRef}
                rows="3"
                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none  focus:ring-blue-500/35 transition-all"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-6 cursor-pointer text-white font-semibold rounded-md bg-cyan-600/90 hover:bg-[#684AA2] transition-colors delay-75 duration-200"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side map */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-lg shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=your-google-map-embed-link" 
              width="100%"
              height="400"
              className="rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default ContactUs;
