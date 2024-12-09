import {create} from 'zustand';
import {persist} from 'zustand/middleware';


export const useStore = create(
    persist(
      (set) => ({
        inputData: { name: '', age: '' },
        nameHandler: (e) =>
          set((state) => ({
            inputData: { ...state.inputData, name: e.target.value }, // inputData 내부 값만 업데이트
          })),
        ageHandler: (e) =>
          set((state) => ({
            inputData: { ...state.inputData, age: e.target.value }, // inputData 내부 값만 업데이트
          })),
      }),
      {
        name: 'input-data-storage', // 로컬스토리지에 저장될 이름
      }
    )
  );