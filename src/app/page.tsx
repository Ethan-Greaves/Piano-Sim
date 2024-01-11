"use client";
import Scale from '@/components/scale/scale'
import '../../resources/scss/style.scss';
import { AudioProvider } from '@/context/audioContext.context';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-800">
      <h1 className='text-2xl pb-8 align-left'>Piano</h1>
      <AudioProvider>
        <Scale />
      </AudioProvider>
    </main>
  )
}
