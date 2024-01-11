"use client";
import Scale from '@/components/scale/scale'
import '../../resources/scss/style.scss';

export default function Home() {

  const audioContext = new AudioContext();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-800">
      <h1 className='text-2xl pb-8 align-left'>C Major Scale</h1>
      <Scale ac={audioContext}/>
    </main>
  )
}
