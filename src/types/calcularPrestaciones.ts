export type DatosDelUsuario = {
  tiempoTrabajando: {
    days: number;
    months: number;
    years: number;
    monthsCurrentlyYear: number,
    daysCurrentlyMonth: number
  };
  salariosMensuales: Record<string, number>,
  periodo: string,
  tipoDeCalculo: string,
  tomoVacaciones: boolean
};

export type DatosDePrestacionesYaCalculadas = {
    salarySum: {
        sumAllSalary: number,
        averageMonthlySalary: number,
        averageDailySalary: number,
    }

}
