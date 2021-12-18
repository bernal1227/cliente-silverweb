import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const FIND_PROJECT = gql`
  query QProyecto {
    qProyecto {
      nombre
      oGenerales
      oEspecificos
      presupuesto
      fechaInicio
      fechaFin
      idLider
      estado
      fase
      _id
    }
  }
`;

const ListProject = () => {
  const { loading, error, data } = useQuery(FIND_PROJECT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data["qProyecto"].map(
          ({ _id, estado, presupuesto, nombre, fechaInicio, fechaFin, fase }) => (
            <div key={_id} className="card m-4">
              <div className="card-body"></div>
              <h4>Nombre: {nombre}</h4>
              <p>Presupuesto: {presupuesto}</p>
              <p>Fecha Inicio: {fechaInicio}</p>
              <p>Fecha Fin: {fechaFin}</p>
              <p>Estado: {estado}</p>
              <p>Fase: {fase}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ListProject;
