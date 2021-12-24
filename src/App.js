import Header from "./components/header";
import './app.scss';
import Headline from "./components/headline";

const tempArr = [{
  fName: 'Job',
  lName: 'Bloggs',
  email: 'job@gmail.com',
  age: 40,
  onLineStatus: true
}]
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click on the button to render posts" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
