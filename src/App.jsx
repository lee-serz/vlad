import "./App.css";
import Main from "./assets/components/Main/Main";
import Posts from "./assets/components/Posts/Posts";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Main></Main>
        <Posts />
      </div>
    </div>
  );
}

export default App;
