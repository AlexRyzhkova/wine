import React, { useEffect } from "react";
import "./App.css";
import fetchWine from "./api/wine";
import List from "./components/List";
import ListItem from "./components/ListItem";
import LoadingScreen from "./components/LoadingScree";

function App() {
  const [allWines, setAllWines] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

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

  return (
    <div className="App">
      <header>Wine list</header>
      <main>
        <List>
          {allWines?.map((wine) => {
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
