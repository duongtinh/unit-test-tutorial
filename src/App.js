import Header from "./components/header";
import './app.scss';
import Headline from "./components/headline";
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click on the button to render posts" />
      </section>
    </div>
  );
}

export default App;
