import { useState } from "react";

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenor, setTenor] = useState("");
  const [monthlyInstallment, setMonthlyInstallment] = useState(null);

  
  const calculateEMI = (principal, rate, tenor) => {
    const monthlyRate = (rate / 12) / 100;
    const termInMonths = tenor;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) /
      (Math.pow(1 + monthlyRate, termInMonths) - 1);

    return emi;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // To Validate inputs
    if (!principal || !rate || !tenor) {
      alert('Please fill in all fields');
      return;
    }

    // To Calculate monthly installment
    const emi = calculateEMI(parseFloat(principal), parseFloat(rate), parseInt(tenor, 10));

    setMonthlyInstallment(emi.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Principal($):
          <input
            className="form-input mt-1 block w-full"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            required
          />
        </label>
        <label className="block mb-2">
          Rate (%):
          <input
            className="form-input mt-1 block w-full"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </label>
        <label className="block mb-2">
          Tenor (months):
          <input
            className="form-input mt-1 block w-full"
            type="number"
            value={tenor}
            onChange={(e) => setTenor(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Calculate
        </button>
      </form>

      {monthlyInstallment !== null && (
        <div className="mt-4">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-3xl font-semibold mb-2">Parent Page</h1>
            <h1 className="text-3xl font-semibold mb-2">Loan Result</h1>
            <p className="mb-2">Principal: ${principal}</p>
            <p className="mb-2">Rate: {rate}%</p>
            <p className="mb-2">Tenor: {tenor} months</p>
          </div>
          <h2 className="text-xl font-semibold">Monthly Installment:</h2>
          <p className="text-lg">{`$${monthlyInstallment} per month`}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
