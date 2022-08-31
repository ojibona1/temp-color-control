import React, {useState, useEffect} from 'react';
import './assets/temp.css';


const Temp =()=> {

    const [temperature, setTemperature] = useState(0);

    const [color, setColor] = useState(null);

    const Colors = ['#1034A6', '#412F88', '#722B6A', '#A2264B', '#D3212D', '#F62D2D'];


    
    

    const handleClickAdd =()=> {
        setTemperature(prev=>{
           if(prev < 50){
            return prev + 1;
           }else{
               return prev;
           }
        })
    }

    const handleClickSub =()=> {
        setTemperature(prev=>{
            if(prev > 0){
                return prev - 1;
            }else{
                return prev;
            }
        })
    }

    useEffect(()=>{

        switch(true){
            case (temperature >= 1 && temperature < 10):
                setColor(Colors[0])
                break;
            
            case (temperature >= 10 && temperature < 20):
                setColor(Colors[1])
                break;

            case (temperature >= 20 && temperature < 30):
                setColor(Colors[2])
                break;
            case (temperature >= 30 && temperature < 40):
                setColor(Colors[3])
                break;
            case (temperature >= 40 && temperature < 50):
                setColor(Colors[4])
                break;
            case (temperature === 50):
                setColor(Colors[4])
                break;
                default: 
        }

    },[temperature])
    
    return(
        <>
        <div className='card'>
            <div style={{background:color}} className='reader'>
                <p className='temp-number'>{`${temperature}° C`}</p>
            </div>
            <div className='btns'>
                <button onClick={handleClickAdd}>+</button>
                <button onClick={handleClickSub}>-</button>
                </div>
        </div>
        </>
    )
}
export default Temp