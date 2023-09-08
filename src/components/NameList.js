import React from 'react'
import Person from './Person'

function NameList() {
    const persons=[
        {
            id: 1,
            name: 'Diana',
            age:28
        },
        {
            id: 2,
            name: 'Riana',
            age:18
        },
        {
            id: 3,
            name: 'Fiana',
            age:25
        }
     ]
    const personList=persons.map(person=>
        <Person person={person}/>)
        return <div>{personList}</div>
}
  
export default NameList
