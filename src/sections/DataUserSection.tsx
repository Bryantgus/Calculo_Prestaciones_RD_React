import { useState } from "react";
import InputBoton from "../components/InputBoton"

const opciones = ["Mensual", "Quincenal", "Semanal", "Diario"];

export default function DataUserSection() {
  const [periodo, setPeriodo] = useState("");
  return (
    <div className="col-span-2 bg-white w-full font-light text-2xl pl-5 mt-4 flex flex-col">

      <span className="text-sky-600 mb-4 mt-6">Datos del solicitante</span>
      <div className="w-full flex">
        <div className="w-[50%]">
            
          <div className="flex flex-col h-auto ">
              <div className="w-full h-full justify-center grid grid-cols-2 gap-x-3 gap-y-5">
                <input type="text" placeholder="Documento de identidad" className="text-base h-9"/>
                <input type="text" placeholder="Nombre" className="text-base h-9"/>
                <input type="text" placeholder="Nombre de la empresa" className="w-full text-base h-9"/>
              </div>
          </div>

          <div className="mt-2">
            <span className="text-sky-600 mt-4">Seleccion de fechas</span>
            <div className="flex justify-around mt-2">
              <input type="date" placeholder="Documento de identidad" className="text-base"/>
              <input type="date" placeholder="Documento de identidad" className="text-base"/>
            </div>
          </div>
          
              
        </div>

        <div className="w-[50%] h-full">
          <span className="text-sky-600 text-lg">Seleccione el periodo</span>

          <div className="flex gap-7">
            {opciones.map((opcion) => (
                <div key={opcion} className="flex gap-1 justify-center items-center">
                  <input
                    type="radio"
                    id={opcion}
                    name="grupo-opciones"
                    value={opcion}
                    checked={periodo === opcion}
                    onChange={() => setPeriodo(opcion)}
                  />
                  <label htmlFor={opcion} className="text-neutral-500 font-normal text-[15px]">
                    {opcion}
                  </label>
                </div>
              ))}
              
          </div>

          <span className="text-sky-600 text-lg">Seleccione el periodo</span>
          <div className="flex pt-2">

            <div className="flex gap-2 ju stify-center items-center">
              <div>
                <InputBoton text={"Ordinario"}/>
              </div>
              
              <div>
                <InputBoton text={"Intermitente"} />
              </div>
              
            </div>

              
          </div>

        </div>


      </div>
    </div>
    
  )
}
