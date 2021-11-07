import './App.css';
import Belajar from './Belajar';

function App() {
  const data = ["Belajar Component & State", "Belajar React Portal", "Belajar React Fragment"];

  return (
    <div>
      <h1>Belajar Component & Props</h1>
      <Belajar dataProps={data} title={"Belajar React"} description={"Manfaat mempelajari react adalah"} />
    </div>
  );
}

export default App;
