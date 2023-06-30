
function Card({value}) {


    const array = [1,2,3,4,5]
    array[5] = value

    return(
        <div>
            {array.map((item, idx) => {
                return <div key={idx}>
                    <h1>{item}</h1>
                    <p><button>X</button></p>
                </div>
            })}
        </div>
    )
}

export default Card