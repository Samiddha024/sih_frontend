
import { ArrowUp, ArrowDown } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* System Overview Panel */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">System Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Accuracy</p>
            <p className="text-2xl font-bold">95%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Precision</p>
            <p className="text-2xl font-bold">92%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Recall</p>
            <p className="text-2xl font-bold">97%</p>
          </div>
        </div>
      </div>
      
      {/* Real-time Keyword Detection */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Real-time Keyword Detection</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Hello</span>
            <span className="text-green-500">98% confidence</span>
          </li>
          <li className="flex justify-between items-center">
            <span>World</span>
            <span className="text-yellow-500">85% confidence</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Computer</span>
            <span className="text-red-500">62% confidence</span>
          </li>
        </ul>
      </div>
      
      {/* Performance Metrics */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>Latency</span>
              <span>50ms</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Throughput</span>
              <span>1000 req/s</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Alerts Panel */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>
        <ul className="space-y-2">
          <li className="flex items-center text-yellow-600">
            <ArrowUp className="mr-2 h-5 w-5" />
            <span>Latency increased by 10% in the last hour</span>
          </li>
          <li className="flex items-center text-green-600">
            <ArrowDown className="mr-2 h-5 w-5" />
            <span>False positive rate decreased by 5% today</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
