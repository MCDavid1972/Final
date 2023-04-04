const ProductCard = ({ title, price }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductCard;
