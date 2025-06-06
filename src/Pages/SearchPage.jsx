import { useEffect } from "react";

export default function SearchPage({ routeParams }) {
    useEffect(() => {
        document.title = `Has buscado: ${routeParams.query}`;
    }, [routeParams.query]);

  return (
    <div className="search-page">
      <h1>Has buscado {routeParams.query}</h1>
    </div>
  );
}