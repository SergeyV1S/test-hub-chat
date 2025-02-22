import type { ITransaction } from "./transaction";

export interface IMessage {
  id: string;
  role: "assistant" | "user";
  type: "TEXT";
  status: "PENDING";
  tokens: number;
  action_type: "CONTEXT_CLEARED";
  user_id: string;
  chat_id: string;
  additional_content: string;
  tg_bot_message_id: string;
  disabled: boolean;
  content: string;
  request_id: string;
  transaction_id: string;
  model_id: string;
  created_at: string;
}

export interface IChatMessage extends IMessage {
  transaction?: ITransaction;
}
