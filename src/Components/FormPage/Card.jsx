import React from 'react'

export default function Card({ peopleData, deletePeopleData }) {
    return (
        <div className="container ">
            {
                peopleData.map((value) => {
                    return <div className='border flex justify-between items-center w-72 p-4 border-black rounded-xl mb-4'>
                        <div>
                            <div className='flex gap-x-2'>
                                <div>firstName:</div>
                                <div>{value.firstName}</div>
                            </div>
                            <div className='flex gap-x-2'>
                                <div>lastName:</div>
                                <div>
                                    {value.lastName}
                                </div>
                            </div>
                            <div className='flex gap-x-2'>
                                <div>Age:</div>
                                <div>
                                    {value.age}
                                </div>
                            </div>
                            <div className='flex gap-x-2'>
                                <div>
                                    Ability:
                                </div>
                                <div>
                                    {value.ability}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => deletePeopleData(value.id)} className='border border-red-500 px-2 p-1 rounded-xl'>delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
