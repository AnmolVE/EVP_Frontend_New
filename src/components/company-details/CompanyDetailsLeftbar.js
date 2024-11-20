import React, { useState, useEffect } from "react";
import "./CompanyDetailLeftbar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataForSelectedItem } from "../../features/inputfields/inputfieldsSlice";

function CompanyDetailsLeftbar({
  listItems,
  currentListItem,
  handleListItemClick,
}) {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((store) => store.inputField);

  useEffect(() => {
    const index = listItems.findIndex((item) => item.name === currentListItem);
    setSelectedItemIndex(index);
  }, [currentListItem, listItems]);

  // console.log("data: ", data);

  // useEffect(() => {
  //   // Set the initial selected item when the component mounts
  //   handleListItemClick(listItems[selectedItemIndex].name);
  //   dispatch(fetchDataForSelectedItem(listItems[selectedItemIndex].name));
  // }, [listItems, selectedItemIndex]);

  const onItemClick = (index) => {
    const selectedItem = listItems[index];
    handleListItemClick(selectedItem.name);
    console.log(selectedItem.name);
    setSelectedItemIndex(index);
    dispatch(fetchDataForSelectedItem(selectedItem.name));
  };

  return (
    <div className="company-detail-below-firstContainer">
      {listItems.map((listItem, index) => (
        <div
          className={`company-detail-below-firstContainer-list-items ${
            index === selectedItemIndex ? "active" : ""
          }`}
          key={index}
        >
          <p onClick={() => onItemClick(index)}>{listItem.name}</p>
          <div className="company-detail-below-firstContainer-evp-journey-progress-bar">
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompanyDetailsLeftbar;
