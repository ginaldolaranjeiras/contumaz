
import ContumazAside from '../components/contumaz_aside';
import ContumazLatests from '../components/contumaz_latests';
import ContumazHead from '../components/contumaz_head';

function Contumaz() {
    return (
      <div>
        <ContumazHead/>
        <ContumazAside/>
        <body>
          <ContumazLatests/>
        </body>
      </div>
    );
}
export default Contumaz;