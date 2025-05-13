export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 auto-rows-auto gap-2 w-[80%]">
        <div className="col-span-2 bg-red-400 h-10 w-full text-center">1</div>
        <div className="col-span-2 bg-gray-200 w-full text-center">2</div>

        {/* 3 ocupa dos filas */}
        <div className="bg-blue-200 w-full text-center row-span-2">
          3<br />
          contenido largo<br />
          más contenido<br />
          más contenido<br />
          <br />
          contenido largo<br />
          más contenido<br />
          más contenido<br />
          <br />
          contenido largo<br />
          más contenido<br />
          más contenido<br />
          <br />
          contenido largo<br />
          más contenido<br />
          más contenido<br />
          <br />
          contenido largo<br />
          más contenido<br />
          más contenido<br />
          <br />
          contenido largo<br />
          más contenido<br />
          más contenido<br />
          
        </div>

        {/* 4 y 5 están en filas independientes */}
        <div className="bg-green-200 w-full text-center">4</div>
        <div className="bg-yellow-200 w-full text-center">5</div>

        {/* 6 se coloca solo en la siguiente fila */}
        <div className="col-start-2 bg-purple-200 w-full text-center">6</div>
      </div>
    </div>
  );
}
