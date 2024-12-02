import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import TrainingAndTesting from './components/TrainingAndTesting';
import KeywordManagement from './components/KeywordManagement';
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />}></Route>
        <Route path="/Layout" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="training" element={<TrainingAndTesting />} />
          <Route path="keywords" element={<KeywordManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
