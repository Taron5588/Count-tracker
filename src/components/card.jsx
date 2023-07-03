import './Card.css'

function Card({value}) {


    const array = [1,2,3,4,5]
    array[5] = value

    function Handle() {
        array.push(0)
    }

    return(
        <div>
            {array.map((item, idx) => {
                return (
                    <div key={idx} className="container">
                        <p><button className='btn'>X</button></p>
                        <h3>{`${item} qard`}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Card