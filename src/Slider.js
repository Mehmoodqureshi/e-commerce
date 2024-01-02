import React, { useState } from "react";

const images = [
  "image1.jpeg",
  "image2.jpeg",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
  "image6.jpeg",
];

const ImageSliderImage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleRadioChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-full md:w-2/3 mx-auto relative">
      <img
        src={require(`../public/assets/${images[currentImage]}`)}
        alt={`Images ${currentImage + 1}`}
        className="w-full h-auto"
      />
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer text-3xl text-white"
        onClick={prevImage}
      >
        &lt;
      </div>
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer text-3xl text-white"
        onClick={nextImage}
      >
        &gt;
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="image-selector"
              id={`image-selector-${index}`}
              value={index}
              checked={currentImage === index}
              onChange={() => handleRadioChange(index)}
              className={`w-2 h-2 md:w-4 md:h-4 rounded-full border border-white cursor-pointer ${
                currentImage === index ? "bg-white" : "bg-transparent"
              }`}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderImage;
