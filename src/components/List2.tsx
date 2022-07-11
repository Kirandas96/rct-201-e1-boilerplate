import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
};
const List2 = (props: List2Props) => {

  const [value, setValue] = useState();

  const [
    list,
    {appendEnd, popStart, clear, reset },
  ]: any = useNumberList([4,5]);

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */}List 2</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{/* Each element in a list */}{list.join(" ")}</div>

      <input data-testid="list2-input" value={value}
      onChange={(e: any) => setValue(e.target.value)}/>

      <button data-testid="list2-btn-append-end" onClick={() => appendEnd(value)}>
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() => popStart()}>
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={() => reset()}>
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
