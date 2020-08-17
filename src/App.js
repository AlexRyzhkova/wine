import React, { useEffect } from "react";
import "./App.css";
import fetchWine from "./api/wine";
import List from "./components/List";
import ListItem from "./components/ListItem";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [allWines, setAllWines] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");

  async function getWines() {
    const newWines = await fetchWine();
    setAllWines(newWines);
    setIsLoading(false);
  }

  useEffect(() => {
    getWines();
  }, []);

  if (isLoading || allWines === null) {
    return <LoadingScreen />;
  }
  const filteredWines = allWines.filter((wine) => {
    return wine.wine.toLowerCase().match(query.toLowerCase());
  });

  return (
    <div className="app">
      <header className="header">
        <h2>Wine list</h2>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="header__input"
          placeholder="Search for your favorite wine"
        />
      </header>

      <main>
        <List>
          {filteredWines?.map((wine) => {
            return (
              <ListItem key={wine.lwin} href={wine.href}>
                {wine.wine}
              </ListItem>
            );
          })}
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
