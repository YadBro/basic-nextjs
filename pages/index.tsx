import Layout from '@/components/Layout';
import Image from 'next/image';



export default function Home() {
  return (
    <Layout pageTitle={'Home'}>
      <Image src={"/patrik.png"} alt="Patrik" width={200} height={200}/>
    </Layout>
  )
}
