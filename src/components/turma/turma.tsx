import "./turma.css"

interface TurmaProps {
    id: number,
    codigo: string
    
}

export function Turma({id, codigo} : TurmaProps){
    return(
        <div className="turma">
            <h3>{codigo}</h3>
        </div>
    )
}