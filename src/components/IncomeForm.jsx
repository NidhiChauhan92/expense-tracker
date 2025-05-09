import React, { useState } from "react";
import ReactModal from "react-modal";

function IncomeForm({
  showIncomeForm,
  setShowIncomeForm,
  handleIncomeFormSubmit,
}) {
  const [income, setIncome] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleIncomeFormSubmit(income);
  };

  return (
    <ReactModal
      isOpen={showIncomeForm}
      onRequestClose={() => setShowIncomeForm(false)}
      onAfterClose={() => setShowIncomeForm(false)}
      className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-xl w-[500px] mx-auto outline-none"
      overlayClassName="fixed inset-0 bg-gray-200 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="text-black w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Add Balance</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Income Amount"
            className="border border-gray-300 rounded-md px-4 py-2 shadow-sm"
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              setIncome(val);
            }}
          />

          <div className="flex justify-between gap-4 mt-4">
            <button
              type="submit"
              className="bg-yellow-400 text-white px-4 py-2 rounded-md shadow w-full"
            >
              Add Balance
            </button>
            <button
              type="button"
              onClick={() => setShowIncomeForm(false)}
              className="bg-gray-200 text-black px-4 py-2 rounded-md shadow w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
}

export default IncomeForm;