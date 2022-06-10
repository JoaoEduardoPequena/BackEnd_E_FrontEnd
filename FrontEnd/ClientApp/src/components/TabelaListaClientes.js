import React, { Fragment } from "react";

export default function TabelaListaClientes({ listaClientes }) {


    return (
        <Fragment>
            {listaClientes.length === 0 ? null : 
                <table className="table table-bordered">
                    <thead className="table table-sm table- table-primary">
                        <tr>
                            <th>Cliente</th>
                            <th>Chamadas Total</th>
                            <th>Chamadas não Atendidas</th>
                            <th>Ocorrencias Total</th>
                            <th>Data da Chamada</th>
                            <th>Hora Chamada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(listaClientes).map((itemCliente) => {
                            
                            let { ...listClientes } = listaClientes[itemCliente].clientes
                            
                              return (
                                <Fragment>
                                      {
                                          Object.keys(listClientes).map((key, index) => {
                                            
                                            return(
                                                <tr key={index}>
                                                <td>{key}</td>
                                                <td>{listClientes[key].chamadas_total}</td> 
                                                <td>{listClientes[key].chamadas_nao_atendida}</td>
                                                <td>{listClientes[key].ocorrencias_total}</td>
                                                <td>{listClientes[key].data}</td>
                                                <td>{listClientes[key].hora}</td>
                                            </tr>
                                            )
                                          })
                                      }
                                </Fragment>
                            )
                        })
                        }
                    </tbody>
                </table>
            }
        </Fragment>
    );

}

