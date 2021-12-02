import React from 'react';
import logo from './logo.svg';
import './App.css';
import Flags from 'country-flag-icons/react/1x1'
import Container from 'react-bootstrap/Container'
import data from './lang/data.json';
import CardContent from "./pages/CardContent";

import 'bootstrap/dist/css/bootstrap.min.css';

const LanguagueConfig = (action, lang=false) => {
  
  const localStorageKey = "__language_saved_code__";

  if(action === "set"){

    return  window.localStorage.setItem(localStorageKey, lang);

  }else if( action === "get"){

    return window.localStorage.getItem(localStorageKey);
  }

}


function App() {

  const [contentData, setContentData] = React.useState([]);

  React.useEffect(() => {

    let defaultLang = LanguagueConfig('get') || "en";

    let languageData = data.find(item => item.language === defaultLang);

    setContentData(languageData.content)

  },[])

    const changeLanguage = (lang) => {

        if(lang != LanguagueConfig('get')){

          console.log(lang)

          let languageData = data.find(item => item.language === lang);

          setContentData(languageData.content);

          LanguagueConfig('set', lang)

        }

    }

  return (
    <div className="App" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/back.jpg)`,
  backgroundRepeat: 'round'
    }}>
      <header>
        <center><img className="logo" src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} 
        alt="logo" /></center>
      </header>
    <Container>
        <CardContent data={contentData}/>
        <div className="flag-div">
        <Flags.FR title="France" onClick={() => changeLanguage('fr')} className="flag-icon" />
        <></>
        <Flags.US title="United States" onClick={() => changeLanguage('en')}  className="flag-icon" />
        </div>
    </Container>

    </div>
  );
}

export default App;
