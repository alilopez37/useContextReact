import { useContext } from "react"; //Hook para el leer el contexto
import userContext from "../../context/userContext"; //Este es el contexto
import { Navigate } from "react-router-dom"; //


function Home() {

  const value = useContext(userContext);
  console.log(value);

  return (
    <>
      {value.user ? (
        <div className="text-orange-700">Página Home</div>
      ) : (
        <Navigate to="/signup" replace={true} />
      )}
    </>
  );
}

export default Home;
