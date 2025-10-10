import logo from './logo.svg';
import './App.css';
import Displaydata from './display';
import Factorial from './factorial';
import Calculator from './calculator';
import Performoperation from './calculatorwithoprn';
import { Welcome,Travel,Explore } from './component';
import TextConverter from './TextCaseConverter';
import TextCaseConverter from './UsestateTextcon';
function App() {
  return (
   <>
       {  /* <Displaydata></Displaydata>*/}
       {/*<Factorial number={8}></Factorial>*/}
       {/*<Calculator num1={50} num2={0}></Calculator>*/}
       {/*<Performoperation num1={30} num2={20} operation="add"></Performoperation>*/}
       {/* <Welcome/>
        <Travel/>
        <Explore/>*/}
        {/*<TextConverter></TextConverter>*/}

        <TextCaseConverter></TextCaseConverter>
   </>
  );
}

export default App;
