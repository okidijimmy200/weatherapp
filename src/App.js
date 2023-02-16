import React from "react";
import Page from "./container/page";

function App() {
  return (
    <div className="px-60 py-0 m-12">
      <div className="mx-0 my-0 h-[43rem] rounded-[0.8rem] border-dotted border-2 p-[2rem]">
          <h1 className="text-center text-[#000] text-[1.6rem]">Weather App</h1>
          <Page />
      </div>
    </div>
  );
}

export default App;
