import { useState } from "react";

import { messageSliceSelectors } from "@/entity/message";
import { useAppSelector } from "@/shared/store";
import { Button, Grid, Input } from "@/shared/ui";

interface ISendMessageInput {
  submitHandler: (input: string) => void;
}

export const SendMessageInput = ({ submitHandler }: ISendMessageInput) => {
  const [input, setInput] = useState("");

  const { isLoadingAssistent, error } = useAppSelector(messageSliceSelectors.getChatState);

  return (
    <Grid $columns='1fr 50px'>
      <Input
        type='text'
        placeholder='Введите сообщение...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setInput("");
            submitHandler(input);
          }
        }}
      />
      <Button
        kind='outlined'
        onClick={() => {
          submitHandler(input);
          setInput("");
        }}
        disabled={isLoadingAssistent || error || !input.trim()}
      >
        ➤
      </Button>
    </Grid>
  );
};
