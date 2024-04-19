import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Bookpage = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {};

  const isNextPage = page < 4;
  const isPrevPage = page > 1;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ''}</h4>
          <input
            type="range"
            min={100}
            max={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
            <option value="">Novel</option>
            <option value="">Fiction</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Books</h1>
        <input
          type="text"
          placeholder="Search by name.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
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
        </div>
        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};
export default Bookpage;
