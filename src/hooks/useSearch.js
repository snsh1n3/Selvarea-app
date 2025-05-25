import { useState, useCallback } from 'react';

function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = useCallback(() => {
    const query = searchQuery.trim().toLowerCase();
    setSearchResults([]);

    if (!query) {
      setSearchResults(["Por favor, escribe una palabra para buscar."]);
      return;
    }

    const elementsToSearch = [
      "Selvárea es una marca colombiana que celebra la riqueza natural del país a través de prendas únicas con bordados realistas de animales, hechos a mano por artesanos locales. Inspirada en la biodiversidad y los ecosistemas colombianos, Selvárea fusiona arte, sostenibilidad y diseño contemporáneo, creando piezas que son más que ropa: son un homenaje al patrimonio cultural y natural. Cada puntada cuenta una historia, destacando la conexión entre moda y conservación ambiental, mientras empodera a comunidades locales y preserva técnicas artesanales.",
      "Love Birds - $800.000",
      "Rockstar - $900.000",
      "Roar - $1.000.000",
    ];

    let foundResults = [];
    elementsToSearch.forEach((text) => {
      if (text.toLowerCase().includes(query)) {
        foundResults.push(`Coincidencia encontrada: "${text.substring(0, 70)}..."`);
      }
    });

    if (foundResults.length > 0) {
      setSearchResults(foundResults);
    } else {
      setSearchResults([`No se encontraron resultados para "${query}".`]);
    }
  }, [searchQuery]); 

  return {
    searchQuery,
    searchResults,
    performSearch,
    handleSearchInputChange
  };
}

export default useSearch;