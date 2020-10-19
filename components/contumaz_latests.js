import ContumazDestaque from '../components/destaque';
import ContumazLatest from '../components/latest';


function ContumazLatests () {
    return(        
        <div id='latests'>
            <div id='latests-container'>
                <div id='latests-grid'>
                    <ContumazDestaque id='maior'/>
                    <div id='latests-column'>
                        <ContumazLatest/>
                        <ContumazLatest />
                        <ContumazLatest />              
                    </div>
                </div>                          
            </div>
            <div id='see-more' className='animate-left'>
                <button onClick=''><h3>Ver Mais</h3></button>
            </div>      
            
        </div>
    );
}

export default ContumazLatests;
