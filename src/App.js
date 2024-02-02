
import './App.css';
import Form from "./Form"
import Button from './Button';

function App() {
  return (
    <div className="App" onClick={()=>console.log("mai b chal gya")}>
     <Form>
    
     </Form>
     <Button onSingleClick={()=>console.log("button single clicked")}>
        Click me
      </Button>
     
     
    </div>
  );
}

export default App;
