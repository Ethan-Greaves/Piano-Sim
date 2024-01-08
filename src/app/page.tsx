import Image from 'next/image'
import Key from '@/components/key/key'
import SoundButton from '@/components/soundButton/soundButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SoundButton audioFile='/audio/sample.mp3' />
    </main>
  )
}
