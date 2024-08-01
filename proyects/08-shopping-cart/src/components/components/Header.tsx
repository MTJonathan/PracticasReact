import Filters from "./Filters";

// Definir el tipo de estado de los filtros
type FiltersState = {
  category: string;
  minPrice: number;
};

// Definir las propiedades del componente Header
type FiltersProps = {
  changeFilters: (filters: FiltersState) => void;
};

const Header = ({ changeFilters }: FiltersProps) => {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  );
};

export default Header;

