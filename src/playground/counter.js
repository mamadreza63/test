import React from 'react';
import ReactDOM from 'react-dom';
class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }
    addOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    minusOne() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    reset() {
        this.setState({ count: 0 })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if (!isNaN(count)) {
            this.setState({count})
        }
    }
    
    render() {
        return (
            <div>
                <h3>counter: {this.state.count}</h3>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

var appRoot = document.getElementById('root');

ReactDOM.render(<Counter />, appRoot);


// let count = 0;

// const addOne = () => {
//     count++;
//     renderForm();
// }

// const minusOne = () => {
//     count--;
//     renderForm();
// }

// const reset = () => {
//     count = 0;
//     renderForm();
// }
// var appRoot = document.getElementById('root');

// const renderForm = () => {
//     const counter = (
//         <div>
//             <h3>counter: {count}</h3>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(counter, appRoot);
// }

// renderForm();
