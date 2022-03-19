/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ExampleContextValue {
  Str: string;
  setSomeState?: Dispatch<SetStateAction<string>>;
}

const ExampleContext = React.createContext<ExampleContextValue>({
  Str: "",
  setSomeState: () => {}
});

ExampleContext.displayName = "ExampleContext";

export const useExampleContext= (): ExampleContextValue => {
  const context = React.useContext(ExampleContext);
  if (context === undefined) {
    throw new Error("useExampleContext must be used within a ExampleProvider");
  }
  return context;
};

export const ExampleProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [Str, setSomeState] = useState<string>("");

  return (
    <ExampleContext.Provider
      value={{
        Str,
        setSomeState
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};
