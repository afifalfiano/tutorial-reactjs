import DaftarBelajar from './DaftarBelajar';

function App() {
  const data = [
    {
      id: 1,
      topic: 'React Javascript'
    },
    {
      id: 2,
      topic: 'Next Javascript'
    },
    {
      id: 3,
      topic: 'Nest Javascript'
    }
  ]
  return (
    <div>
      <h1>List Pada ReactJs</h1>
      <DaftarBelajar data={data}/>
    </div>
  );
}

export default App;
