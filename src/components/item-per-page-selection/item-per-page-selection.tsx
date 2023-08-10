import { SegmentedControl, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useItemsPerPage } from './useItemPerPage';

const defaultItemsPerPageChoices = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '30', value: '30' },
  { label: '50', value: '50' },
  { label: '100', value: '100' }
];

type Props = {
  itemsPerPageChoices?: typeof defaultItemsPerPageChoices;
  enabled: boolean;
  handleSelectItemsPerPage: () => void;
  stateSet?: ReturnType<typeof useItemsPerPage>;
};

export const ItemPerPageSelection = ({
  itemsPerPageChoices,
  enabled,
  handleSelectItemsPerPage: handleChangeItemsPerPage,
  stateSet: [itemsPerPage, setItemsPerPage] = useItemsPerPage(20)
}: Props) => {
  useEffect(() => handleChangeItemsPerPage(), [itemsPerPage, handleChangeItemsPerPage]);

  return (
    <>
      <SegmentedControl
        value={itemsPerPage.toString()}
        onChange={setItemsPerPage}
        data={itemsPerPageChoices ?? defaultItemsPerPageChoices}
        disabled={!enabled}
      />
      <Text fz='sm'>: Items per Page</Text>
    </>
  );
};