import React from "react";
import { useParams } from "react-router-dom";

export const Parametro = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Params es {name}</h1>
    </div>
  );
};
