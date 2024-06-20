/* eslint-disable no-unused-vars */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormationDrop from "../../components/formation/FormationDrop";
import { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { formationPostQuery, formationGetOne } from "../../util/http";
import FormationButtons from "../../components/formation/FormationButtons";
import FormationSaveLoad from "../../components/formation/FormationSaveLoad";
import { startingMember, subMember } from "../../data/FormationData";

function FormationPage() {
  const [player, setPlayer] = useState(startingMember);
  const [subPlayer, setSubPlayer] = useState(subMember);
  const [query, setQuery] = useState({ isBoolean: false, iden: null });

  const { mutate } = useMutation({
    mutationFn: formationPostQuery,
  });

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["formation", query.iden],
    queryFn: ({ signal }) => {
      const identi = query.iden;
      return formationGetOne({ signal: signal, identi: identi });
    },
    enabled: query.isBoolean,
  });


  function getQueryToggle(num) {
    setQuery({ isBoolean: true, iden: num });
  }

  useEffect(() => {
    if (data) {
      const { player: getPlayer, subPlayer: getSubPlayer } = data;
      setPlayer(getPlayer);
      setSubPlayer(getSubPlayer);
    }
  }, [data]);

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

  const resetStartingMemberButton = useCallback(() => {
    setPlayer([...startingMember]);
  }, [setPlayer]);

  const resetSubMemberButton = useCallback(() => {
    setSubPlayer([...subMember]);
  }, [setSubPlayer]);

  const allReset = useCallback(() => {
    setPlayer([...startingMember]);
    setSubPlayer([...subMember]);
  }, [setPlayer, setSubPlayer]);

  const formationSave = useCallback(() => {
    mutate({ player, subPlayer });
  }, [mutate, player, subPlayer]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <FormationButtons
          resetStartingMemberButton={resetStartingMemberButton}
          resetSubMemberButton={resetSubMemberButton}
          allReset={allReset}
          formationSave={formationSave}
        ></FormationButtons>

        <div className="flex justify-center">
          <FormationDrop
            moveItem={moveItem}
            player={player}
            subPlayer={subPlayer}
            moveSubItem={moveSubItem}
          ></FormationDrop>
        </div>

        <FormationSaveLoad
          
          getQueryToggle={getQueryToggle}
        ></FormationSaveLoad>
      </DndProvider>
    </>
  );
}

export default FormationPage;
