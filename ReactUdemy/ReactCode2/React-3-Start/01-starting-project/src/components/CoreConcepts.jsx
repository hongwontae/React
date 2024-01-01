import {CORE_CONCEPTS} from '../data';
import CoreConcept from './CoreConcept';

const CoreConcepts = ()=>{

    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item,idx)=>{
            return <CoreConcept key={idx} {...item}></CoreConcept>
          })}
        </ul>
      </section>
    )

}

export default CoreConcepts;