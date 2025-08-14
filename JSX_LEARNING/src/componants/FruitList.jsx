import React from 'react'

function FruitList() {
    const fruit = ["apple", "banana", "mango"]
    return (
        <div>

            <ul>
                {fruit.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>

    )
}

export default FruitList