import Image from 'next/image'
import Key from '@/components/key/key'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Key note="C8"/>
    </main>
  )
}
