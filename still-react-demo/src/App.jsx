import { useState } from 'react'
import './App.css'
import { ReactRegularComponent } from './components/ReactRegularComponent.jsx'
import { StillAppLoader } from '@stilljs/apploader'

function App() {

  const [ref1, setRef1] = useState('myStillCmp1');
  const [varState1, setState1] = useState('Initial value');
  const [stillApp, _] = useState(new StillAppLoader());

  stillApp.cdn({ env: { STILL_HOME: 'public/micros/stillapp1/' } }).load();

  stillApp.component.setRefs([ref1]);

  setTimeout(() => {
    stillApp.component.ref(ref1).name.onChange((val) => {
      console.log(`REACT IS BEING NOTIFIED FROM STILL: `, val);
      setState1(val)
    });
  },100);

  const callStillJS = () => {
    stillApp.component.ref(ref1).showHideContent();
  }

  return (
    <>
      <div>
        Thsi is the react entry point component {varState1}
        <ReactRegularComponent></ReactRegularComponent>
        <st-element component="StudentComponent" showcontent="false" stRef={ref1}></st-element>
        <button onClick={ () => callStillJS()}>Show/Hide Stilljs Content</button>
      </div>
    </>
  )
}

export default App
