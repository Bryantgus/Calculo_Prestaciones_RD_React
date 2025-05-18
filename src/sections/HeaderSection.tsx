
  export default function HeaderView() {
    return (
      <section className="text-sky-900 font-medium col-span-2 bg-neutral-800 h-[200px] w-full text-center bg-[url(/head-3.png)] bg-center bg-no-repeat bg-cover mt-10 flex justify-between items-center">
        <div className="w-full h-[80%] flex justify-end items-center mt-3">
          <h1 className="text-3xl flex items-end">
            <span>
              <span className="text-left">
                CÁLCULO
              </span> 
              <br />
              <span>
                DE PRESTACIONES
              </span>
              <br />
              <span className="text-2xl font-normal">
                Y DERECHOS ADQUIRIDOS
              </span>
            </span>
          </h1>
          <div className="w-[150px] h-[130px] bg-[url(/mt-logo.svg)] bg-center bg-no-repeat bg-contain "></div>
        </div>
      </section>
    )
  }
