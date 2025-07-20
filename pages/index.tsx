import { Quicksand, Oxygen } from 'next/font/google';
import Layout from '@/components/layouts/Layout';
import Hero from '@/components/Hero';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  display: 'swap',
});

const oxygen = Oxygen({
  variable: '--font-oxygen',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
});

export default function Home() {
  return (
    <div className={`${quicksand.className} ${oxygen.className}`}>
      <Layout>
        <Hero />
      </Layout>
    </div>
  );
}
