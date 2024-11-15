import { useState } from "react"
import { Button } from "./Button"
import '../css/Sign.css'

export function SignIn(){

    const [candidate, setCandidate] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="sign">
            <h2 className="title">Sign In</h2>
            <form>
                <label className="labels">
                    <span className="spans">Matricula</span>
                    <input 
                        className="inputs"
                        type="text" 
                        placeholder="Ex: 001234"
                        value={candidate}
                        onChange={(e)=>{setCandidate(e.target.value)}}
                        />
                </label>
                <label className="labels">
                    <span className="spans">Senha</span>
                    <input 
                        className="inputs"
                        type="password"
                        placeholder="Ex: 123" 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                </label>
                <Button style="signin" text="Entrar" action={"text"} />
            </form>
            <p>Não é candidato ainda? <span>Candidate-se</span></p>
        </div>
    )
}