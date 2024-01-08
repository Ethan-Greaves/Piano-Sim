import Image from 'next/image'
import Key from '@/components/key/key'
import Note from '@/components/note/note'
import Scale from '@/components/scale/scale'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-2xl pb-8 align-left'>C Major Scale</h1>
      <Scale />
    </main>
  )
}
