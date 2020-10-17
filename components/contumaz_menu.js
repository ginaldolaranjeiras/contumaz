import Link from 'next/link';

function ContumazMenu () {
    return (
        <div id='contumaz-menu' className='animate-left'>
          <span>
            <Link  href="/">
              <a>Contato</a>
            </Link>
          </span>
          <hr/>
          <span>
            <Link  href="/">
              <a>Sobre o projeto</a>
            </Link>
          </span>
          <hr/>
          <span>
            <Link  href="/latests">
              <a>Últimas</a>
            </Link>
          </span>
          <hr/>
          <span>
            <Link  href="/">
              <a>Destaques</a>
            </Link>
          </span>
      </div>
    );
}

export default ContumazMenu;