import { useSetRecoilState } from 'recoil';

import { contextMenuEntriesState } from '@/ui/context-menu/states/contextMenuEntriesState';
import { IconTrash } from '@/ui/icon';

import { useDeleteSelectedBoardCards } from './useDeleteSelectedBoardCards';

export const useBoardContextMenuEntries = () => {
  const setContextMenuEntries = useSetRecoilState(contextMenuEntriesState);

  const deleteSelectedBoardCards = useDeleteSelectedBoardCards();

  return {
    setContextMenuEntries: () =>
      setContextMenuEntries([
        {
          label: 'Delete',
          Icon: IconTrash,
          accent: 'danger',
          onClick: () => deleteSelectedBoardCards(),
        },
      ]),
  };
};
