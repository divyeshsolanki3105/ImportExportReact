import { Heading } from "./components/Heading";
import { InputQuery } from "./components/InputQuery";
import "./styles.css";
import { SubHeading } from "./components/SubHeading";
import { SubmitButton } from "./components/SubmitButton";

export default function App() {
  return (
    <div className="App">
     <Heading/>
     <InputQuery/>
     <SubHeading/>
     <SubmitButton/>
    </div>
  );
}
