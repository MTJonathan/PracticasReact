import { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/components/products";
import Header from "./components/components/Header";

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
};

type FiltersState = {
  category: string;
  minPrice: number;
};

function App() {
  const [products] = useState<Product[]>(initialProducts);
  const [filters, setFilters] = useState<FiltersState>({
    category: "all",
    minPrice: 0,
  });

  const filtersProducts = (products: Product[]): Product[] => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filtersProducts(products);
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products producto={filteredProducts} />
    </>
  );
}

export default App;
