import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsuariosThunk, logueadoThunk } from "../../../redux/actions";

export const Login = ({ login, setLogin }) => {
  const [user, setUser] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mostrarContra, setMostrarContra] = useState(false);

  const dispatch = useDispatch();
  const todosUsuarios = useSelector((state) => state.todosUsuarios);

  useEffect(() => {
    dispatch(getUsuariosThunk());
  }, [dispatch]);

  const submit = (e) => {
    const filter = todosUsuarios.filter(
      (el) => el.empleado.email === user && el.contraseña === contrasena
    );
    dispatch(logueadoThunk(filter[0].id_user));
  };
  return (
    <Modal show={login} onHide={() => setLogin(!login)}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form >
          <div className="input-container">
            <input
              type="email"
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
          <div className="input-container">
            <input
              type={mostrarContra ? "text" : "password"}
              placeholder="Contraseña"
              onChange={(e) => setContrasena(e.target.value)}
              value={contrasena}
              required
            />
          </div>

          <button
            className="btn btn-warning"
            onClick={() => setMostrarContra(!mostrarContra)}
          >
            Mostrar contraseña
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="success"
          onClick={() => {
              submit();
            setLogin(!login);
          }}
        >
          Ingresar
        </Button>
        <Button variant="danger" onClick={() => setLogin(!login)}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
