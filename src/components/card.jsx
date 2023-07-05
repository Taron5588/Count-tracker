import './Card.css'
import { useState } from 'react'

function Card({value, array}) {

    const[arr, setArr] = useState(array)
    
    const handle = () => {
        setArr(arr.concat(arr[arr.length - 1] + 1))
    }

    return(
        <div>
            {arr.map((item, idx) => {
                return (
                    <div key={idx} className="container">
                        <p><button className='btn' onClick={handle}>X</button></p>
                        <h3>{`${item} qard`}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Card