import React from 'react';
import Home from './pages/home'
import background from './assets/circle-blues.png'


const styles ={
    background: {
        backgroundImage: `url(${background})` //Background pattern from Toptal Subtle Patterns 
      }
}

function App() {
  return (
    <div style={styles.background} className="App">
      <Home />
    </div>
  );
}

export default App;
