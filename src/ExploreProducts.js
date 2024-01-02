function ProductSlider() {
   const products = [
  {
    id: 1,
    name: "JoyStick",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.NL2JLWwf21g7KMpusBjjbQHaHa&pid=Api&P=0&h=220",
    amount: "$19.99",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "LCD",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.eC3v45AfMF9EzSe5Dgm4HwHaFY&pid=Api&P=0&h=220",
    amount: "$29.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Keyboard",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.-T_yFTbOWYwdgy7nRbjntQHaFj&pid=Api&P=0&h=220",
    amount: "$24.99",
    rating: "⭐⭐⭐⭐",
  },

  {
    id: 4,
    name: "Mouse",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.hIopL8IfdrlAIkR_CRQlAwHaHa&pid=Api&P=0&h=220",
    amount: "$14.99",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: "Keyboard",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.GHGlz6oaKkLdi_GqPbkG4wHaCq&pid=Api&P=0&h=220",
    amount: "$19.99",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 6,
    name: "Gaming LCD",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.jon_xVmeNFbZlUR6M9xp2wHaFj&pid=Api&P=0&h=220",
    amount: "$24.99",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 7,
    name: "Joystick",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.oO7IvfD-Tw58EyLt9_ezMQHaHa&pid=Api&P=0&h=220",
    amount: "$14.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 8,
    name: "Mouse",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Qj4pAH4t3Bsv3MxAz37pgAHaD7&pid=Api&P=0&h=220",
    amount: "$29.99",
    rating: "⭐⭐⭐⭐",
  },
];

const firstRow = products.slice(0, 4);
const secondRow = products.slice(4);

return (
  <div className="relative">
    <div className="flex overflow-hidden m-12">
      {firstRow.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    <div className="flex overflow-hidden m-12">
      {secondRow.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
);
}

function Product({ product }) {
return (
  <div className="w-1/4 px-4">
    <img src={product.image} alt={product.name} className="w-40 h-40" />
    <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
    <p className=" text-red-500 ">{product.amount} {product.rating} </p>
  </div>
);
}

export default ProductSlider;
  