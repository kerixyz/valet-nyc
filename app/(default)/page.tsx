export const metadata = {
  title: 'Valet NYC',
  description: 'Five Star Hotel Style Service In Your Residence In New York City',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Features />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
