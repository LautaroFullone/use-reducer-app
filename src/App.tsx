
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonCounter from './components/ButtonCounter'
import { useReducer } from 'react'

const INITIAL_STATE = {
    contador: 0
}
// interface State{
//     contador: number
// }

type ActionType = 
    | { type: 'incrementar' } 
    | { type: 'decrementar' }
    | { type: 'setear', payload: number }

function contadorReducer(state: typeof INITIAL_STATE, action: ActionType ) {
// function contadorReducer(state: State, action: ActionType) {
    
    switch (action.type){

        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'setear':
            return {
                ...state,
                contador: action.payload
            }

        default:
            return state
    }
}

function App() {

   const [state, dispatch] = useReducer(contadorReducer, INITIAL_STATE)

    function handleSet() {
        dispatch({ type: 'setear' , payload: 40})
    }

    function handleAdd(){
        dispatch({type: 'incrementar'})
    }

    function handleSubtract(){
        if(state.contador > 0)
            dispatch({ type: 'decrementar' })
    }

    return (
        <>
            <div>

                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>

                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>

            </div>

            <h1>Counter</h1>

            <div className="card">

                <div className="counter-container">
                    <button className='counter' onClick={() =>{}}>
                        count is {state.contador}
                    </button>

                    <div className="counter-actions">
                        <ButtonCounter action={handleSubtract} content='-' />
                        <ButtonCounter action={handleAdd} content='+' />
                    </div>

                    <ButtonCounter action={handleSet} content='Set to 40' />
                </div>
                

                <p>
                    Apreta los botones para ver el accionar
                </p>

            </div>

            <p className="read-the-docs">
                Esta app utiliza useReduce a modo de ejemplo
            </p>
        </>
    )
}

export default App
