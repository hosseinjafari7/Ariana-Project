import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import SelectBox from '../../Components/FormPage/SelectBox'
import { usePeopleDataDispatch, usePeopleDataState } from '../../Context/PeopleDataContext'
import Card from '../../Components/FormPage/Card'

export default function FormPage() {
  let abilities = ["html", "css", "js"]
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [age, setage] = useState(0)
  const [ability, setability] = useState("html")

  function handleInputFirstName(inputValue) {
    setfirstName(inputValue)
  }
  function handleInputLastName(inputValue) {
    setlastName(inputValue)
  }
  function handleInputAge(inputValue) {
    setage(inputValue)
  }
  function handleInputAbility(inputValue) {
    setability(inputValue)
  }

  const { peopleData } = usePeopleDataState()
  const { addPeopleData, deletePeopleData } = usePeopleDataDispatch()


  return (
    <Layout>
      <div className="container flex justify-between border border-black rounded-xl p-8 ">
        <div className="left ">
          <form action="" onSubmit={(e) => {
            e.preventDefault();
            addPeopleData(firstName, lastName, age, ability)
          }}>
            <div>
              <label htmlFor="">FirstName:</label>
              <input
                value={firstName}
                onChange={(e) => handleInputFirstName(e.target.value)}
                className='border border-black mx-4'
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">LastName:</label>
              <input
                value={lastName}
                onChange={(e) => handleInputLastName(e.target.value)}
                className='border border-black my-6 mx-4'
                type="text"
              />
            </div>
            <div>
              <label htmlFor="">Age:</label>
              <input
                value={age}
                onChange={(e) => handleInputAge(e.target.value)}
                className='border border-black mx-14'
                type="number" />
            </div>
            <div>
              <SelectBox abilities={abilities} ability={ability} handleInputAbility={handleInputAbility} />
            </div>
            <div>
              <button className='border border-black px-4 py-1 rounded-xl'>submit</button>
            </div>
          </form>
        </div>
        <div className="right ">
          <Card peopleData={peopleData} deletePeopleData={deletePeopleData} />
        </div>
      </div>
    </Layout>
  )
}
