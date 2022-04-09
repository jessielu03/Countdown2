import React from "react";

const Menu = (props) => {
  if((props.veg && props.veggie) || !(props.veg))
    return (
    <>
      <p>{props.food} (${props.price})</p>
    </>
    )
}

export default Menu;