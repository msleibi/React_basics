import "./Card.css";
import React from "react";

const Card = (props) => {
  // it will work like a shell around ExpenseItem or around Expenses
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
  // props.children will be in ExpenseItem: (it is called composition)
  /*<ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button
          onClick={() => {
            setTitle("Updated!!!!");
          }}
        >
          Change Title
        </button>
      </div> */
};

export default Card;
