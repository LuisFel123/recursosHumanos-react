import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';


export default function ListadoEmpleados() {

    const urlBase = "http://localhost:8080/api/empleados";

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        try {
            const reponse = await axios.get(urlBase);
            console.log("Resultado empleados: ", reponse.data);
            setEmpleados(reponse.data);
        } catch (error) {
            console.log("Error al cargar empleados: ", error);
        }
    }

    return (
        <>
            <div className='container'>
                <div className="container text-center" style={{ margin: "30px" }}>
                    <h3>
                        Sistema de Recursos Humanos
                    </h3>
                </div>

                <table class="table table-striped table-hover align-middle">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Empleado</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Sueldo</th>
                            <th scope='col'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //iterar el arreglo de empleados
                            empleados.map((empleado) => (
                                <tr key={empleado.idEmpleado}>
                                    <th scope="row">{empleado.idEmpleado}</th>
                                    <td>{empleado.nombre}</td>
                                    <td>{empleado.departamento}</td>
                                    <td>

                                        {empleado.sueldo}

                                    </td>
                                    <td className='text-center'>
                                        <div>
                                            <Link to={`/editar/${empleado.idEmpleado}`} className='btn btn-warning btn-sm me-3'>Editar</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </>
    )
}
