import React from 'react';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const SponsorPage: React.FC = () => {
  // Sample hardcoded sponsors data
  const sponsors = [
    {
      id: '1',
      name: 'Google',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png',
      description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
      website: 'https://www.google.com',
    },
    {
      id: '2',
      name: 'Microsoft',
      logoUrl: 'https://blogs.microsoft.com/wp-content/uploads/prod/2023/01/PNG-openai-microsoft_960x540.png',
      description: 'Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
      website: 'https://www.microsoft.com',
    },
    {
      id: '3',
      name: 'Tata',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1024px-Tata_logo.svg.png',
      description: 'Tata Group is an Indian multinational conglomerate holding company headquartered in Mumbai, Maharashtra, India. It was founded in 1868 by Jamsetji Tata and gained international recognition after purchasing several global companies.',
      website: 'https://www.tata.com',
    },
    {
      id: '4',
      name: 'Aramco',
      logoUrl: 'https://logolook.net/wp-content/uploads/2022/11/Saudi-Aramco-Logo.png',
      description: 'Saudi Aramco, officially the Saudi Arabian Oil Company, is a Saudi Arabian public petroleum and natural gas company based in Dhahran, Saudi Arabia. It is one of the largest companies in the world by revenue.',
      website: 'https://www.aramco.com',
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 style={{ color: '#C53683' }">Our Sponsors</h1>
      <div className="max-w-screen-sm w-full">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="bg-white p-4 rounded shadow mb-4 flex flex-col items-center">
            <img src={sponsor.logoUrl} alt={sponsor.name} className="max-w-xs w-full h-auto mb-4 rounded" />
            <h2 className="text-xl font-semibold">
              <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="text-black">{sponsor.name}</a>
            </h2>
            <p className="text-gray-600">{sponsor.description}</p>
          </div>
        ))}
          </div>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/sponsor/manageSponsor">
              Manage Sponsor
            </Link>
          </Button>
    </div>
  );
};

export default SponsorPage;
