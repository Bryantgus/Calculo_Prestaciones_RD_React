import calcularPrestaciones from "../utils/calculoDePrestaciones"
import type { DatosDelUsuario } from '../types/calcularPrestaciones';


export default function UtilsButtonsSection() {
  const datosParaCalcular: DatosDelUsuario = {
    tiempoTrabajando: {
      years: 4,
      months: 6,
      days: 28,
      monthsCurrentlyYear: 11,
      daysCurrentlyMonth: 19
    },
    salariosMensuales: {
      1: 10000,
      2: 10000,
      3: 10000,
      4: 10000,
      5: 15000,     
      6: 10000, 
      7: 10000,
      8: 10000,
      9: 10000,
      10: 10000,
      11: 10000,
      12: 12000,
    },
    periodo: 'semanal',
    tipoDeCalculo: 'ordinario',
    tomoVacaciones: false,
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
