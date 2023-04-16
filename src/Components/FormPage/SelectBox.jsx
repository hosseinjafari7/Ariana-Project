import React from 'react'

export default function SelectBox({ abilities, ability, handleInputAbility }) {
    return (
        <div>
            <label htmlFor="">Abilities:</label>
            <select
                value={ability}
                onChange={(e) => handleInputAbility(e.target.value)}
                className='my-6 mx-8 border border-black px-16'
                name=""
                id=""
            >
                {
                    abilities.map((value) => {
                        return <option value={value}>{value}</option>
                    })
                }
            </select>
        </div>
    )
}
