
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import './App.css';
import GeneralLayout from './layouts/general';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="landing/*" element={<GeneralLayout />} />
        <Route path="/" element={<Navigate to="/landing" replace />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
