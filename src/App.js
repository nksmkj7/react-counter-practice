import Reducer from './useReducer'
import ReactRedux from './react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function Menu() {
  return (<>
    <div>
      <h3>React State Management</h3>
    </div>
    <div>
      <nav>
        <ul>
          <li><Link to='use-reducer-hook'>Counter with useReducer Hook</Link></li>
          <li><Link to='use-react-redux'>Counter with React Redux</Link></li>
        </ul>
      </nav>
    </div>
  </>)
}

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path='/use-reducer-hook' element={<Reducer />} />
          <Route path='/use-react-redux' element={<ReactRedux />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
