/* eslint-disable no-unused-vars */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormationDrop from "../../components/formation/FormationDrop";
import { useCallback, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { buttonAllGet } from "../../util/http";

import { startingMember, subMember } from "../../data/FormationData";
import FormationTopButton from "../../components/formation/FormationTopButton";
import FormationSaveButton from "../../components/formation/FormationSaveButton";
import { buttonPostQuery, formationPostQuery } from "../../util/http";
import { queryClient } from "../../util/query";

function FormationPage() {
  const [player, setPlayer] = useState(startingMember);
  const [subPlayer, setSubPlayer] = useState(subMember);

  const {
    data: buttonData,
    refetch,
    isPending: buttonPending,
  } = useQuery({
    queryKey: ["button"],
    queryFn: ({ signal }) => {
      return buttonAllGet({ signal });
    },
  });

  const { mutateAsync: buttonMutate } = useMutation({
    mutationFn: buttonPostQuery,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["button"]);
      refetch();
    },
  });

  const {mutate : dragMutate} = useMutation({
    mutationFn : formationPostQuery
  })

  const moveItem = useCallback(
    (id, left, top, title) => {
      setPlayer((prevState) => {
        console.log("moveItem");
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
    (id, left, top, title, sub) => {
      setSubPlayer((prevState) => {
        const copyData = [...prevState];
        const existingData = copyData.filter((ele) => {
          return ele.id !== id;
        });
        const filtertData = copyData.filter((ele) => {
          return ele.id === id;
        });
        filtertData.splice(0, 1, { id, left, top, title, sub });
        return [...existingData, ...filtertData];
      });
    },
    [setSubPlayer]
  );

  const resetPlayer = useCallback(() => {
    setPlayer([...startingMember]);
  }, [setPlayer]);

  const resetSubPlayer = useCallback(() => {
    setSubPlayer([...subMember]);
  }, [setSubPlayer]);

  const allReset = useCallback(() => {
    setPlayer([...startingMember]);
    setSubPlayer([...subMember]);
  }, [setPlayer, setSubPlayer]);

  const saveButton = useCallback(() => {
    const butData =
      buttonData.length === 1
        ? { title: "Formation-1" }
        : buttonData[buttonData.length - 1];

        const startingPlayer = player.map((ele)=>{
          return {
            top : ele.top,
            left : ele.left,
            title : ele.title
          }
        })

        const sub = subPlayer.map((ele)=>{
          return {
            top : ele.top,
            left : ele.left,
            title : ele.title,
            sub : ele.sub
          }
        })

    buttonMutate({ butData });
    dragMutate({startingPlayer, sub})
  }, [buttonMutate, buttonData, player, subPlayer, dragMutate]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <FormationTopButton
          resetPlayer={resetPlayer}
          resetSubPlayer={resetSubPlayer}
          allReset={allReset}
          save={saveButton}
        ></FormationTopButton>

        <div className="flex justify-center">
          <FormationDrop
            moveItem={moveItem}
            player={player}
            subPlayer={subPlayer}
            moveSubItem={moveSubItem}
          ></FormationDrop>
        </div>
        
        <div className="flex justify-center gap-6 ">
          <FormationSaveButton
            buttons={buttonData}
            pending={buttonPending}
          ></FormationSaveButton>
        </div>
      </DndProvider>
    </>
  );
}

export default FormationPage;
