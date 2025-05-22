import InputBoton from "../components/InputBoton"

export default function DataUserSection() {

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
          <div className="flex">

            <div className="flex gap-10 pt-2">
              <InputBoton text={"Mensual"} />
              <InputBoton text={"Quincenal"} />
              <InputBoton text={"Semanal"} />
              <InputBoton text={"Diario"} />
            </div>
            
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
