
// import React, {Component}from 'react';

// class CounterComponent extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0,
//         }
//     }

//     incrimentCounter = ()=>{
//         this.setState({count: this.state.count+1});
//     }

//     render(){
//         return(
//             <>
//             <h2>Count: {this.state.count}</h2>
//             <button onClick={this.incrimentCounter}>incriment Counter</button>
//             </>
//         )
//     }
// }

// export default CounterComponent;

import React, { useState } from 'react';

function CounterComponent() {
    const [count, setCount] = useState(0);
    const incrimentCount = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={incrimentCount}>Incriment</button>
        </>
    )
}

export default CounterComponent;