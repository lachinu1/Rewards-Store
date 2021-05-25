import React, { useState } from "react";
import "./styles.css";




function History() {

    const [isLoading, setIsLoading] = useState(true);



    return (
        <React.Fragment>
            <div className="history-container">
                <div className="history-header">
                    <h1 className="title">Mi Historial</h1>
                    <div className="banner"></div>
                </div>
                {/* Tabla */}
                <table>
                    <thead className="history">
                        <tr>
                            <th className="text-center">Usuario</th>
                            <th className="text-center">Producto</th>
                            <th className="text-center">Categoría</th>
                            <th className="text-center">Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="text-center">Chinu</td>
                        <td className="text-center">Celular Samsung S8</td>
                        <td className="text-center">Teléfonos</td>
                        <td className="text-center">32569</td>
                        {/* {tableRows} */}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
    




export default History;