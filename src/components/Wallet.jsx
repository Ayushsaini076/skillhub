import React from "react";

const transactions = [
  { type: "Withdrawal", detail: "Withdrawal to HDFC Bank", date: "Mar 10, 2024", amount: -15000, color: "text-red-500" },
  { type: "Payment", detail: "Payment from Batch A", date: "Mar 8, 2024", amount: 12000, color: "text-green-500" },
  { type: "Payment", detail: "Payment from Batch B", date: "Mar 5, 2024", amount: 15000, color: "text-green-500" },
];

const Wallet = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {/* Available Balance */}
        <div className="bg-white border rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Available Balance</h2>
            <div className="text-3xl font-semibold mt-2">₹24,500</div>
            <div className="text-green-500 text-sm mt-1">+₹2,500 this month</div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md mt-4">Withdraw Funds</button>
        </div>

        {/* Pending Payments */}
        <div className="bg-white border rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Pending Payments</h2>
            <div className="text-3xl font-semibold mt-2">₹8,000</div>
            <div className="text-sm text-gray-500">from 4 students</div>
          </div>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-md mt-4">View Details</button>
        </div>

        {/* Total Earnings */}
        <div className="bg-white border rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-gray-500 text-sm font-medium">Total Earnings</h2>
            <div className="text-3xl font-semibold mt-2">₹1,24,500</div>
            <div className="text-sm text-gray-500">lifetime</div>
          </div>
          <button className="bg-gray-100 text-black px-4 py-2 rounded-md mt-4">View Analytics</button>
        </div>
      </div>

      {/* Transaction History and Withdraw Funds */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction History */}
        <div className="lg:col-span-2 bg-white border rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Transaction History</h2>
            <select className="border border-gray-300 px-4 py-2 rounded-md">
              <option>Last 30 days</option>
              <option>Last 60 days</option>
            </select>
          </div>
          <div>
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b last:border-none py-4"
              >
                <div>
                  <div className="text-sm font-medium">{transaction.detail}</div>
                  <div className="text-sm text-gray-500">{transaction.date}</div>
                </div>
                <div className={`font-semibold ${transaction.color}`}>
                  ₹{transaction.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Withdraw Funds */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Withdraw Funds</h2>
          <form>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-500 block mb-2">Amount</label>
              <input
                type="text"
                placeholder="Enter amount"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-500 block mb-2">Bank Account</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>HDFC Bank ****1234</option>
                <option>ICICI Bank ****5678</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-500 block mb-2">Description (Optional)</label>
              <textarea
                placeholder="Add a note"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                rows="3"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white px-4 py-2 rounded-md">
              Withdraw ₹24,500
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
