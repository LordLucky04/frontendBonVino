import React from "react";
import Table from "react-bootstrap/Table";

export default function BodegasListado({ rows, onBuscarBodega, onToggleBodega }) {
  if (!rows || rows.length === 0) {
    return (
      <div className="container mt-5">
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

  const tbody = rows.map((bodega) => (
    <tr key={bodega.id}>
      <td>
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(bodega.id)}
        />
      </td>
      <td>{bodega.nombre}</td>
    </tr>
  ));

  return (
    <div className="container mt-5">
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
    </div>
  );
}
