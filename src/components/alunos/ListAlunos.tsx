import React, { useEffect, useState } from 'react';
import CardComponent from '../card/CardComponent';


interface Aluno {
    id: number
    nome: string;
    email: string;
    curso: string;
  }

function ListAlunos() {

    const [alunos, setAlunos] = useState<Aluno[]>([])

  useEffect(() => {
    // Fazer a requisição GET para a API e obter a lista de alunos
    fetch('http://localhost:3004/alunos')
      .then(response => response.json())
      .then(data => {
        console.log('Dados dos alunos:', data);
        setAlunos(data); // Atualizar o estado com os dados recebidos
      })
      .catch(error => {
        console.error('Erro ao recuperar dados dos alunos:', error);
      });
  }, []);

  return (
    <div className='flex-1 flex-row p-10'>
        <h1 className='font-medium text-xl'>Alunos Cadastrados:</h1>
        {alunos.map(aluno => (
            <CardComponent
            key={aluno.id}
            id={aluno.id}
            name={aluno.nome}
            email={aluno.email}
            curso={aluno.curso}
        />
        ))}
        <div className='flex justify-center pt-4'>
            <div className='flex w-1/12 px-2 justify-center border border-teal-500 rounded cursor-pointer hover:bg-orange-400'>
                <p className="text-center hover:text-white"><a href="/form">Voltar</a></p>
            </div>
        </div>
    </div>
    
  );
}

export default ListAlunos;
