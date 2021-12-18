import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const FIND_USERS = gql`
  query QUsuario {
    qUsuario {
      correo
      identificacion
      nombre
      tipo
      estado
      _id
    }
  }
`;

const ListUser1 = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(FIND_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data["qUsuario"].map(
          ({ _id, estado, tipo, nombre, identificacion, correo }) => (
            <div key={_id} className="card m-4">
              <div className="card-body"></div>
              <h4>Nombre: {nombre}</h4>
              <p>Identificación: {identificacion}</p>
              <p>e-mail: {correo}</p>
              <p>Tipo de Usuario: {tipo}</p>
              <p>Estado: {estado}</p>
              <div className="card-body">
                <button
                  className="btn btn-primary btn-block container p-1"
                  onClick={() => {
                    localStorage.setItem("idEstado", JSON.stringify(data['qUsuario']));
                    navigate("/updateEstado");
                  }}
                >
                  Cambiar estado
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ListUser1;
