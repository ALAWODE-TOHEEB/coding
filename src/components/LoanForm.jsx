
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoanForm = () => {
  const navigate = useNavigate();
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenor, setTenor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //  function to navigate to the result page with query parameters
    navigate(`/result?principal=${principal}&rate=${rate}&tenor=${tenor}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6">Loan Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Principal($):</label>
            <input
              type="text"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Rate(%):</label>
            <input
              type="text"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Tenor(Month):</label>
            <input
              type="text"
              value={tenor}
              onChange={(e) => setTenor(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;
