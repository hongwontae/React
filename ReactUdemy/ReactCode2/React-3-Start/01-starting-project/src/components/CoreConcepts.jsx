import {CORE_CONCEPTS} from '../data';
import CoreConcept from './CoreConcept';

const CoreConcepts = ()=>{


    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item, idx, arr)=>{
            return <CoreConcept key={item.title} {...item}></CoreConcept>
          })}
        </ul>
      </section>
    )
    

}

export default CoreConcepts;