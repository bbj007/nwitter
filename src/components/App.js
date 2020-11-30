
import React, {useState} from 'react';
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  console.log("user=",authService.currentUser);
  const [ isLoggedIn, SetIsLoggedIn ] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  )
}

export default App;
