import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function ContactSection() {
  return (
    <div className="w-[340px] h-[457px]  px-[40px] pt-10 pb-[50px] bg-white rounded shadow flex-col justify-start items-center">
      <div className="self-stretch flex-col justify-start items-start gap-8">
        <div className="flex-col justify-start items-start pl-5 gap-6 flex">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative bg-red-500 rounded-full"></div>
            <div className="text-black text-base font-medium font-Poppins leading-normal">
              Call To Us
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[262px] text-black text-sm font-normal font-Poppins leading-[21px]">
              We are available 24/7, 7 days a week.
            </div>
            <div className="text-black text-sm font-normal font-Poppins leading-[21px]">
              Phone: +8801611112222
            </div>
          </div>
        </div>
        <br />
        <div className="w-[270px] h-0 opacity-50 justify-center items-center">
          <div className="w-[270px] h-0 border border-black"></div>
        </div>
        <br />
        <div className="flex-col justify-start items-start pl-5 gap-6 flex">
          <div className="flex items-center gap-4 ">
            <div className="w-10 h-10 relative bg-red-500 rounded-full"></div>
            <div className="text-black text-base font-medium font-Poppins leading-normal">
              Write To Us
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="w-[250px] text-black text-sm font-normal font-Poppins leading-[21px]">
              Fill out our form, and we will contact you within 24 hours.
            </div>
            <div className="text-black text-sm font-normal font-Poppins leading-[21px]">
              Email: customer@exclusive.com
            </div>
            <div className="text-black text-sm font-normal font-Poppins leading-[21px]">
              Email: support@exclusive.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <>
      <div className="flex flex-col  items-start gap-10">
      <div className="flex items-center justify-center ml-72 font-black "> {/* Center the h1 horizontally and vertically */}
          <h1 className="text-xl pt-4">CONTACT FORM</h1>
        </div>
       <div className="flex gap-10">
          <div className="w-60 h-12 relative">
            <div className="w-60 h-12 absolute bg-neutral-100 rounded" />
            <div className="absolute opacity-50">
              <input type="text" placeholder=" Your Name *" required className="h-12 w-60  text-black text-base font-normal font-Poppins leading-normal" />
            </div>
          </div>
          <div className="w-60 h-12 relative">
            <div className="w-60 h-12 absolute bg-neutral-100 rounded" />
            <div className="absolute opacity-50">
            <input type="email" placeholder=" Your Email *" required className="h-12 w-60  text-black text-base font-normal font-Poppins leading-normal" />
            </div>
          </div>
          <div className="w-60 h-12 relative">
            <div className="w-60 h-12 absolute bg-neutral-100 rounded" />
            <div className=" absolute opacity-50">
              <input type="phonenumber" placeholder=" Your phoneNumber *" required className="h-12 w-60 text-black text-base font-normal font-Poppins leading-normal" />
            </div>
          </div>
        </div>
        <div className="w-[737px] h-[190px]  relative">
          <div className="w-[800px] h-[190px] left-0 top-0 absolute bg-neutral-100 rounded"></div>
          <div className="absolute bg-neutral-100 opacity-50  text-black text-base font-normal font-['Poppins'] leading-normal" >
          <textarea className="w-[800px] h-[190px]" placeholder=" Your Message" rows={8}></textarea>
          </div>
        </div>

      <div className="w-full mb-4  flex justify-end ">
        <button className="px-12 py-4 bg-red-500 rounded text-neutral-50  font-medium ">
          Send Message
        </button>
      </div>
      </div>
    </>
  );
}
function Contact() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex justify-left items-start mb-16 space-x-4">
        <div className="w-[340px] h-[257px]  bg-white rounded shadow flex-col justify-start items-center">
          <ContactSection />
        </div>
        <div className="w-[840px] h-[457px]  bg-white rounded shadow flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
