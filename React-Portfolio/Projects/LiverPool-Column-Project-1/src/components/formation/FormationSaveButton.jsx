import React from "react";

/* eslint-disable react/prop-types */
function FormationSaveButton({ buttons, pending }) {
  let content;

  if (pending) {
    content = (
      <>
        <div>Pending...</div>
      </>
    );
  }

  if (buttons && buttons[0].message) {
    return content = (
      <>
        <div>{buttons[0].message}</div>
      </>
    );
  }

  if (buttons) {
    content = (
      <>
        {buttons.map((ele) => {
          return (
            <React.Fragment key={ele.id}>
              <button className="bg-rose-800 border-[1px] p-[0.14rem] rounded-lg">
                {ele.title}
              </button>
            </React.Fragment>
          );
        })}
      </>
    );
  }

  return (
    <>
      {content}
    </>
  );
}

export default FormationSaveButton;
