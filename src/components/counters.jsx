import React, { Component } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Counter from "./counter";
import appSlice from "../redux/appSlice";
function Counters() {
  let [counterList, setCounter] = useState({
    counters: [
      { id: 1, value: 0, product: "water" },
      { id: 2, value: 1, product: "bread" },
      { id: 3, value: 2, product: "honey" },
      { id: 4, value: 3, product: "potato" },
    ],
  });
  let dispacth = useDispatch();

  const deleteIt = (counterId) => {
    let counters = counterList.counters.filter((counter) => {
      if (counter.id != counterId) return counter;
    });
    setCounter({ counters });
    calcProductCount(counters);
  };

  const reset = () => {
    const counters = counterList.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    setCounter({ counters });
    calcProductCount();
  };

  const dec = (counterId) => {
    let counters = counterList.counters.map((counter) => {
      if (counter.id == counterId) {
        counter.value--;
      }
      return counter;
    });
    setCounter({ counters });
    calcProductCount();
  };

  const incr = (counterId) => {
    let counters = counterList.counters.map((counter) => {
      if (counter.id == counterId) {
        counter.value++;
      }
      return counter;
    });
    setCounter({ counters });
    calcProductCount();
  };

  const calcProductCount = (counters) => {
    let totalCount = 0;
    if (!counters) counters = counterList.counters;

    counters.map((counter) => {
      console.log(counter.value);
      totalCount += counter.value;
    });
    dispacth(appSlice.actions.setTotalCount({ totalCount }));
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={reset}>
        Reset Counters
      </button>
      {counterList.counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          deleteOnParent={deleteIt}
          incrOnParent={incr}
          decOnParent={dec}
        />
      ))}
    </div>
  );
}

export default Counters;
