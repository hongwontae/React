import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormationDrop from "../../components/formation/FormationDrop";
import { useCallback, useState } from "react";

const startingMember = [
  {
    id: "sa",
    top: 60,
    left: 5,
    title: "Alisson Becker",
  },
  {
    id: "sb",
    top: 60,
    left: 65,
    title: "Wataru Endo",
  },
  {
    id: "sc",
    top: 125,
    left: 5,
    title: "van Dijk",
  },
  {
    id: "sd",
    top: 125,
    left: 65,
    title: "Ibrahima Konaté",
  },
  {
    id: "se",
    top: 190,
    left: 5,
    title: "Luis Díaz",
  },
  {
    id: "sf",
    top: 190,
    left: 65,
    title: "Szoboszlai",
  },
  {
    id: "si",
    top: 255,
    left: 5,
    title: "Darwin Núñez",
  },
  {
    id: "sj",
    top: 255,
    left: 65,
    title: "Mac Allister",
  },
  {
    id: "sk",
    top: 320,
    left: 5,
    title: "Mohamed Salah",
  },
  {
    id: "sl",
    top: 320,
    left: 65,
    title: "Andy Robertson",
  },
  {
    id: "sm",
    top: 385,
    left: 5,
    title: "Alexander-Arnold",
  },
];

const subMember = [
  {
    id: "13",
    top: 60,
    left: 5,
    title: "Adrián San Miguel",
  },
  {
    id: "17",
    top: 60,
    left: 65,
    title: "Curtis Jones",
  },
  {
    id: "l8",
    top: 125,
    left: 5,
    title: "Cody Gakpo",
  },
  {
    id: "19",
    top: 125,
    left: 65,
    title: "Harvey Elliott",
  },
  {
    id: "20",
    top: 190,
    left: 5,
    title: "Diogo Jota",
  },
  {
    id: "21",
    top: 190,
    left: 65,
    title: "Kostas Tsimikas",
  },
  {
    id: "38",
    top: 255,
    left: 5,
    title: "Ryan Gravenberch",
  },
  {
    id: "43",
    top: 255,
    left: 65,
    title: "Stefan Bajčetić",
  },
  {
    id: "50",
    top: 320,
    left: 5,
    title: "Ben Doak",
  },
  {
    id: "62",
    top: 320,
    left: 65,
    title: "Caoimhin Kelleher",
  },
  {
    id: "78",
    top: 385,
    left: 5,
    title: "Jarell Quansah",
  },
  {
    id: "84",
    top: 385,
    left: 65,
    title: "Conor Bradley",
  },
];

function FormationPage() {
  const [player, setPlayer] = useState(startingMember);
  const [subPlayer, setSubPlayer] = useState(subMember);

  const moveItem = useCallback(
    (id, left, top, title) => {
      setPlayer((prevState) => {
        const copyData = [...prevState];
        const existingData = copyData.filter((ele) => {
          return ele.id !== id;
        });
        const filtertData = copyData.filter((ele) => {
          return ele.id === id;
        });
        filtertData.splice(0, 1, { id, left, top, title });
        return [...existingData, ...filtertData];
      });
    },
    [setPlayer]
  );

  const moveSubItem = useCallback(
    (id, left, top, title) => {
      setSubPlayer((prevState) => {
        const copyData = [...prevState];
        const existingData = copyData.filter((ele) => {
          return ele.id !== id;
        });
        const filtertData = copyData.filter((ele) => {
          return ele.id === id;
        });
        filtertData.splice(0, 1, { id, left, top, title });
        return [...existingData, ...filtertData];
      });
    },
    [setSubPlayer]
  );

  function resetStartingMemberButton() {
    setPlayer([...startingMember]);
  }

  function resetSubMemberButton() {
    setSubPlayer([...subMember]);
  }

  function allReset() {
    setPlayer([...startingMember]);
    setSubPlayer([...subMember]);
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
      <div className="flex justify-end gap-4 mr-14">
          <button className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl" onClick={resetStartingMemberButton}>ResetStartingMember</button>
          <button className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl" onClick={resetSubMemberButton}>ResetSubMember</button>
          <button className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl" onClick={allReset}>AllReset</button>
          <button className="border-[1.5px] bg-red-700 p-[0.09rem] rounded-xl">Save</button>
        </div>
        <div className="flex justify-center">
          <FormationDrop
            moveItem={moveItem}
            player={player}
            subPlayer={subPlayer}
            moveSubItem={moveSubItem}
          ></FormationDrop>
        </div>
 
        <div>Formation-1,2,3...</div>
      </DndProvider>
    </>
  );
}

export default FormationPage;
