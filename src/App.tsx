import DataUserSection from "./sections/DataUserSection";
import HeaderView from "./sections/HeaderSection";
import SalarySection from "./sections/SalarySection";
import UtilsButtonsSection from "./sections/UtilsButtonsSection";

export default function App() {
  return (
    <div className="w-[100%vh] h-full flex justify-center items-center text-sky-600">
      <div className="grid grid-cols-2 auto-rows-auto gap-2 w-[85%]">

          <HeaderView />
        
          <DataUserSection />

          <SalarySection />

        {/* 4 y 5 están en filas independientes */}
        <div className="bg-green-200 w-full text-center">4 </div>
        <div className="bg-yellow-200 w-full text-center">5<br /> <br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /> <br /><br /><br /><br /><br /> aa</div>

        {/* 6 se coloca solo en la siguiente fila */}
        <UtilsButtonsSection />
      </div>
    </div>
  );
}
