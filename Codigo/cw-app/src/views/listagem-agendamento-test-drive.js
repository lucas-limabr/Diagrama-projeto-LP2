import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/card";

import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import axios from "axios";
import { BASE_URL } from "../config/axios";

const baseURL = `${BASE_URL}/listagem-agendamentotestdrive`;

function ListagemAgendamentoTestDrive() {
  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-testdrive`);
  };

  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);

  if (!dados) return null;

  return (
    <div className="container">
      <Card title="Listagem de Agendamento de Test-Drive">
        <div className="row">
          <div className="col-lg-12">
            <br />
            <div className="bs-component">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => cadastrar()}
              >
                Novo Test-Drive
              </button>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Data Agendada</th>
                    <th scope="col">Hora Agendada</th>
                    <th scope="col">Hora Entregue</th>
                    <th scope="col">CPF do Cliente</th>
                    <th scope="col">Concessionaria</th>
                    <th scope="col">Modelo</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.dataAgendada}</td>
                      <td>{dado.horaAgendada}</td>
                      <td>{dado.horaEntregue}</td>
                      <td>{dado.cpfCliente}</td>
                      <td>{dado.razaoSocialConcessionaria}</td>
                      <td>{dado.modeloVeiculo}</td>
                      <td>
                        <Stack spacing={1} padding={0} direction="row">
                          <IconButton
                            aria-label="edit"
                          //onClick={() => editar(dado.id)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                          //onClick={() => excluir(dado.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ListagemAgendamentoTestDrive;
