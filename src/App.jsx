import SearchUser from './components/SearchUser';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Buscador de Usuarios de GitHub</h1>
      <SearchUser />
      <UserProfile />
    </div>
  );
}

export default App;
