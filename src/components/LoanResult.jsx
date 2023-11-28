
import { useLocation } from 'react-router-dom';

const LoanResult = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const principal = searchParams.get('principal');
  const rate = searchParams.get('rate');
  const tenor = searchParams.get('tenor');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-2">Parent Page</h1>
      <h1 className="text-3xl font-semibold mb-2">Loan Result</h1>
      <p className="mb-2">Principal: {principal}</p>
      <p className="mb-2">Rate: {rate}</p>
      <p className="mb-2">Tenor: {tenor}</p>
    </div>
  </div>
  );
};

export default LoanResult;
