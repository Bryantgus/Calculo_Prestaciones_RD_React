

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

//calculo de pre-aviso, cesantia, vacaciones y chrismas salary
function preAviso(years: number, months: number, salarioPromedioDiario: number) {
    /*Preaviso: Se calcula el salario promedio diario * los dias
      >= 3 meses < 6 meses : 7 dias
      >= 6 meses < 11 meses: 14 dias
      > 1 año o 12 meses: 28 dias
      */
    let diasPreaviso = 0
  
    if (years > 0) {
        diasPreaviso = 28
    } else if (months >= 3 && months < 6) {
        diasPreaviso = 7
    } else if (months >= 6 && months < 11) {
        diasPreaviso = 14
    }
    const preAviso = salarioPromedioDiario * diasPreaviso
    return {preAviso: preAviso, diasPreaviso: diasPreaviso} 
}

function cesantia(years: number, months: number, salarioPromedioDiario: number) {
  /* cesantia
    years > 5: diasCesantia = year-5 * 23
    0 < years < 6: diasCesantia = year * 21
    ahora: no importa si hay years o no se le suman estos valores a los dias de cesantia
    months >= 3 & < 6:diasCesantia += 6
    months >= 5 & < 12: doasCesamtoa += 13
    
  */
  let diasCesantia = 0
  if (years >= 10) {
    diasCesantia = 10
  }
  if (years > 5) {
    diasCesantia += (years-5) * 23
    diasCesantia += (21 * 5)
  }
  if (years > 0 && years < 6 ) {
    diasCesantia = 21 * years
  }

  if (months >= 3 && months < 6) {
      diasCesantia += 6       
  } else if (months >= 6 && months < 12) {
      diasCesantia += 13
  } 
  const cesantia = salarioPromedioDiario * diasCesantia
  return {cesantia: cesantia, diasCesantia: diasCesantia}

}

function calcularPrestaciones(datos: DatosDelUsuario) {
    const { salariosMensuales, tiempoTrabajando: { years, months, days}, periodo, tipoDeCalculo} = datos
    const salariesCalculates = salarySection(salariosMensuales, periodo, tipoDeCalculo)

    const preavisoResult = preAviso(years, months, salariesCalculates.salarioPromedioDiario)
    const cesantiaResult = cesantia(years, months, salariesCalculates.salarioPromedioDiario)
    console.log("preaviso", preavisoResult);
    console.log("cesantia", cesantiaResult);
    

}



export default calcularPrestaciones;


