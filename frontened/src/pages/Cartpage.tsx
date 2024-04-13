import { useEffect, useState } from 'react';
import { VscError } from 'react-icons/vsc';

const cartItem = [];
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
        <aside>
          <p>Subtotal : ${subtotal}</p>
          <p>Tax : ${tax}</p>
          <p>Shipping Charges : ${shippingCharges}</p>
          <p>Discount : ${discount}</p>
          <p>
            <b>Total : ${total}</b>
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
        </aside>
      </main>
    </div>
  );
};
export default Cartpage;
