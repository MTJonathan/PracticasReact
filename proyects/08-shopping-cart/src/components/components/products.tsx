import "../../assets/css/products.css";
import { AddToCartIcon } from "./icons";
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
type ProductsProps = {
  producto: Product[];
};
export const Products = ({ producto }: ProductsProps) => {
  return (
    <main className="products">
      <ul>
        {producto.map((producto) => (
          <li key={producto.id}>
            <img src={producto.thumbnail} alt={producto.title} />
            <div>
              <strong>{producto.title}</strong> - ${producto.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
