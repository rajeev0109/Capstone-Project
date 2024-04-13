import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Books
        <Link to={'/books'} className="findMore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="assf"
          photo="https://m.media-amazon.com/images/I/51HA+v7rR+L.AC_SX250.jpg"
          name="Under The Influence: How to survive and thrive online"
          author=" Malini Agarwal"
          price={400}
          stock={3}
          handler={addToCartHandler}
        />
        <ProductCard
          productId="assf"
          photo="https://m.media-amazon.com/images/I/51HA+v7rR+L.AC_SX250.jpg"
          name="Under The Influence: How to survive and thrive online"
          author=" Malini Agarwal"
          price={400}
          stock={3}
          handler={addToCartHandler}
        />
        <ProductCard
          productId="assf"
          photo="https://m.media-amazon.com/images/I/51HA+v7rR+L.AC_SX250.jpg"
          name="Under The Influence: How to survive and thrive online"
          author=" Malini Agarwal"
          price={400}
          stock={3}
          handler={addToCartHandler}
        />
        <ProductCard
          productId="assf"
          photo="https://m.media-amazon.com/images/I/51HA+v7rR+L.AC_SX250.jpg"
          name="Under The Influence: How to survive and thrive online"
          author=" Malini Agarwal"
          price={400}
          stock={3}
          handler={addToCartHandler}
        />
        <ProductCard
          productId="assf"
          photo="https://m.media-amazon.com/images/I/51HA+v7rR+L.AC_SX250.jpg"
          name="Under The Influence: How to survive and thrive online"
          author=" Malini Agarwal"
          price={400}
          stock={3}
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};
export default Homepage;
