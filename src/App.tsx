import React from 'react';
import { Stack } from "@fluentui/react/lib/Stack";
import FlashCardBasic from './components/FlashCardBasic';

function App() {
  return (
    <Stack tokens={{ padding: 20}}>
      <Stack.Item align="center">
        <FlashCardBasic question={"IMR"} answer={20} category={"General Knowledge"}/>
      </Stack.Item>
    </Stack>
  );
}

export default App;
