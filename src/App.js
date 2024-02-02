import './App.css';
import ButtonComp from  './components/ButtonComponent'
import Image from './components/ImageComponent';
import Input from './components/InputTextBox'


function App() {
  return (
    <div className="App">
      
      <ButtonComp
      onDClick={()=>alert("Button Double clicked")} 
      onSingleClick={()=>console.log("button single clicked")}
      >
        Click me
      </ButtonComp>
      <Image></Image>
      <Input></Input>
      
    </div>
  );
}

export default App;
