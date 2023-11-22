function NavComponent() {

    return (
        
        <div className='flex flex-row justify-center gap-3 px-10 py-2'>
            <div className='flex w-1/16 px-2 justify-center border border-teal-500 rounded cursor-pointer hover:bg-orange-400'>
                <p className="text-center hover:text-white"><a href="/form">Cadastrar</a></p>
            </div>
            <div className='flex w-1/16 px-2 justify-center border border-teal-500 rounded cursor-pointer hover:bg-orange-400'>
                <p className=" hover:text-white"><a href="/list">Listar</a></p>
            </div>
        </div>
    )
}

export default NavComponent