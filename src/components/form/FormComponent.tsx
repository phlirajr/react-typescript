import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function FormComponent() {

  const { state } = useLocation();

  const [aluno, setAluno] = useState({
    nome:'',
    email:'',
    curso:''
  });
  
  useEffect(() => {
    if (state != null && state.id != null) {
        axios.get("http://localhost:3004/alunos/" + state.id).then((response) => {
          Object.keys(response.data).forEach((key) => {
            const value = response.data[key];
            handleInputData(key, response.data[key])
        });
        })
        .catch((error) => {
          console.error('Erro ao obter dados de aluno:', error)
        });
    }
}, [state])

  function handleInputData(data:string, value:string){

    setAluno(prevAluno =>({
      ...prevAluno,
      [data]: value
    }))

    }
  
    function salvarAluno() {

      if (state === null){
      // Aqui você faria a requisição para a API
      fetch('http://localhost:3004/alunos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Aluno cadastrado com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro ao cadastrar aluno:', error);
      });

    }else{
      fetch(`http://localhost:3004/alunos/${state.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(aluno)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Aluno alterado com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro ao alterar aluno:', error);
      });

    }
    }

  return (
    <div className='flex-1 flex-col '>
      { state === null && (
      <p className="flex font-semibold pl-10 pt-10 uppercase">Cadastrar Aluno</p>
      )}
      { state !== null && (
      <p className="flex font-semibold pl-10 pt-10 uppercase">Alterar Aluno</p>
      )}
      <div className='flex flex-row justify-around p-10 border-2 border-teal-600 m-10'>
        <div className="flex flex-col">
          <p>Nome</p>
          <input
            key='textInput'
            type="text" 
            title='Nome'
            placeholder='Nome'
            required
            value={aluno.nome}
            onChange={(e) => handleInputData('nome',e.target.value)}
            className='border border-slate-700 pl-2 py-1'>
          </input>
        </div>
        <div className="flex flex-col">
          <p>E-mail</p>
          <input
            key='emailInput'
            title='Email'
            placeholder='E-mail'
            value={aluno.email}
            onChange={(e) => handleInputData('email',e.target.value)}
            className='border border-slate-700 pl-2 py-1'>
          </input>
        </div>
        <div className="flex flex-col">
          <p>Curso</p>
          <input
            key='cursoInput' 
            title='Curso'
            placeholder='Curso'
            value={aluno.curso}
            onChange={(e) => handleInputData('curso',e.target.value)}
            className='border border-slate-700 pl-2 py-1'>
          </input>
        </div>
      </div>
      <div className='flex justify-center pb-5'>
        <div className='w-1/16 px-2 border border-teal-500 rounded cursor-pointer hover:bg-orange-400'>
          { state === null && (
          <p className="text-center hover:text-white" onClick={salvarAluno}>Cadastrar</p>
          )}
          { state !== null && (
          <p className="text-center hover:text-white" onClick={salvarAluno}>Alterar</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FormComponent