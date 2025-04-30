import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (    
    <div className="App max-w-screen-xl mx-auto">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
