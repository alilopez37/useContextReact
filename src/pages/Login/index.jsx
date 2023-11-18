import { Link, useNavigate } from "react-router-dom";
import userContext from "../../context/userContext";
import { useContext } from "react";

function Login() {
  const navigate = useNavigate()
  const {setUser} = useContext(userContext)

  const handler = () => {
    //Acá iria el código para hacer fetch
    setUser(true)
    navigate("/home")
  };

  return (
    <>
      <div>Sistema PLATINUM</div>
      <button className="bg-green-200" onClick={handler}>Iniciar sesión</button>
      <div>
        <Link className="bg-red-200" to={"/signup"}>Regístrate</Link>
      </div>
      <div>
        <Link className="bg-red-200" to={"/product/1"}>About</Link>
      </div>
    </>
  );
}

export default Login;
