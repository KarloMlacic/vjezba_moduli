import "./App.css";
import PrvaKompa from "./components/Prvakompa";
import {DrugaKompa} from "./components/Drugakompa"

function App(){
  return(
    <div className="App">
    <h1>Algebra</h1>
     <PrvaKompa/>
     <DrugaKompa/>
    </div>
    )
}

export default App;