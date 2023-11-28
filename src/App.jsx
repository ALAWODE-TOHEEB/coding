// App.js
// import Re from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoanForm from './components/LoanForm';
// import LoanResult from './components/LoanResult';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanForm />} />
        {/* <Route path="/result" element={<LoanResult />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
