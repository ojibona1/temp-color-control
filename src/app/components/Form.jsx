import React, {useState, useEffect} from 'react'
import './assets/form.css'

const Form =(props)=> {
    const [username, setUsername] = useState('ojibona1')
    const [password, setPassword] = useState('Thinkover2002@$')
    const [inputusername, setInputUsername] = useState(null)
    const [inputpass, setInputPass] = useState(null)


    const handleUserChange =({target})=> {
        setInputUsername(target.value)
    }
    const handlePassChange =({target})=> {
        setInputPass(target.value)
    }


    useEffect(()=>{

        if(inputusername === username){
            document.getElementById('username').style.border = '3px solid #2afe04'
        }else{
            document.getElementById('username').style.border = '3px solid #ff0000'
        }
        if(inputpass === password){
            document.getElementById('password').style.border = '3px solid #2afe04'
        }else{
            document.getElementById('password').style.border = '3px solid #ff0000'
        }

        if(inputusername === username && inputpass === password){
            document.getElementById('submits').style.backgroundColor = 'lightgreen'
        }else{
            document.getElementById('submits').style.backgroundColor = 'lightgrey'
        }
        
    }, [inputusername, inputpass])

    return(
        <>
        <div className='card'>
            <form className='myForm' action="">
                <label htmlFor="username">UserName: </label><br />
                <input id='username' type="text" onChange={handleUserChange}/><br /><br />
                <label htmlFor="password">Password: </label><br />
                <input id='password' type="password" onChange={handlePassChange}/><br />
                <button id='submits' type='submit'>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Form