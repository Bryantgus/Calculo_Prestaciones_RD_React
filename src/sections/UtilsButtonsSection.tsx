import calcularPrestaciones from "../utils/calculoDePrestaciones"
import type { DatosDelUsuario } from '../types/calcularPrestaciones';


export default function UtilsButtonsSection() {
  const datosParaCalcular: DatosDelUsuario = {
    tiempoTrabajando: {
      days: 10,
      months: 3,
      years: 0
    },
    salariosMensuales: {
      1: 10000,
      2: 10000,
      3: 10000,
      4: 11000,
      5: 12000,
      6: 10000.5,
      

    },
    periodo: 'mensual',
    tipoDeCalculo: 'ordinario',
  };


  function calcular(datos: DatosDelUsuario) {
    calcularPrestaciones(datos);
  }

  return (
    <div className="col-start-2 bg-purple-200 w-full text-center">
      <button onClick={() => {calcular(datosParaCalcular)}}>Calcular</button>
    </div>
  )
}
