import { useEffect, useState } from 'react'; // Importa los hooks useEffect y useState desde React
import './App.css'; // Importa el archivo de estilos CSS para la aplicación

const API_KEY = '581e398a'; // Define la clave de la API que se usará para hacer las solicitudes

function App() {
  // Define los estados para almacenar datos y controlar la UI
  const [movies, setMovies] = useState([]); // Estado para almacenar las películas obtenidas de la API
  const [query, setQuery] = useState(''); // Estado para almacenar el texto de búsqueda del usuario
  const [loading, setLoading] = useState(false); // Estado para controlar el estado de carga (loading)
  const [sortByDate, setSortByDate] = useState(false); // Estado para controlar si se debe ordenar por fecha
  const [originalMovies, setOriginalMovies] = useState([]); // Estado para almacenar las películas originales sin ordenar

  // Hook useEffect que se ejecuta cada vez que cambia la query de búsqueda
  useEffect(() => {
    const fetchData = () => {
      setLoading(true); // Activa el estado de carga
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`) // Realiza la solicitud a la API
        .then(res => res.json()) // Convierte la respuesta a JSON
        .then(data => {
          if (data.Search) { // Si hay resultados de búsqueda
            setMovies(data.Search); // Almacena los resultados en el estado movies
            setOriginalMovies(data.Search); // Almacena los resultados originales en originalMovies
          } else { // Si no hay resultados
            setMovies([]); // Limpia el estado movies
            setOriginalMovies([]); // Limpia el estado originalMovies
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error); // Muestra error en la consola
          setMovies([]); // Limpia el estado movies en caso de error
        })
        .finally(() => setLoading(false)); // Desactiva el estado de carga
    };

    const delayDebounceFn = setTimeout(() => {
      if (query) { // Si hay una query de búsqueda
        fetchData(); // Llama a la función para obtener los datos
      } else { // Si no hay query
        setMovies([]); // Limpia el estado movies
        setOriginalMovies([]); // Limpia el estado originalMovies
      }
    }, 500); // Espera 500ms antes de ejecutar la solicitud (debounce para evitar múltiples llamadas)

    return () => clearTimeout(delayDebounceFn); // Limpia el timeout si el componente se desmonta o la query cambia
  }, [query]); // Dependencia del efecto: se ejecuta cuando cambia la query

  // Hook useEffect que se ejecuta cuando cambia el estado sortByDate
  useEffect(() => {
    if (sortByDate) { // Si el checkbox está activado
      setMovies(prevMovies =>
        [...prevMovies].sort((a, b) => new Date(a.Year) - new Date(b.Year)) // Ordena las películas por fecha (de más reciente a más antigua)
      );
    } else { // Si el checkbox está desactivado
      setMovies(originalMovies); // Restaura las películas originales sin ordenar
    }
  }, [sortByDate]); // Dependencia del efecto: se ejecuta cuando cambia sortByDate

  // Manejador del cambio en el campo de búsqueda
  const handleChange = (event) => {
    setQuery(event.target.value); // Actualiza el estado query con el valor del campo de búsqueda
  };

  // Manejador del cambio en el checkbox de ordenación
  const handleCheckboxChange = (event) => {
    setSortByDate(event.target.checked); // Actualiza el estado sortByDate con el estado del checkbox
  };

  // Determina si hay películas para mostrar
  const hasMovies = movies.length > 0;

  return (
    <>
      <section>
        <header>
          <h1>Buscador de Películas</h1>
          <form action="" onSubmit={(e) => e.preventDefault()}> {/* Previene el comportamiento por defecto del formulario */}
            <input 
              value={query} // El valor del input es el estado query
              name='query' 
              className='input' 
              type="text" 
              placeholder='Avengers, Star Wars, The Matrix...'
              onChange={handleChange} // Llama a handleChange cuando el usuario escribe
            />
            <input 
              type="checkbox" 
              checked={sortByDate} // El estado checked del checkbox es el estado sortByDate
              onChange={handleCheckboxChange} // Llama a handleCheckboxChange cuando el usuario cambia el estado del checkbox
            />
            <button>Buscar</button> {/* Botón de búsqueda (no realiza ninguna acción en este código) */}
          </form>
        </header>
        <div className="peliculas">
          {loading ? <p>Cargando...</p> : ( // Muestra "Cargando..." si está en estado de carga
            <ul>
              {hasMovies ? (
                movies.map(movie => ( // Mapea las películas y las muestra
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
              ) : (
                <p className="no-movies">No hay películas Para mostrar</p> // Muestra un mensaje si no hay películas
              )}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
