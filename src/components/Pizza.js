import React from "react";

function Pizza({topping, size, vegetarian, id, handleEdit}) {

 
  const sendIdToApp = () => {
    handleEdit(id)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button  onClick={sendIdToApp}type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
