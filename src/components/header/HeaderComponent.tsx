function HeaderComponent() {
  return (
    <div className='flex flex-row justify-around items-center pl-3 bg-teal-800'>
      <div className="flex">
        <img className = 'w-8 h-8' alt='logo'src='logo.png'/>
      </div>
      <div className="flex justify-center">
        <h1 className='font-semibold text-center text-white text-xl p-3'>Aula W3B</h1>
      </div>
      <div className="flex flex-row gap-3 text-white">
        <a href="/">Home</a>
        <a href="/form">Cadastro</a>
        <a href="/list">Listar</a>
      </div>
    </div>
  )
}

export default HeaderComponent