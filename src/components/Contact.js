import React from "react";

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
    
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-2 font-medium title-font">
            About Us
          </h2>
          <p className="text-white" style={{ fontSize: "20px" }}>
            Heart Crossed Studios is an independent game studio, founded in 2023 by UCSC Alumnis during our undergrad studies! Our
            primary goal is developing heartfelt stories and experiences for underrepresented communities, with a focus on the POC and
            LGBTQ+ community. We are currently a team of 7, with comprehensive experience in creative, technical, and marketing fields.
            <br></br>
            <br></br>
            Thank you for your time and interest in our game. If you have any feedback for us, we’d love to hear it!
          </p>

          <div className="mt-5">
            <a
              href="https://twitter.com/heartXstudios"
              className="inline-flex border-0 py-1 focus:outline-none hover:scale-110 rounded text-base mt-5 md:mt-5">
              <img src="./twitter.png" alt="twt" style={{ width: "50px", height: "50px" }}/>
            </a>
            <a
              href="https://www.instagram.com/heartxstudios?igsh=MzRlODBiNWFlZA=="
              className="inline-flex border-0 py-1 px-3 focus:outline-none hover:scale-110 rounded text-base mt-5 md:mt-5">
              <img src="./instagram.png" alt="ig" style={{ width: "50px", height: "50px" }}/>
            </a>
          </div>
          

        </div>
        <form
          netlify data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-10 w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-2 font-medium title-font">
            Contact Us
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}