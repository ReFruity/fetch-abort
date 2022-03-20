import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { searchInputChanged, selectSearchName } from "./features/search/searchSlice";
import { fetchItemsAsyncThunk, selectItems } from "./features/item/itemSlice";

function App() {
  const dispatch = useDispatch();
  const searchName = useSelector(selectSearchName);
  const items = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchItemsAsyncThunk(searchName));
  }, [searchName]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={ (event) => dispatch(searchInputChanged(event.target.value)) }
      />
      {
        items.map((item, index) => <div key={ index }>{ item.name }</div>)
      }
    </div>
  );
}

export default App;
