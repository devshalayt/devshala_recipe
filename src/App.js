import React,{useEffect,useState} from 'react';
import './App.scss';
import Tabs from './components/Tabs';
import RecipeLists from './components/RecipeLists';
import Header from './components/Header';

function App() {
  const [loader,setLoader] = useState(false);

    return (
      <div className="App">
      <Header />
      <Tabs loader={loader} setLoader={setLoader} />
      <RecipeLists loader={loader} setLoader={setLoader} />
      {loader && <div className='loader'>
        <div className="spinner"></div>
      </div>}
    </div>
  );
}

export default App;

