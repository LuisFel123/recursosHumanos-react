
import AgregarEmpleado from "./empleados/AgregarEmpleado"
import EditarEmpleado from "./empleados/EditarEmpleado"
import ListadoEmpleados from "./empleados/ListadoEmpleados"
import Navegacion from "./plantilla/Navegacion"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ListadoEmpleados />} />
          <Route path="/agregar" element={<AgregarEmpleado />} />
          <Route path="/editar/:id" element={<EditarEmpleado />} />
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
