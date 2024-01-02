import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Feature from "./Feature";
import { FaCar, FaDollarSign, FaUser, FaCashRegister } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
function About() {
  const cardData = [
    {
      icon: <FaCar />,
      text: "10.5k",
      discription: "Saller active our site ",
    },
    {
      icon: <FaDollarSign />,
      text: "33k",
      discription: "MonthlyProduct Sale",
    },
    {
      icon: <FaUser />,
      text: "45.5k",
      discription: "Active Custommer",
    },
    {
      icon: <FaCashRegister />,
      text: "25k",
      discription: "Annual Gross Sale",
    },
  ];
  const imageInfo = [
    {
      src: "https://tse4.mm.bing.net/th?id=OIP.O-bYisEEDd2wn5q-yEq4TgHaLI&pid=Api&P=0&h=220",
      name: "Tom Cruise",
      text: "Founder & Chairman",
      socials: [
        { icon: <FaTwitter /> },
        { icon: <FaLinkedin /> },
        { icon: <FaInstagram /> },
      ],
    },
    {
      src: "https://tse1.mm.bing.net/th?id=OIP._xkzJn3yPGvZ83PyQnw0gwHaLH&pid=Api&P=0&h=220",
      name: "Emma Wattson",
      text: "Managing Director",
      socials: [
        { icon: <FaTwitter /> },
        { icon: <FaLinkedin /> },
        { icon: <FaInstagram /> },
      ],
    },
    {
      src: "https://tse1.mm.bing.net/th?id=OIP.zczmeTXmnDj-fSkazzWHYwHaKA&pid=Api&P=0&h=220",
      name: "Mathew Perry",
      text: "Product Manager",
      socials: [
        { icon: <FaTwitter /> },
        { icon: <FaLinkedin /> },
        { icon: <FaInstagram /> },
      ],
    },
  ];
  return (
    <>
      <Header />
      <Navbar />
      <div className="">
        <div className=" w-[525px] h-[336px]  flex-col justify-start items-start gap-5 inline-flex">
          <div className="ml-24 text-justify text-black text-[54px] font-semibold font-['Inter'] leading-[64px] tracking-[3.24px]">
            Our Story
          </div>
          <div className="ml-28 flex-col text-justify justify-start items-start gap-6 flex">
            <div className=" text-black text-base font-normal font-['Poppins'] leading-relaxed">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </div>
            <div className="w-[505px] text-black text-base font-normal font-['Poppins'] leading-relaxed">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer goods to electronics.
            </div>
          </div>
          <div className="h-[350px] left-[820px] top-[120px] absolute bg-pink-500 rounded-tl rounded-bl justify-end items-center inline-flex">
            <img
              className="w-[400px] h-[348px]"
              src="https://img.freepik.com/free-photo/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone_181624-31562.jpg?w=740&t=st=1698737160~exp=1698737760~hmac=d02e57610a69b7fbe4d1ca3adcd8832996f28cf515be00210e62132cb5827a86"
            />
          </div>
        </div>
        <div className="flex justify-start ml-32">
          {cardData.map((card, index) => (
            <Card
              key={index}
              {...card}
            />
          ))}
        </div>
        <div className="flex justify-center mr-8">
          {imageInfo.map((info, index) => (
            <ImageWithInfo key={index} {...info} />
          ))}
        </div>
      </div>
      <Feature />
      <Footer />
    </>
  );
}

function Card({ icon, text, discription }) {
  return (
    <div
    className="w-40 h-40 m-10  mb-16 "
  >
      <div
        className="flex flex-col  bg-gray-200 bg-cover bg-center gap-4 items-center p-4 hover:scale-105 hover:shadow-md hover:bg-red-500 transition-transform">
        <div className="text-gray-600 text-5xl p-2 bg-white rounded-full">
          {icon}
        </div>
        <p className="text-lg font-bold ">{text}</p>
        <p
          className="text-sm font-bold"
          style={{
            maxWidth: "140px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {discription}
        </p>
      </div>
    </div>
  );
}
function ImageWithInfo({ src, name, text, socials }) {
  return (
    <div className="w-88 h-92 m-16 hover:scale-105 hover:shadow-md transition-transform">
      <img className="w-60 h-96" src={src} alt={name} />
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{text}</p>
        <div className="flex mt-2">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
 }

          

export default About;
