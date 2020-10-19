import Link from 'next/link';

function ContumazDestaque() {
    return (
      <Link href='/post'>
        <div id='destaque' className='animate-up'> 
          <img src="/photo.png" alt="my image" />
          <h3>Degradação ambiental e esclusão social</h3>
          <p>Os impactos socioeconômicos da destruição da natureza</p>
        </div>
      </Link>
    );    
}
  
export default ContumazDestaque;