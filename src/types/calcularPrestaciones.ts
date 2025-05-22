export type DatosDelUsuario = {
  tiempoTrabajando: {
    days: number;
    months: number;
    years: number;
  };
  salariosMensuales: Record<string, number>,
  periodo: string,
  tipoDeCalculo: string
};

export type DatosDePrestacionesYaCalculadas = {
    salarySum: {
        sumAllSalary: number,
        averageMonthlySalary: number,
        averageDailySalary: number,
    }

}
