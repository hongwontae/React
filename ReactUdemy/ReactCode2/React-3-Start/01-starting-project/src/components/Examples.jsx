import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [topic, setTopic] = useState("");

  const clickHandler = (selectedButton) => {

    setTopic(selectedButton)
  };

  let tabContent = <p>Choose the topic you want</p>;

  if (topic) {
    tabContent = (
      <div id="tab-content" >
        <h3>{EXAMPLES[topic].title}</h3>
        <p>{EXAMPLES[topic].description}</p>
        <pre>
          <code>{EXAMPLES[topic].code}</code>
        </pre>
      </div>
    );
  }


  return (
    <Section title="Examples" id="examples">
      <Tabs
      ButtonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={topic === "components"}
              onClick={()=>{
                return clickHandler('components')
              }}
            >
              Componets
            </TabButton>
            <TabButton
              isSelected={topic === "jsx"}
              onClick={() => clickHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topic === "props"}
              onClick={() => clickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topic === "state"}
              onClick={() => clickHandler("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
