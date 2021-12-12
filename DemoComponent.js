import react from "react";
import React from "react";

export default () => {
  // return <h1>In demo Component </h1>
  // return React.createElement("h1", null, "In demo Component")

  // <div>
  //     <h1>In Demo Component</h1>
  // </div>

  //   return react.createElement("div",null,React.createElement("h1", null, "In demo Component"))

  // <div>
  //     <h1>In Demo Component</h1>
  //      <h2> In  Demo Component </h2>
  // </div>

  // return react.createElement("div", null, React.createElement("h1", null, "In demo Component"
  // ),React.createElement("h1", null, "In demo Component"
  // ))

  // <div>
  //     <h1 style={{backgroundColor:"red"}}>In Demo Component</h1>
  //      <h2> In  Demo Component </h2>
  // </div>

  // return react.createElement("div", null, React.createElement("h1", { style: { backgroundColor: "red" } }, "In demo Component"
  // ), React.createElement("h1", { style: { backgroundColor: "blue" } }, "In demo Component"
  // ))

  // return(
  //     <div>
  //         <h1 style={{ backgroundColor: "red" }}>My Heading</h1>

  //         <h2 style={{ backgroundColor: "green" }}>My Sub Heading</h2>

  //         <div style={{ backgroundColor: "yellow" }}>
  //             <p style={{ color:"orange"}}>
  //                 This is my first Paragraph
  //             </p>
  //             <p style={{ color:"blue"}}>
  //                 This is my Second Paragraph
  //             </p>

  //         </div>
  //     </div>
  // )

  // return react.createElement("div", null, React.createElement("h1", { style: { backgroundColor: "red" } }, "In demo Component"
  // ), React.createElement("h2", { style: { backgroundColor: "green" } }, "In demo Component"),
  //     react.createElement("div", { style={ backgroundColor:"yellow"}}, React.createElement("p", { style: { color: "orange" } }, "This is my First paragraph"
  // ), React.createElement("p", { style: { color: "blue" } }, "This is my second paragraph"))

  //   return react.createElement(
  //     "div",
  //     null,
  //     React.createElement(
  //       "h1",
  //       { style: { backgroundColor: "red" } },
  //       "In demo Component"
  //     ),
  //     React.createElement(
  //       "h2",
  //       { style: { backgroundColor: "green" } },
  //       "In demo Component"
  //     ),
  //     React.createElement(
  //       "div",
  //       { style: { backgroundColor: "yellow" } },
  //       React.createElement(
  //         "p",
  //         { style: { color: "orange" } },
  //         "This is my First paragraph"
  //       ),
  //       React.createElement(
  //         "p",
  //         { style: { color: "blue" } },
  //         "This is my second paragraph"
  //       )
  //     )
  //   );

  return react.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "In demo Component"
    ),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "In demo Component"
    ),
    react.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },
      React.createElement(
        "p",
        { style: { color: "orange" } },
        "This is my First paragraph"
      ),
      React.createElement(
        "p",
        { style: { color: "blue" } },
        "This is my second paragraph"
      )
    )
  );
};
