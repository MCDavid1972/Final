import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  /// Validaciones
  //name ----> min 5 caracteres
  // email ----> que contenga un@
  // password -->  que no contengan espacios
  const handleSubmit = (e) => {
    e.preventDefault();
    ///Validacion
    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("Nombre no puede ser menor a 5");
      return;
    }
    const incluye = userData.email.includes("@");
    if (!incluye) {
      setError(true);
      setErrorMessage("El email debe incluir un @");
      return;
    }
    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;

    if (!passwordIsValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage("la contraseña no debe tener espacio en blanco");
      return;
    } // validar con includes los espacios al medio

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese su nombre"
          onChange={handleChange}
          name="name"
        ></input>
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Ingrese su contraseña"
          name="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Enviar</button>
      </form>
      {error && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default Form;
