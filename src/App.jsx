import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponente from './componentes/navbar';
import { ItemContainer } from './componentes/ItemContainer/itemContainer';



function App() {
  return (
    <div className="App">

      <NavbarComponente></NavbarComponente>
      <ItemContainer imagen = "https://sm.ign.com/ign_es/screenshot/default/cropped-henry-cavill-fuente-instagram-henry-cavill_7v94.jpg" titulo = "Superman" descripcion = "'Superman: Legacy': todo lo que sabemos sobre la película de James Gunn para DC con David Corenswet en lugar de Henry Cavill."></ItemContainer>
      
      
      
    </div>
  );
}

export default App;
