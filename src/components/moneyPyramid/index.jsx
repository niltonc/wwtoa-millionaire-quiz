import React from "react";

export default function MoneyPyramid({ options, questionNumber }) {
  return (
    <div className="pyramid">
      <ul className="moneyList">
        {options.map((m) => (
          <li
            className={
              questionNumber === m.id ? "moneyListItem active" : "moneyListItem"
            }
          >
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
