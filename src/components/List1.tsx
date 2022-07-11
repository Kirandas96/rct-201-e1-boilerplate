import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
};
const List1 = (props: List1Props) => {

  const [value, setValue] = useState();

  const [
    list,
    { appendStart,popEnd, clear, reset },
  ]: any = useNumberList([1, 2, 3]);


  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">List 1</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{list.join(" ")}</div>
      

      
      <input data-testid="list1-input" type="number"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}/>

      <button data-testid="list1-btn-append-start" onClick={() => appendStart(value)}>
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={() => popEnd()}>
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={() => clear()}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={() => reset()}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
