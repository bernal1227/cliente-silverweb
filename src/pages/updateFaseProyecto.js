import {React} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPDATE_FASE_PROYECTO = gql`
mutation Mutation($id: ID, $input: ProyectoInput) {
    updateProyecto(_id: $id, input: $input) {
      _id
    }
  }
`;

const UpdateFaseProyecto = () => {

  const id = localStorage.getItem("idEstado");  
  const navigate = useNavigate();
  const [fase, setFase] = useState('');
  const [updateProyecto] = useMutation(UPDATE_FASE_PROYECTO);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async(e) => {
                e.preventDefault();
                  await updateProyecto({
                    variables: {
                      id: id,
                      input: {
                        fase: fase
                      },
                    },
                  });
                  
                  alert('Datos actualizados correctamente!');
                  navigate('/dashboard');
              }}
            >
              <div className="form-group">
                <h1 className="display-1 container p-1">SILVER-WEB</h1>
              </div>
              <div className="form-group">
                <select
                  value={fase}
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setFase(e.target.value)}>
                  <option selected>Fase</option>
                  <option value={"EnDesarrollo"}>En Desarrollo</option>
                  <option value={"Terminado"}>Terminado</option>
                </select>
              </div>
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Actualizar Fase
                </button>
              </div>
              <div className="form-group container p-1">
                <Link
                  className="btn btn-primary btn-block container p-1"
                  to="/listProyect"
                >
                  Atrás
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFaseProyecto;
