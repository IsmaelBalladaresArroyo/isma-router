import { useEffect } from "react";

export default function searchPage({ routeParams }) {
    useEffect(() => {
        document.title = `Has buscado: ${routeParams.query}`;
    }, []);

  return (
    <div className="search-page">
      <h1>Has buscado {routeParams.query}</h1>
      
      {/* You can add more logic to fetch and display search results here */}
    </div>
  );
}