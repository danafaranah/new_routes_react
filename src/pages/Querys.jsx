import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Querys = () => {
  const [params] = useSearchParams();
  const [q, setQ] = useState("");

  useEffect(() => {
    setQ(params.get("q"));
  }, [params]);

  return (
    <div>
      <h1>Query es {q}</h1>
    </div>
  );
};
