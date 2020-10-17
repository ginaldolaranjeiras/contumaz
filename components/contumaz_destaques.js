import ContumazDestaque from '../components/destaque';

function ContumazDestaques () {
    return(
        <div id='destaques'>
            <div id='group-description'>Destaques</div>
            <div id='grid-destaques'>
                <div>
                    <ContumazDestaque/>
                </div>
                <div>
                    <ContumazDestaque/>                
                </div>
                <div>
                    <ContumazDestaque/>                
                </div>
            </div>
      </div>
    );
}

export default ContumazDestaques;