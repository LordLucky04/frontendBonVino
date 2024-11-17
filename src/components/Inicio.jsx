import React, { useState } from "react";
import BodegasListado from "./childrenComponents/BodegasListado";
import VinosListado from "./childrenComponents/VinosListado";
import bodegasServices from "../services/bodegas.services";

export default function Inicio() {
  const [action, setAction] = useState("C");
  const [bodegas, setBodegas] = useState([]);
  const [selectBodegas, setSelectedBodegas] = useState([]);
  const [vinos, setVinos] = useState([]);

  const onBuscarBodega = async () => {
    console.log("Buscando bodegas...");
    const data = await bodegasServices.getBodegas();
    setBodegas(Array.isArray(data) ? data : []);
  };

  const onActualizarBodegas = async () => {
    console.log(selectBodegas);
    if (selectBodegas === undefined || selectBodegas.length === 0) {
      alert('Por favor, seleccione una bodega.');
      return;
    }
    
    const data = await bodegasServices.postBodegas(selectBodegas);
    setVinos(Array.isArray(data) ? data : []);
    setSelectedBodegas([]);
    onBuscarBodega();
  };
  

  const toggleBodegaSelection = (bodegaId) => {
    setSelectedBodegas((prevSelected) =>
      prevSelected.includes(bodegaId)
        ? prevSelected.filter((id) => id !== bodegaId)
        : [...prevSelected, bodegaId]
    );
  };
  
  return (
    <div className="d-flex justify-content-between">
      {action === "C" && (
        <>
          <BodegasListado
            bodegas={bodegas}
            onBuscarBodega={onBuscarBodega}
            onToggleBodega={toggleBodegaSelection}
            onActualizarBodegas={onActualizarBodegas}
          />
          <VinosListado 
          vinos={vinos} 
          bodegas={bodegas}
          />
        </>
      )}
    </div>
  );
}