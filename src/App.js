import React, {useState} from "react";
import Search from "./components/search/search";
import Display from "./components/display/display";
import List from "./components/list/list";
import Page from "./container/page";

function App() {
  return (
    <div className="px-60 py-0 m-12">
      <div className="mx-0 my-0 h-[38rem] rounded-[0.8rem] border-dotted border-2 p-[2rem]">
          <h1 className="text-center text-[#000] text-[1.6rem]">Weather App</h1>
          <Page />
          <List />
      </div>
    </div>
  );
}

export default App;
