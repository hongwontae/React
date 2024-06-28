/* eslint-disable no-unused-vars */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormationDrop from "../../components/formation/FormationDrop";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { startingMember, subMember } from "../../data/FormationData";
import FormationTopButton from "../../components/formation/FormationTopButton";
import FormationSaveButton from "../../components/formation/FormationSaveButton";
import {
  buttonPostQuery,
  formationPostQuery,
  buttonAllGet,
  formationGetOne,
  dataDelete,
} from "../../util/http";
import { queryClient } from "../../util/query";
import FormationModal from "../../components/formation/FormationModal";
import FormationSaveModal from "../../components/formation/FormationSaveModal";

function FormationPage() {
  const [player, setPlayer] = useState(startingMember);
  const [subPlayer, setSubPlayer] = useState(subMember);
  const [forQuery, setForQuery] = useState({ queryBol: false, identi: null });

  const modalDeleteRef = useRef(null);
  const modalSaveRef = useRef(null);
  const diffetStateRef = useRef(null);

  diffetStateRef.current = [startingMember, subMember];

  const {
    data: buttonData,
    refetch,
    isPending: buttonPending,
  } = useQuery({
    queryKey: ["button"],
    queryFn: ({ signal }) => {
      return buttonAllGet({ signal });
    },
    staleTime: 10000,
  });

  const { data: formationData } = useQuery({
    queryKey: ["formation", forQuery.identi],
    queryFn: ({ signal }) => {
      return formationGetOne({ signal, identi: forQuery.identi });
    },
    enabled: forQuery.queryBol,
    staleTime: 5000,
  });

  const { mutateAsync: buttonMutate } = useMutation({
    mutationFn: buttonPostQuery,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["button"]);
      refetch();
    },
  });

  const { mutate: dragMutate } = useMutation({
    mutationFn: formationPostQuery,
  });

  const { mutateAsync: deleteMutate } = useMutation({
    mutationFn: dataDelete,
  });

  useEffect(() => {
    console.log("effect");
    if (formationData) {
      const { playerData, subPlayerData } = formationData;
      setPlayer(playerData);
      setSubPlayer(subPlayerData);
    }
  }, [formationData]);

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

  const saveButton = useCallback(
    (inputTitleData) => {
      const [playerss, subPlayerss] = diffetStateRef.current;

      if (playerss == player && subPlayer == subPlayerss) {
        return alert("요소를 하나라도 이동시키고 저장하시기 바랍니다.");
      }

      const butData = { title: inputTitleData };

      const startingPlayer = player.map((ele) => {
        return {
          top: ele.top,
          left: ele.left,
          title: ele.title,
        };
      });

      const sub = subPlayer.map((ele) => {
        return {
          top: ele.top,
          left: ele.left,
          title: ele.title,
          sub: ele.sub,
        };
      });

      buttonMutate({ butData });
      dragMutate({ startingPlayer, sub });
    },
    [buttonMutate, player, subPlayer, dragMutate]
  );

  function deleteOpenHandler() {
    if (buttonData[0].message) {
      return;
    }

    const checkDelete = buttonData.map((ele) => {
      return ele.title;
    });

    const checkTwo = checkDelete.filter((ele) => {
      return ele === "delete";
    });

    if (checkDelete.length === checkTwo.length) {
      console.log("저장된 데이터가 없습니다.");
      return;
    }

    modalDeleteRef.current.showModal();
  }

  function deleteCancelHandler() {
    if (buttonData[0].message) {
      return;
    }
    modalDeleteRef.current.close();
    refetch();
  }

  function saveOpenHandler() {
    modalSaveRef.current.showModal();
  }

  function saveCancelHandler() {
    modalSaveRef.current.close();
  }

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <FormationModal
          ref={modalDeleteRef}
          cl={deleteCancelHandler}
          button={buttonData}
          dele={deleteMutate}
          title="What Formation Delete?"
          buttonName="Delete"
          refetch={refetch}
        ></FormationModal>

        <FormationSaveModal
          ref={modalSaveRef}
          cancel={saveCancelHandler}
          save={saveButton}
          title="Register Modal"
        ></FormationSaveModal>

        <FormationTopButton
          resetPlayer={resetPlayer}
          resetSubPlayer={resetSubPlayer}
          allReset={allReset}
          deleteData={deleteOpenHandler}
          saveOpenHandler={saveOpenHandler}
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
            setForQuery={setForQuery}
          ></FormationSaveButton>
        </div>
      </DndProvider>
    </>
  );
}

export default FormationPage;
