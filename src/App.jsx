import "./App.css";
import { PrvaKompa as Prva,DrugaKompa as Druga,TrecaKompa,CetvrtaKompa as Cetvrta} from "./index.js";

function App(){
  return(
    <div className="App">
    <h1>Algebra</h1>
     <Prva/>
     <Druga />
     <TrecaKompa />
     <Cetvrta />
     <NekaKompa/>
    </div>
    )
}

export default App;