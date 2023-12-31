import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("");

  const clickHandler = (selectedButton) => {
    setTopic(selectedButton);
  };

  let tabContent = <p>Choose the topic you want</p>;

  if (topic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[topic].title}</h3>
        <p>{EXAMPLES[topic].description}</p>
        <pre>
          <code>{EXAMPLES[topic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>{
              return <CoreConcept {...item}></CoreConcept>
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={topic === "components"}
              onSelect={() => clickHandler("components")}
            >
              Componets
            </TabButton>
            <TabButton
              isSelected={topic === "jsx"}
              onSelect={() => clickHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topic === "props"}
              onSelect={() => clickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topic === "state"}
              onSelect={() => clickHandler("state")}
            >
              State
            </TabButton>
          </menu>
          {/* {!topic ? (
            <p>Choose the topic you want</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[topic].title}</h3>
              <p>{EXAMPLES[topic].description}</p>
              <pre>
                <code>{EXAMPLES[topic].code}</code>
              </pre>
            </div>
          )} */}
          {/* {!topic && <p>Choose your think</p>}
          {topic && <div id="tab-content">
              <h3>{EXAMPLES[topic].title}</h3>
              <p>{EXAMPLES[topic].description}</p>
              <pre>
                <code>{EXAMPLES[topic].code}</code>
              </pre>
            </div>} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
