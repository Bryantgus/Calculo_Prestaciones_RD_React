import type { DatosDelUsuario, DatosDePrestacionesYaCalculadas } from "../types/calcularPrestaciones";

type SalarioPromedio = {
  valorSalarioPromedioMensual: number;
  valorSalarioPromedioDiario: number;
};



function salarySection(salary: Record<string, number>, periodo: string, tipoDeCalculo: string) {
    const sumAllSalary = Object.keys(salary).reduce((sum, salaryKey) => {
        return sum += salary[salaryKey]
    }, 0)
    /*mensual: promedioMensual: cantidad de meses
               promedioDiario: 23.833
      quincenal: promedioMensual: cantidad de meses / 2
      semanal: promedioMensual: cantidad de meses / 4.3333
               promedioDiario: 23.83
      diario: promedioMensual: 0.25178 23.83
              promedioDiario: cantidad de meses

    */
    const valorParaTipoDeCalculo = tipoDeCalculo === 'ordinario' ? 23.829 : 26
    const valorPeriodoParaCalcularSalarioPromedioMensualDiario: Record<string, SalarioPromedio> = {
    'mensual': {
      valorSalarioPromedioMensual: Object.keys(salary).length,
      valorSalarioPromedioDiario: valorParaTipoDeCalculo
    },
    'quincenal': {
      valorSalarioPromedioMensual: Object.keys(salary).length / 2,
      valorSalarioPromedioDiario: valorParaTipoDeCalculo,
    },
    'semanal': {
      valorSalarioPromedioMensual: Object.keys(salary).length / 4.3333,
      valorSalarioPromedioDiario: valorParaTipoDeCalculo,
    },
    'diario': {
      valorSalarioPromedioMensual: Object.keys(salary).length / 23.83,
      valorSalarioPromedioDiario: valorParaTipoDeCalculo, 
    },
    };

    const { valorSalarioPromedioDiario: diario, valorSalarioPromedioMensual: mensual} = valorPeriodoParaCalcularSalarioPromedioMensualDiario[periodo];


    return {
        sumatoriaDeSalarios: sumAllSalary, 
        salarioPromedioMensual: sumAllSalary / mensual,
        salarioPromedioDiario: periodo === 'diario' ? sumAllSalary / diario : (sumAllSalary / mensual) / diario
    }
    

    
    
}
function calcularPrestaciones(datos: DatosDelUsuario) {
    const { salariosMensuales, tiempoTrabajando: { years, months, days}, periodo, tipoDeCalculo} = datos
    const salariesCalculates = salarySection(salariosMensuales, periodo, tipoDeCalculo)
    console.log(salariesCalculates);
    
    
}



export default calcularPrestaciones;