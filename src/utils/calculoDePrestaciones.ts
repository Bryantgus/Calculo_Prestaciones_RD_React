

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
      diario: promedioMensual:  23.83
              promedioDiario: cantidad de meses

    */
    const valorParaTipoDeCalculo = tipoDeCalculo === 'ordinario' ? 23.83 : 26
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
        salarioPromedioDiario: periodo === 'diario' ? sumAllSalary / 12 : (sumAllSalary / mensual) / diario
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
  
  if (years >= 5) {
    diasCesantia += (years-5) * 23
    diasCesantia += (21 * 5)
    diasCesantia += 10
  }
  if (years > 0 && years < 5 ) {
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

function vacaciones(years: number, months: number, salarioPromedioDiario: number, tomoVacaciones: boolean) {
  /*
   si years mayor que 0 entonces
      tomoVacaciones => 
      true => dias => 
        5 meses => 6 dias
        6 meses => 7 dias 
        7 meses => 8 dias 
        8 meses => 9 dias 
        9 meses => 10 dias 
        10 meses => 11 dias 
        11 meses => 12 dias

      false => dias => 14 
  */
  let diasVacaciones = 0

  if (years > 0 && !tomoVacaciones) diasVacaciones = 14
  if (tomoVacaciones && months > 4) diasVacaciones = months + 1

  const vacaciones = diasVacaciones * salarioPromedioDiario
  
  return { vacaciones, diasVacaciones }
}

function navidad(monthsCurrentlyYear: number, days: number, salario: number) {
  /*
    tiempo de navidad
    tiempoEnMesesTotal = (months -1)  + (dias/31)
    navidad = (tiempoEnMeseTotal * salarioPromedioMensual) / 12
  */ 
  const navidad = (((monthsCurrentlyYear - 1) + (days / 31)) * salario) / 12
  
  return {navidad, tiempoNavidad: monthsCurrentlyYear + " meses y " + days + " dias"}
}
function calcularPrestaciones(datos: DatosDelUsuario) {
    const { salariosMensuales, tiempoTrabajando: { years, months, monthsCurrentlyYear, daysCurrentlyMonth}, periodo, tipoDeCalculo, tomoVacaciones} = datos
    const salariesCalculates = salarySection(salariosMensuales, periodo, tipoDeCalculo)
    const preavisoResult = preAviso(years, months, salariesCalculates.salarioPromedioDiario)
    const cesantiaResult = cesantia(years, months, salariesCalculates.salarioPromedioDiario)
    const vacacionesResult = vacaciones(years, months, salariesCalculates.salarioPromedioDiario, tomoVacaciones)
    const navidadResult = navidad(monthsCurrentlyYear, daysCurrentlyMonth, salariesCalculates.salarioPromedioMensual)
    
    console.log("Salarios", salariesCalculates);
    console.log("Creaviso", preavisoResult);
    console.log("Cesantia", cesantiaResult);
    console.log("Vacaciones", vacacionesResult);
    console.log("Navidad", navidadResult);

}



export default calcularPrestaciones;


