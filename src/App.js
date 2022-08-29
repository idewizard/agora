
import {
  LOGIN_ROUTE, 
  VOTE_ROUTE,
} from "./constants"
import './App.css'
import { Login } from "./ui/screens/login-screen/login.screen"
import {useGlobalUser} from "./core/context"
import {Routes, Route, Navigate} from 'react-router-dom'

function PrivateRoute({children}){
  const [user] = useGlobalUser()

  if(user.token){
    return <>{children}</>
  }else{
    return <Navigate to="/"/>
  }
}

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path={LOGIN_ROUTE} element={
              <Login></Login>
            }/>

            <Route path={VOTE_ROUTE} element={
              <PrivateRoute>
                <div>
                  <h1>massa sei quem é tu agora</h1>
                </div>
              </PrivateRoute>
            }/>

          </Routes>
    </div>
  );
}

export default App
