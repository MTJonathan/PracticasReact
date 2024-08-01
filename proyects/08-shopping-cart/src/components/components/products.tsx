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
        {producto.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
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
