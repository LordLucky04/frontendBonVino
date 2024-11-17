import React from 'react';

const VinosListado = ({ vinos }) => {
  return (
    <div className="container-derecha mt-5">
      <div className="header-container p-3 mb-2 bg-primary text-white rounded">
        <h2 className="mb-0" style={{ fontFamily: "monospace" }}>Resumen Vinos</h2>
      </div>
      
      <div style={{ maxHeight: 'calc(75vh - 100px)', overflowY: 'auto' }}>
        {vinos.length > 0 ? (
          vinos.map((vino, index) => (
            <div key={index} className="card sm-4">
                  <h7>Nombre: {vino.nombre}</h7>

                  <h7>Bodega: {vino.nombreBodega}</h7>
                
                  <h7>Nota de cata: {vino.notaDeCataBodega}</h7>

                  <h7>Precio: ${vino.precio}</h7>

                  <h7>Añada: {vino.añada}</h7>
                
                  <h7>Composición:</h7>
                  {vino.varietales.map((varietal, idx) => (
                    <p key={idx}>
                        •{varietal.nombreUva}: {varietal.porcentajeComposicion}%
                    </p>
                  ))}

                    <h7>fecha de actualización: {vino.fechaActualizacion}</h7>
                    {vino.accion ? 
                    <h7 className='text-success'>"Vino creado"</h7> :<h7 className='text-warning'> "Vino actualizado"</h7>}
              </div>
          ))
        ) : (
          <div className="card sm-4" >
            <p>No hay vinos cargados</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VinosListado;