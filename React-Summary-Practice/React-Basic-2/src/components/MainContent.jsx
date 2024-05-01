import '../App.css';
import MainContentAside from './MainContentAside';
import Dummy from '../components/Dummy';

function MainContent({...props}) {
  return (
    <>
      <main {...props}>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          atque, necessitatibus dicta laudantium pariatur molestias suscipit ut
          repellendus magnam voluptates asperiores voluptatum omnis consequuntur
          delectus? Placeat, tempora voluptate! Nostrum, maiores?
        </div>
      </main>

      <MainContentAside Container="div"></MainContentAside>
      <MainContentAside Container={Dummy}></MainContentAside>
      
    </>
  );
}

export default MainContent;
