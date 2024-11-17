import BodegaService from "../services/bodegas.services.js";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Reservas.css';
import bodegasServices from "../services/bodegas.services.js";

export default function Inicio() {
  const [action, setAction] = useState('C');
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectBodegas, setSelectedBodegas] = useState([]);
  const [bodegas, setBodegas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showInactive, setShowInactive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [modalReserva, setModalReserva] = useState(null);


  const onSubmit = handleSubmit(async () => {   
    loadData()
  });


  const loadData = async () => {
    const data = await bodegasServices.getBodegas();
    setRows(Array.isArray(data) ? data : []);
  };

  /*const fetchAuxiliaryData = async () => {
    const [canchasData, clientesData, tipoReservasData] = await Promise.all([
      canchasService.getCanchas(),
      clientesService.getClientes(),
      tipoReservasService.getTipoReservas()
    ]);
    setCanchas(canchasData);
    setClientes(clientesData);
    setTipoReservas(tipoReservasData);
  };*/

  const onSeleccionarUnBox = () => {
    setSelectedReserva(null);
    setAction('S');
  };

  const onBuscarActualizaciones = (reserva) => {
    setSelectedReserva(reserva);
    setAction('M');
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(rows.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleShowModal = (action, bodegas) => {
    setModalAction(action);
    setModalReserva(bodegas);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalAction(null);
    setModalReserva(null);
    setShowModal(false);
  };

  const searchForm = (
  );

  return (
    <>
      {(action === 'R' || action === 'M') && (
        <ReservaRegistro
          setAction={setAction}
          loadData={loadData}
          reserva={selectedReserva}
          canchas={canchas}
          clientes={clientes}
          tipoReservas={tipoReservas}
        />
      )}
      {action === 'C' && (
        <>
          <div style={{ alignItems: "center", display: "flex" }}>
          <form onSubmit={onSubmit} className="d-flex">
            <button className="btn btn-filtrar" type="submit" id="button-addon1" style={{ background: 'lightgreen' }}>
              Buscar Bodegas
            </button>
          </form>
          </div>
          <ReservaListado
            rows={currentItems}
            onModificarReserva={onModificarReserva}
            onEliminarReserva={(reserva) => handleShowModal('eliminar', reserva)}
            onToggleActivoReserva={(reserva) => handleShowModal('toggleActivo', reserva)}
            canchas={canchas}
            clientes={clientes}
            tipoReservas={tipoReservas}
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            searchForm={searchForm}
            onAgregarReserva={onAgregarReserva}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
        </>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalAction === 'eliminar' && "¿Estás seguro de que quieres eliminar esta reserva?"}
          {modalAction === 'toggleActivo' && ¿Estás seguro de que quieres ${modalReserva?.activo ? 'desactivar' : 'activar'} esta reserva?}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={modalAction === 'eliminar' ? onEliminarReserva : onToggleActivo}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}