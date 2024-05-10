/* eslint-disable camelcase */

'use client';

// import Image from "next/image";
// import useSWR from 'swr'
import axios from 'axios';
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from '@/components/ui/resizable';
// import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidebar } from '@/components/Sidebar';
import { IBM_Plex_Mono } from 'next/font/google';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';

const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['100', '700', '600', '500', '400'] });

export default function Home() {
  // const { data, error, isLoading } = useSWR('https://api.clashofclans.com/v1/players/%23QQQRVLV  ', fetcher)
  const { data: locations, error: errorLocations } = useSWR('/api/locations/32000005/rankings/players', fetcher);

  if (errorLocations) throw new Error(locations);

  return (
    <main className="flex flex-col h-screen">
      <div className="p-4">
        <p className={`${ibm.className} text-2xl font-semibold`}>International Rankings</p>
        {JSON.stringify(locations)}
      </div>
    </main>
  );
}

// export async function getStaticProps() {
//   try {
//     const response = await axios.get('http://localhost:3001/players/%23QQQRVLV', {
//       headers: {
//         Authorization: `Bearer ${process.env.COC_API_KEY}`
//       }
//     });
//     console.log(response);

//     const playerData = response.data;
//     return { props: { playerData } };
//   } catch (error) {
//     console.error("Error fetching player data:", error);
//     return { props: { playerData: null } };
//   }
// }

