
import { Link } from "react-router-dom"

interface CardComponentProps{
    id?: number,
    name: string,
    email: string,
    curso: string

}
function CardComponent({id, name, email, curso} : CardComponentProps) {
  return (
    <Link to={'/form'} state={{id: id}}>
    <div className="flex-1 cursor-pointer">
        <div className='flex flex-row divide-x-4 divide-emerald-500 p-2 border border-emerald-500'>
            <div className="flex justify-center items-center">
                <img className='w-20' alt='avatar' src='logo192.png'/>
            </div>
            <div className='flex flex-col justify-center pl-2'>
                <p className="font-bold">{name}</p>
                <p className="italic">{email}</p>
                <p>{curso}</p>
            </div>         
        </div>
    </div>
    </Link>

  )
}

export default CardComponent