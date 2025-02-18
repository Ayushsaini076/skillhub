import React, { useState } from 'react';

const PricingAvailability = () => {
  const [oneToOnePrice, setOneToOnePrice] = useState('');
  const [batchPrice, setBatchPrice] = useState('');
  const [batchSize, setBatchSize] = useState('');
  const [isOneToOneAvailable, setIsOneToOneAvailable] = useState(false);
  const [isBatchAvailable, setIsBatchAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="pricing_availability" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">✓</span>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">✓</span>
              <div className="h-1 w-16 bg-orange-500"></div>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">✓</span>
            </div>
          </div>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg p-8 shadow-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-6 text-neutral-800">Pricing & Availability</h3>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    One-to-One Session Price (per hour)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-neutral-500">$</span>
                    <input 
                      type="number" 
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="0.00"
                      value={oneToOnePrice}
                      onChange={(e) => setOneToOnePrice(e.target.value)}
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Batch Session Price (per student/hour)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-neutral-500">$</span>
                    <input 
                      type="number" 
                      className="w-full pl-8 pr-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="0.00"
                      value={batchPrice}
                      onChange={(e) => setBatchPrice(e.target.value)}
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-neutral-700 mb-4">
                  Session Availability
                </label>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="peer sr-only" 
                        checked={isOneToOneAvailable}
                        onChange={(e) => setIsOneToOneAvailable(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </div>
                    <span className="text-sm font-medium text-neutral-700">Available for One-to-One Sessions</span>
                  </label>

                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-orange-50 transition-colors">
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        className="peer sr-only" 
                        checked={isBatchAvailable}
                        onChange={(e) => setIsBatchAvailable(e.target.checked)}
                      />
                      <div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </div>
                    <span className="text-sm font-medium text-neutral-700">Available for Batch Sessions</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Maximum Batch Size
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500" 
                  value={batchSize}
                  onChange={(e) => setBatchSize(e.target.value)}
                  disabled={!isBatchAvailable}
                >
                  <option value="">Select maximum students per batch</option>
                  <option value="5">Up to 5 students</option>
                  <option value="10">Up to 10 students</option>
                  <option value="15">Up to 15 students</option>
                  <option value="20">Up to 20 students</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button type="button" className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
                  Back
                </button>
                <button type="submit" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PricingAvailability;