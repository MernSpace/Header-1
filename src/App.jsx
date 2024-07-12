import React, {useEffect, useState} from 'react';
import Background from './components/background/Background';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
    useEffect(() => {
        setInterval(()=>{
            setHeroCount((count)=>{return count===2?0:count+1})
        },3000)
    }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Nav/>
      <Hero
      palyStatus={playStatus}
      setPlayStatus={setPlayStatus}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      heroData={heroData[heroCount]}
      ></Hero>
    </div>
  );
};

export default App;
