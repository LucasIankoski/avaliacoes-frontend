import { useState } from 'react'
import './App.css'
import { Turma } from './components/turma/turma';
import { useTurmaData } from './hooks/useTurmaData';

function App() {
  const {data} = useTurmaData();

  return (        
    <div className="container">
      <h1>Selecione a sua turma</h1>
      <div className="turma-grid">
        {data?.map(turmaData => 
          <Turma 
            codigo={turmaData.codigo} 
            id={turmaData.id}
          />
        )}
      </div>
     </div>    
  )
}

export default App
