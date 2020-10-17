import ContumazHead from '../components/contumaz_head';
import ContumazMenu from '../components/contumaz_menu';
import ContumazHeader from '../components/contumaz_header';
import ContumazAside from '../components/contumaz_aside';
import ContumazDestaques from '../components/contumaz_destaques';

function Contumaz() {
    return (
      <div>
        <ContumazHead/>        
        <ContumazMenu/>
        <ContumazAside/>
        <body>
          <ContumazHeader/>
          <ContumazDestaques/>           
        </body>
      </div>
    );
}
export default Contumaz;