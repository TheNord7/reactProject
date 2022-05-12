
import './App.scss';
import Router from './pages/Router';
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './hooks/AuthProvider';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Router />
        </AuthProvider>
      </header>
    </div >
  );
}

export default App;
