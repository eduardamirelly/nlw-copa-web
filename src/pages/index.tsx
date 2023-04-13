import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png';

export default function Home() {
  return (
    <div>
      <main></main>

      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa" 
      />
    </div>
  )
}
