import { useState } from "react";
import CharacterContainer from "./Components/CharacterContainer";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=3"
    );
    const frase = await api.json();
    setCharacters(frase);
  };

  return (
    <div className="App">
      <Container>
        <Header />
        {!characters ? (
          <Welcome reqApi={reqApi} />
        ) : (
          <CharacterContainer characters={characters} reqApi={reqApi} />
        )}
      </Container>
    </div>
  );
}

export default App;
