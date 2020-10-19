import Link from 'next/link';

function ContumazLatest() {
    return (
      <Link href='/post'>
        <div id='latest' className='animate-up'> 
          <img src="/photo.png" alt="my image" />
          <div id='latest-text'>
              <h3>Degradação ambiental e esclusão social</h3>
              <p>Os impactos socioeconômicos da destruição da natureza</p>

          </div>
        </div>
      </Link>

    );    
}
  
export default ContumazLatest;