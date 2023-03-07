import "./App.css";
import Prva from "./components/Prvakompa";
import { DrugaKompa as Druga} from "./components/Drugakompa"

function App(){
  return(
    <div className="App">
    <h1>Algebra</h1>
     <Prva/>
     <Druga />
    </div>
    )
}

export default App;