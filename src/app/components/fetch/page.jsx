import Image from 'next/image'
import React from 'react'

async function fetchData(){
    const response = await fetch('https://restcountries.com/v3.1/all',
    {cache: 'no-cache'})

    const data = response.json()
    return data
}

export default async function FetchApi() {
   const countries = await fetchData()
   const fullData = countries.map(
    country => (
        <section key={country.cca2}>
       <Image src={country.flags.svg} alt={country.name.official} width='300' height='300'/>
       <h2>{country.name.official}</h2>
        </section>
    )
   )
  return (
    <div>
        <h2>Total number</h2>
    </div>
  )
}
