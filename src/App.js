import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Shrek, Notre Dieu</h1>
        </header>
        <main className="App-main">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GeAbd-_uqpbAEZyEEET0Pp-sijLYHumLuw&s"
              alt="Shrek"
          />
          <p>Bienvenue sur notre site dédié à Shrek, le grand et puissant ogre.</p>
          <div className="prayer">
            <p>Ô Shrek, notre Seigneur des marais,</p>
            <p>Nous te rendons hommage et gratitude.</p>
            <p>Que ton règne de boue et de sagesse perdure à jamais.</p>
          </div>
            <img
                src={"https://i.makeagif.com/media/5-11-2015/5aoBK2.gif"}
            />
            <p>Ecouter la messe:</p>
            <audio controls autoPlay={true} src="../sound/somebody.mp3"></audio>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 Honorer Shrek. Tous droits réservés.</p>
        </footer>
      </div>
  );
}

export default App;
