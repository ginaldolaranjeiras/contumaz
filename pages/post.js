import ContumazHead from '../components/contumaz_head';
import ContumazAside from '../components/contumaz_aside';

function Post() {
    return (
      <div>
        <ContumazHead/>
        <body>
          <ContumazAside/>
          <div id='post-container' className='animate-appear'>
            <h1 id='post-title'>
              Degradação ambiental e exclusão  social
            </h1>
            <h2 id='post-subtitle'>
              Os impactos socioeconômicos da destruição da natureza
            </h2>
            <img id='post-image' src="/photo.png" alt="Imagem do post" />
            <p id='post-date'>
              Brasil, 20 de outubro de 2020.
            </p>
            <p id='post-text'>
            O aspecto econômico-social mais importante do desenvolvimento sustentável é a democratização do acesso aos recursos naturais como meios de produção. Embora a degradação ambiental torne insuscetível a longo prazo qualquer atividade econômica que dependa das fontes de recursos não renováveis, sua consequência socioeconômica imediata é a eliminação da autonomia dos grupos mais vulneráveis.

O capital, tradicionalmente, ignora a preservação dos recursos naturais em busca do lucro urgente. Consequentemente, a degradação dos meios naturais coletivos, impossibilita a subsistência autônoma daqueles que antes retiravam seu sustento dos ecossistemas naturais. Com efeito, esses grupos sociais ingressam no modelo econômico capitalista, vendendo sua força de trabalho barata para o acúmulo de capital dos já detentores dos meios de produção tradicionais.

No Brasil, percebe-se a intimidação de grupos que tradicionalmente ocupam os espaços em que o aproveitamento dos recursos naturais dá-se de maneira coletiva e autossustentável. Indígenas, quilombolas, comunidades tradicionais são discriminados e violentados por representarem um obstáculo ao avanço da demanda capitalista. Em especial aqui, em razão das bases econômicas estruturadas no setor primário da economia e pela pressão do avanço das fronteiras do setor agropecuário, embora ainda exista campo para o desenvolvimento da agricultura por ganho de produtividade e aproveitamento dos solos disponíveis que sofrem risco de desertificação.

Há ainda, a questão da distribuição do solo, demanda dos movimentos sociais pela reforma agrária. Outro movimento brasileiro que evidencia a luta de classes pela autossuficiência perante o avanço dos grandes proprietários de capital (terra) em busca dos recursos naturais, é o movimento seringueiro no Acre a partir da década de 70, cuja principal liderança foi o seringueiro Chico Mendes.

No plano mundial, estudos sobre o clima têm destacado o impacto das mudanças climáticas, provocadas pela ação homem, a partir da Revolução Industrial, sobre as populações economicamente mais pobres. Segundo Relatório do Banco Mundial (2015), as mudanças climáticas e seus desdobramentos, podem deixar mais de 100 milhões de pessoas na pobreza até o ano de 2030. Posto que, a hipossuficiência econômica deixa os mais pobres sujeitos aos efeitos negativos da ação humana sobre o clima.

Se, de um lado, a atividade econômica insustentável gera a exploração econômica dos grupos autônomos por retirar-lhes o usufruto dos bens comuns, de outro, os resultados catastróficos da atividade econômica poluidora e degradante, impinge seus reflexos mais severos sobre esses anteriormente explorados. Portanto, os reflexos do desenvolvimento em bases insustentáveis aumenta a desigualdades, porquanto, gera efeitos negativos às minorias sociais na entrada (input) e na saída (output) do mesmo sistema.
            </p>
            <div id='post-author'>
              <div id='author-image'>
                <container>
                <img src='/gino.png' alt='Imagem de perfil'/>
                </container>
              </div>
              <div id='author-detail'>
                <h3>Ginaldo Laranjeiras Jr</h3>
                <h4>Desenvolvedor de software e advogado</h4>
              </div>
            </div>

          </div>
        </body>
      </div>
    );
}
export default Post;