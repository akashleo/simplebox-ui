// components/Dashboard.tsx

import React from 'react';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="mt-4">
        {/* Select Box 1 */}
        <label htmlFor="selectBox1" className="mr-2">
          Select Box 1:
        </label>
        <select id="selectBox1" className="px-2 py-1 bg-gray-100 rounded">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>

        {/* Select Box 2 */}
        <label htmlFor="selectBox2" className="ml-4 mr-2">
          Select Box 2:
        </label>
        <select id="selectBox2" className="px-2 py-1 bg-gray-100 rounded">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        {/* Card 1 */}
        <Card
          merchantName="Merchant 1"
          merchantType="Type 1"
          spent={100}
          received={200}
        />

        {/* Card 2 */}
        <Card
          merchantName="Merchant 2"
          merchantType="Type 2"
          spent={150}
          received={250}
        />

        {/* Card 3 */}
        <Card
          merchantName="Merchant 3"
          merchantType="Type 1"
          spent={75}
          received={100}
        />

        {/* Card 4 */}
        <Card
          merchantName="Merchant 4"
          merchantType="Type 3"
          spent={300}
          received={350}
        />
      </div>
    </div>
  );
};

export default Dashboard;
