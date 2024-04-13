import { FaPlus } from 'react-icons/fa';

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  author: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = 'ajdfhahdf'; // temporary server link

const ProductCard = ({
  productId,
  photo,
  name,
  author,
  price,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{`${name} by ${author}`}</p>
      <span>₹ {price}</span>
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
