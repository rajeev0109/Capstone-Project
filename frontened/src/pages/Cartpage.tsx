import { useEffect, useState } from 'react';
import { VscError } from 'react-icons/vsc';
import CartItems from '../components/CartItems';
import { Link } from 'react-router-dom';

const cartItems = [
  {
    productId: 'asdiaud',
    photo: 'https://m.media-amazon.com/images/I/51HA+v7rR+L.AC_SX250.jpg',
    name: 'Under The Influence: How to survive and thrive online',
    price: 400,
    quantity: 4,
    stock: 40,
  },
];
const subtotal = 400;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 40;
const discount = 5;
const total = subtotal + tax + shippingCharges;

const Cartpage = () => {
  const [couponCode, setCouponCode] = useState<string>('');
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) {
        setIsValidCouponCode(true);
      } else {
        setIsValidCouponCode(false);
      }
    });
    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItems key={idx} cartItem={i} />)
        ) : (
          <h1>No items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal : ₹{subtotal}</p>
        <p>Tax : ₹{tax}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>
          Discount :<em className="red"> -₹{discount}</em>
        </p>
        <p>
          <b>Total : ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};
export default Cartpage;
