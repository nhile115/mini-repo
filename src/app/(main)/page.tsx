import { Metadata } from 'next';

export default async function Home() {
  return <div> hello</div>;
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Home', description: 'Home Description' };
}
