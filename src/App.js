import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-green-600 text-white py-4">
        <h1 className="text-4xl font-bold text-center">Shrek, Notre Dieu</h1>
      </header>
      <main className="p-6">
        <img
          className="mx-auto my-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GeAbd-_uqpbAEZyEEET0Pp-sijLYHumLuw&s"
          alt="Shrek"
        />

        <p className="text-lg text-center mb-4">Bienvenue sur notre site dédié à Shrek, le grand et puissant ogre.</p>
        <div className="prayer bg-green-100 p-4 rounded-lg shadow-md">
          <p className="text-xl mb-2">Ô Shrek, notre Seigneur des marais,</p>
          <p className="mb-2">Nous te rendons hommage et gratitude.</p>
          <p>Que ton règne de boue et de sagesse perdure à jamais.</p>
        </div>
        <img
          className="mx-auto my-4"
          src={"https://i.makeagif.com/media/5-11-2015/5aoBK2.gif"}
        />
        <p className="text-center">Ecouter la messe:</p>
        <audio className="mx-auto block" controls autoPlay={true} src="../sound/somebody.mp3"></audio>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Honorer Shrek. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;