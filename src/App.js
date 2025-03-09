import Header from './components/Header';
import './App.css';
import Blocks from './components/Blocks';

function App() {

  const user = {
    firstName: "Roman",
    lastName: "Shukshin"
  };

  return (
    <div >
      <Header />
      <main>
        <section className="greeting">
          <h2>Hello, {user.firstName}</h2>
        </section>
        <Blocks />
      </main>
    </div>
  );
}

export default App;
