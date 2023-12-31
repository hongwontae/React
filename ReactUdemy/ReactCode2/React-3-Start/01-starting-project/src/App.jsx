import img2 from "./assets/react-core-concepts.png";
import {CORE_CONCEPTS} from "./data"


function Header() {

  return (
    <header>
      <img src={img2} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

const CoreFunction = ({title,image, description}) => {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
        <ul>
          <CoreFunction {...CORE_CONCEPTS[0]}></CoreFunction>
          <CoreFunction {...CORE_CONCEPTS[1]}></CoreFunction>
          <CoreFunction {...CORE_CONCEPTS[2]}></CoreFunction>
          <CoreFunction {...CORE_CONCEPTS[3]}></CoreFunction>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
