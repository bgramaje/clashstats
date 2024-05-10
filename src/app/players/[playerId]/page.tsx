// 'use client'

// import Image from "next/image";
// import useSWR from 'swr'
import axios from 'axios'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from '@/components/Sidebar';

// const fetcher = (url:string) => {
//   console.log( `Bearer ${process.env.COC_API_KEY}`);

//   return axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${process.env.COC_API_KEY}`
//     }
//   });
// };

export default async function PlayerDetails({ params }: any) {
  return (
    <main className="flex flex-col items-center justify-between h-screen">
      {params.playerId}
    </main>
  );
}

