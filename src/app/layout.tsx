import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import RootHeader from '@/components/RootHeader';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Sidebar } from '@/components/Sidebar';
import { SWRProvider } from './swr-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SWRProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex h-screen w-screen relative overflow-hidden">
              {/* <RootHeader /> */}
              <Sidebar />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </SWRProvider>
  );
}
