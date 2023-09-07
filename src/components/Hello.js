import React from 'react';

const Hello=() => {
    // return(
    //     <div>
    //         <h1>Hello Sakshi </h1>
    //     </div>
    // )

    // return React.createElement('div',null,'Hello Sakshi')
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
    React.createElement('h1',null,'Hello Sakshi'))
}

export default Hello