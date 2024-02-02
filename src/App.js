import './App.css';
import ButtonComp from  './components/ButtonComponent'
import Image from './components/ImageComponent';
import Input from './components/InputTextBox'
import Copy from './components/CopyPaste'

function App() {
  return (
    <div className="App">
      <div>
      <ButtonComp
      onDClick={()=>alert("Button Double clicked")} 
      onSingleClick={()=>console.log("button single clicked")}
      >
        Click me
      </ButtonComp>
      </div>
      <div>
      <Image></Image>
      </div>
      <div>
      <Input></Input>
      </div>
      <div> copy paste thing
      <Copy onEvent="cut">
      <p >
        Hey this is some text ...
      </p>
      </Copy>
     
      </div>
    </div>
  );
}

export default App;
