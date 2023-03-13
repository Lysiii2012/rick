import Api from './component/api/Api';
import './App.css';
import  { BrowserRouter, Routes, Route   } from "react-router-dom"
import Filter_input from './component/filter_input/Filter_input';
import CharacterLink from './component/person_info/CharacterLink';
import Logo from './component/Logo';


function App(props) {
  return (
    <BrowserRouter className="App">
      <div className="App_content">
        <Logo/>
        <Filter_input />
      </div>
      <Routes className="App_person">
        <Route path="/" element={<Api />} />
        <Route path="/characters/:name/*" element={<CharacterLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
