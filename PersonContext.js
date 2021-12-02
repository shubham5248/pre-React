import React from "react";

//Create Context
const personContext= React.createContext();

//Provider
const PersonProvider =personContext.Provider;

//Consumer
const PersonConsumer =personContext.Consumer;

export{ PersonProvider, PersonConsumer};

