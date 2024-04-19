'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const BudgetHome: React.FC = () => {

  const [eventName, setEventName] = useState('');
 
  const [eventBudget, setEventBudget] = useState('');

  // const eventData = [
  //   { eventName: 'Event 1', allocatedBudget: '1000', availableBudget: '800' },
  //   { eventName: 'Event 2', allocatedBudget: '2000', availableBudget: '1500' },
  //   { eventName: 'Event 3', allocatedBudget: '1500', availableBudget: '1000' },
  // ];

  const [eventData, setEventData] = useState<{ eventName: string; allocatedBudget: string; availableBudget: string }[]>([]);

  // Function to add a new event
  const addEvent = () => {
    if (eventName && eventBudget) {
      const newEvent = { eventName, allocatedBudget: eventBudget, availableBudget: eventBudget };
      setEventData([...eventData, newEvent]);
      setEventName('');
      setEventBudget('');
    }
  };
 
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-lg font-semibold mb-4'>Allocated Budget for Each Event</h2>
      <table className="table-auto border-collapse border border-gray-800 w-full">
        <thead>
          <tr>
            <th className="border border-gray-800 px-4 py-2">Event Name</th>
            <th className="border border-gray-800 px-4 py-2">Allocated Budget</th>
            <th className="border border-gray-800 px-4 py-2">Available Budget</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((event, index) => (
            <tr key={index}>
              
              <td className="border border-gray-800 px-4 py-2"><Link href={"/budget/manageBudget"}>{event.eventName} </Link></td>
              <td className="border border-gray-800 px-4 py-2">${event.allocatedBudget}</td>
              <td className="border border-gray-800 px-4 py-2">${event.availableBudget}</td>
                          
            </tr>

          ))}
        </tbody>
      </table>
      <div className='bg-white rounded shadow p-4'>
        <h2 className='text-lg font-semibold mb-2'>Event Name:</h2>
        <Input
          type="text"
          className='border border-gray-300 rounded p-2 mb-4'
          placeholder='event event name (HackathonX 2024)'
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <h2 className='text-lg font-semibold mb-2'>Event Budget:</h2>
        <Input
          type='text'
          className='border corder-gray-300 rounded p-2 mb-4'
          placeholder='enter budget amount (10000)'
          value={eventBudget}
          onChange={(e) => setEventBudget(e.target.value)}
        />
         <Button onClick={addEvent} className='button border rounded p-4 mt-3'>
        Add Event
        </Button>
      </div>
     
    </div>
  )
}

export default BudgetHome
