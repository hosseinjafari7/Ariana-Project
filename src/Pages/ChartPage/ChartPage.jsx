import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import { usePeopleDataState } from '../../Context/PeopleDataContext';
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"

export default function ChartPage() {
  const { peopleData } = usePeopleDataState()
  const [userData, setuserData] = useState({
    labels: peopleData.map((value) => {
      return value.firstName
    }),
    datasets: [{
      label: "age",
      data: peopleData.map((value) => {
        return value.age
      })
    }]
  })


  return (
    <Layout>
      <div className='w-72 h-72'>
        <div>
          <Bar data={userData} />
        </div>
      </div>
    </Layout>
  )
}
