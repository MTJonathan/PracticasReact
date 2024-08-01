import { useState } from "react";
import "../../assets/css/filters.css";

// Define the type for the filters state
type FiltersState = {
  category: string;
  minPrice: number;
};

// Define the type for the Filters component props
type FiltersComponentProps = {
  changeFilters: (filters: FiltersState) => void;
};

const Filters = ({ changeFilters }: FiltersComponentProps) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("all");

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = event.target.valueAsNumber;
    setMinPrice(newMinPrice);
    changeFilters({ category, minPrice: newMinPrice });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    changeFilters({ category: newCategory, minPrice });
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a Partir de</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;


