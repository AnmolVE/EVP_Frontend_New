import { useState } from "react";

export const useCheckboxSelection = (contentAssets) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (index) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(index)
        ? prevSelectedRows.filter((row) => row !== index)
        : [...prevSelectedRows, index]
    );
  };

  const getSelectedContentAssets = () =>
    selectedRows.map((index) => contentAssets[index]);

  return { selectedRows, handleCheckboxChange, getSelectedContentAssets };
};
