import { AddContact, ListContact } from './components';

function App() {

  return (
    <div style={{padding: '50px'}}>
      <h2>App Contact</h2>
      <hr />
      <ListContact/>
      <hr />
      <AddContact/>
      <hr />
    </div>
  );
}

export default App;
