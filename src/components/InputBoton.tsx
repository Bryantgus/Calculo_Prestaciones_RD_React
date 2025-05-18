
interface propsInputBoton {
    text: string,
}

export default function InputBoton({text}: propsInputBoton) {
  return (
    <div className="flex gap-2 ju stify-center items-center">
              <input type="text" className="w-10 bg-red-600"/>
              <span className="text-neutral-500 font-normal text-sm">{text}</span>
    </div>
  )
}
