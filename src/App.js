import NavBar from './componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting={"La mejor teconologia en tus manos"} />
    </div>
  );
}

export default App;
