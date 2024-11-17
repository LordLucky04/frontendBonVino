import React, { useEffect, useState } from "react";
import BodegasListado from "./childrenComponents/BodegasListado";
import bodegasServices from "../services/bodegas.services";

export default function Inicio() {
  const [action, setAction] = useState("C");
  const [rows, setRows] = useState([]);
  const [selectBodegas, setSelectedBodegas] = useState([]);

  const onBuscarBodega = async () => {
    console.log("Buscando bodegas...");
    const data = await bodegasServices.getBodegas();
    setRows(Array.isArray(data) ? data : []);
  };

  const toggleBodegaSelection = (bodegaId) => {
    setSelectedBodegas((prevSelected) =>
      prevSelected.includes(bodegaId)
        ? prevSelected.filter((id) => id !== bodegaId)
        : [...prevSelected, bodegaId]
    );
  };

  return (
    <>
      {action === "C" && (
        <>
          <BodegasListado
            rows={rows}
            onBuscarBodega={onBuscarBodega}
            onToggleBodega={toggleBodegaSelection}
          />
        </>
      )}
    </>
  );
}
