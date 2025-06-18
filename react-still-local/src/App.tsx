import { useEffect, useState } from 'react';
import './App.css';
import { RegularReactComponent } from "./components/RegularReactComponent";
import { StillAppLoader } from '@stilljs/apploader';


function App() {

  const [home1Ref, setHome] = useState('RefHomeFromReact');
  const [stillApp, setApp] = useState(new StillAppLoader());
  const [val, setVal] = useState('Initial');
  const [notify, setNotify] = useState('yes');

  useEffect(() => {
    console.log(stillApp);
    
    stillApp.component.setRefs([home1Ref]); 
    stillApp.local({ env: { STILL_HOME: 'public/ms/still/' } }).load();

    setTimeout(() => {

      stillApp.component.ref(home1Ref).stateVar1.onChange((val: any) => {
        console.log(`React listens to changes on Still.js component: `, val);
        setVal(val);
      });
      
    },200);

    return () => stillApp.unload();

  },[]);

  const callMe = () => {
    setVal(stillApp.component.ref(home1Ref)?.stateVar1.value);
    stillApp.component.ref(home1Ref).hide();
  }

  return (
    <>
      <RegularReactComponent></RegularReactComponent>
      React validating local Still component embeding {val}
      <button onClick={() => callMe()}>Click me</button>
      <st-element component="HomeComponent" notifyreact={notify} stRef={home1Ref}></st-element>
    </>
  )
}

export default App