import React from "react";
import Table from "react-bootstrap/Table";

export default function BodegasListado({ bodegas, onBuscarBodega, onToggleBodega, onActualizarBodegas }) {
  if (!bodegas || bodegas.length === 0) {
    return (
      <div className="container-izquierda mt-5 ms-n3" style={{marginRight: 200}}>
        <div className="header-container p-3 mb-2 bg-primary text-white rounded d-flex justify-content-between align-items-center">
          <h2 className="mb-0" style={{ fontFamily: "monospace" }}>Bodegas</h2>
          <button
            type="button"
            style={{ width: 150, background: "green", marginLeft: 50 }}
            className="btn btn-secondary"
            onClick={onBuscarBodega}
          >
            Buscar Bodega
          </button>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>Seleccionar</th>
              <th>Nombre Bodega</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  }

  const handleCheckboxChange = (bodegaId) => {
    onToggleBodega(bodegaId); // Notifica al padre
  };

  const tbody = bodegas.map((bodega) => (
    <tr key={bodega.id}>
      <td>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(bodega.id)}
          style={{ width: 20, height: 20, cursor: "pointer" }}
        />
      </td>
      <td>{bodega.nombre}</td>
    </tr>
  ));

  return (
    <div className="container-izquierda mt-5 ms-n3" style={{marginRight: 200}}>
      <div className="header-container p-3 mb-2 bg-primary text-white rounded d-flex justify-content-between align-items-center">
        <h2 className="mb-0" style={{ fontFamily: "monospace" }}>Bodegas</h2>
        <button
          type="button"
          style={{ width: 150, background: "green", marginLeft: 50 }}
          className="btn btn-secondary"
          onClick={onBuscarBodega}
        >
          Buscar Bodega
        </button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Seleccionar</th>
            <th>Nombre Bodega</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </Table>
      <button
          type="button"
          style={{ width: 150, background: "green", marginRight: 200 }}
          className="btn btn-secondary"
          onClick={onActualizarBodegas}
        >
          Actualizar Bodegas
        </button>
    </div>
  );
}
