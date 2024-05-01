import '../App.css';
import MainContentAside from './MainContentAside';

// eslint-disable-next-line react/prop-types
function MainContent({id, title,change}) {
  return (
    <>
      <main id={id}>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          atque, necessitatibus dicta laudantium pariatur molestias suscipit ut
          repellendus magnam voluptates asperiores voluptatum omnis consequuntur
          delectus? Placeat, tempora voluptate! Nostrum, maiores?
        </div>
      </main>

      <MainContentAside title={title} change={change} Container="div"></MainContentAside>
      
    </>
  );
}

export default MainContent;
