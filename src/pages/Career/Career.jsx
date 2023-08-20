// Ícones
import { ReactComponent as WorkIcon } from '../../assets/work.svg';
import { ReactComponent as SchoolIcon } from '../../assets/school.svg';

// Dados
import timelineElements from '../../timelineElements';

// Componentes
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

// Estilos
import 'react-vertical-timeline-component/style.min.css';
import styles from './Career.module.css';

const Career = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div className={styles.timeline}>
      {/* <h1 className={styles.timeline_title}>Timeline</h1> */}
      <VerticalTimeline>
        {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton = 
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                <p id="description">{element.description}</p>
                {showButton && (<a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">{element.buttonText}</a>)}
              </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Career