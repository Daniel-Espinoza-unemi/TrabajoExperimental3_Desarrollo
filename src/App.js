import { useState } from "react";
import './App.css';

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState({});
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const validar = () => {
    let erroresTemp = {};
    if (!nombre.trim()) erroresTemp.nombre = "El nombre es obligatorio";
    if (!/\S+@\S+\.\S+/.test(correo)) erroresTemp.correo = "El correo no es válido";
    if (password.length < 8) erroresTemp.password = "La contraseña debe tener al menos 8 caracteres";
    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) alert("Formulario enviado correctamente 🚀");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-suave">
      <form onSubmit={handleSubmit} className="formulario-flotante p-5 shadow rounded">
        <h3 className="titulo-form text-center mb-4">Formulario de Registro</h3>

        <div className="form-group">
          <input
            type="text"
            id="nombre"
            className="input-flotante"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label htmlFor="nombre">Nombre</label>
          {errores.nombre && <div className="text-danger mt-1">{errores.nombre}</div>}
        </div>

        <div className="form-group">
          <input
            type="email"
            id="correo"
            className="input-flotante"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <label htmlFor="correo">Correo</label>
          {errores.correo && <div className="text-danger mt-1">{errores.correo}</div>}
        </div>

        <div className="form-group position-relative">
          <input
            type={mostrarPassword ? "text" : "password"}
            id="password"
            className="input-flotante"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
          <button
            type="button"
            className="btn-ver-password"
            onClick={() => setMostrarPassword(!mostrarPassword)}
          >
          </button>
          {errores.password && <div className="text-danger mt-1">{errores.password}</div>}
        </div>

        <button type="submit" className="btn-enviar w-100 mt-3">Enviar</button>
      </form>
    </div>
  );
}

export default App;
