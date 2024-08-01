import '../assets/css/Footer.css'

export function Footer ({filters}) {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <span>Categoria: {filters.category} </span><span> | Precio: ${filters.minPrice}</span>
    </footer>
  )
}