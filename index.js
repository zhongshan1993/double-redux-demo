import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
/*const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)*/

class DoubleRedux extends Component {
    constructor(props) {
        super(props)

        this.state = {
            change: false
        }
    }

    rerender() {
        this.setState({
            change: !this.state.change
        })
    }

    componentWillMount() {
        store.subscribe(this.rerender)
    }

    render() {
        return <Counter value={store.getState()} onIncrement={() => store.dispatch({ type: 'INCREMENT' })} onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
    }
}

module.exports = DoubleRedux