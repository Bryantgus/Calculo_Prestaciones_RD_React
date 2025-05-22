
interface propsInputBoton {
    text: string,
}

export default function InputBoton({text}: propsInputBoton) {
  return (
    <div className="flex gap-1 justify-center items-center">
              <input type="radio"/>
              <span className="text-neutral-500 font-normal text-[15px]">{text}</span>
    </div>
  )
}
