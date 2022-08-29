import { useState } from "react"
import { USER_INITIAL_STATE } from "../../../constants"
import { Button } from '../../components'
import { useGlobalUser } from "../../../core/context"

function Login(){

    const [inputValues, setInputValues] = useState(USER_INITIAL_STATE)
    const socket = new WebSocket("ws://otacrazy2123.github.io/agora/")

    function handleOnChange(event) {
        const {name, value} = event.target
        setInputValues({...inputValues, [name]: value})
    }

    
    const allFieldsFullFilled = (
        inputValues.login 
    )


    function setup(){
        socket.onopen = openSocket;
        socket.onmessage = showMessage;
    }

    function openSocket(){
        console.log('Abrindo socket e mandadno msg')
    }

    function showMessage(result){
        console.log(result)
    }

    return (
        <div>            
            <label htmlFor="login">NOME
                <input value={inputValues.login} name='login' type="text" className='login-input'
                   onChange={handleOnChange}/>
            </label>
            <Button buttonType={"submit"} onClickFunction={}>ENTRAR</Button>
        </div>
    )

}

export {Login}