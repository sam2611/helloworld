//--functional component--

import React from 'react'

// function Greet()
// {
//     return <h1>Hello Sakshi</h1>
// } 

//--functional component using arrow function
const Greet= props => {
    const{name, heroName}= props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}!</h1>
            
        </div>
    )
}

//--name export--
// export const Greet= () => <h1>Hello Sakshi !</h1>

//--default export--
export default Greet