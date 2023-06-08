import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [param, setParam] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>Home</h1>
      <div className="card col-3 border border-primary my-4">
        <input
          type="text"
          placeholder="ingrese parametro"
          onChange={(e) => setParam(e.target.value)}
        />
        <button onClick={() => navigate(`/param/${param}`)}>
          Ir a la page param
        </button>
      </div>

      <div className="card col-3 border border-primary my-4">
        <input
          type="text"
          placeholder="ingrese query"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => navigate(`/query/?q=${query}`)}>
          Ir a la page query
        </button>
      </div>
    </div>
  );
};
