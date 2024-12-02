import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function KeywordManagement() {
  const [keywords, setKeywords] = useState([
    { id: 1, word: 'Hello', accuracy: 98, falsePositives: 2 },
    { id: 2, word: 'World', accuracy: 95, falsePositives: 5 },
    { id: 3, word: 'Computer', accuracy: 92, falsePositives: 8 },
  ]);

  const [newKeyword, setNewKeyword] = useState('');

  const handleAddKeyword = () => {
    if (newKeyword) {
      setKeywords([
        ...keywords,
        { id: keywords.length + 1, word: newKeyword, accuracy: 0, falsePositives: 0 },
      ]);
      setNewKeyword('');
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Keyword Management</h1>

      {/* Add New Keyword */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Add New Keyword</h2>
        <div className="flex">
          <input
            type="text"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new keyword"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleAddKeyword}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Keyword List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Supported Keywords</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Keyword
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Accuracy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                False Positives
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {keywords.map((keyword) => (
              <tr key={keyword.id}>
                <td className="px-6 py-4 whitespace-nowrap">{keyword.word}</td>
                <td className="px-6 py-4 whitespace-nowrap">{keyword.accuracy}%</td>
                <td className="px-6 py-4 whitespace-nowrap">{keyword.falsePositives}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Keyword Performance */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Keyword Performance</h2>
        <div className="space-y-4">
          {keywords.map((keyword) => (
            <div key={keyword.id}>
              <div className="flex justify-between mb-1">
                <span>{keyword.word}</span>
                <span>{keyword.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${keyword.accuracy}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
