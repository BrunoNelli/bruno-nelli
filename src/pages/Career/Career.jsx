import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import IconVrBeneficios from '../../components/IconVrBeneficios';
import IconIbm from '../../components/IconIbm';
import IconYaman from '../../components/IconYaman';
import IconTechMahindra from '../../components/IconTechMahindra';

const Career = () => {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - Atual"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IconVrBeneficios />}
  >
    <h3 className="vertical-timeline-element-title">Especialista de Sistemas</h3>
    <h4 className="vertical-timeline-element-subtitle">São Paulo, SP</h4>
    <p>
      Software Developer Engineer in Test
    </p>
    <h5>Especialista em sistemas com experiência em qualidade de software. Meu objetivo é ferramentar e capacitar analistas de qualidade, trabalhando com automação de testes utilizando linguagem de programação Ruby para testes de backend, Cypress para testes de frontend e Appium para testes mobile. Também realizo manutenção de pipelines do Jenkins em Groovy. Meu papel também envolve a identificação e implementação de novos frameworks e ferramentas de automação de testes funcionais e de performance, carga e stress em nossa empresa. Além disso, minha missão é guiar os analistas de qualidade em quaisquer dúvidas relacionadas à automação de testes.</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IconIbm />}
  >
    <h3 className="vertical-timeline-element-title">Analista de Qualidade Sênior</h3>
    <h4 className="vertical-timeline-element-subtitle">São Paulo, Brasil</h4>
    <p>
      Testes de Carga, Performance e Stress
    </p>
    <h5>Avaliar demandas de alto volume de usuários, desenvolvendo scripts em Loadrunner e análise via Dynatrace</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IconYaman />}
  >
    <h3 className="vertical-timeline-element-title">Analista de Qualidade Pleno</h3>
    <h4 className="vertical-timeline-element-subtitle">São Paulo, Brasil</h4>
    <p>
      Testes funcionais de API e UI
    </p>
    <h5>Analista de Qualidade dentro de Squad, responsável por automação de testes em Ruby para APIs e UI</h5>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017 - 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IconTechMahindra />}
  >
    <h3 className="vertical-timeline-element-title">Analista de Testes Júnior</h3>
    <h4 className="vertical-timeline-element-subtitle">São Paulo, Brasil</h4>
    <p>
      Analista de testes funcionais e regressão
    </p>
    <h5>Realização de testes manuais, utilizando SQL, Ferramentas internas do Cliente e QC ALM</h5>
  </VerticalTimelineElement>
</VerticalTimeline>
  )
}

export default Career