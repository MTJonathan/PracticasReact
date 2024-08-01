import { useState, useId } from "react";
import "../assets/css/filters.css";
const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState("all");
  const idPrice = useId();
  const idCategory = useId();
  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
    changeFilters({ category, minPrice: e.target.value });
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
    changeFilters({ category: e.target.value, minPrice });
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a Partir de</label>
        <input
          type="range"
          name="price"
          id={idPrice}
          min={0}
          max={1000}
          value={minPrice}
          onChange={handleMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="category" id={idCategory} onChange={handleCategory}>
          <option value="all">Todos</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
