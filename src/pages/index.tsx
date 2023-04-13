import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';

export default function Home() {
  return (
    <div>
      <main>

        <Image 
          src={logoImg}
          alt="NLW Copa"
        />

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

      </main>

      <Image 
        src={appPreviewImg} 
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa" 
      />
    </div>
  )
}
