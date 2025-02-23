export enum EServerSendEvents {
  MESSAGE_CREATE = "MESSAGE_CREATE",
  MESSAGE_UPDATE = "MESSAGE_UPDATE",
  JOB_CREATE = "JOB_CREATE",
  JOB_START = "JOB_START",
  JOB_UPDATE = "JOB_UPDATE",
  JOB_DONE = "JOB_DONE",
  JOB_ERROR = "JOB_ERROR",
  UPDATE = "UPDATE",
  TRANSACTION_CREATE = "TRANSACTION_CREATE",
  SUBSCRIPTION_UPDATE = "SUBSCRIPTION_UPDATE"
}

interface IJob {
  chat_id: string;
  created_at: string;
  error: string;
  error_code: string;
  id: string;
  is_stop_allowed: boolean;
  mj_native_message_id: string | null;
  mj_remaining_timeout: number | null;
  name: string;
  progress: number | null;
  status: string;
  timeout: number;
  user_message_id: string | null;
}

export interface IServerSendEventsResponse<Message> {
  name: EServerSendEvents;
  data: {
    message: Message;
    job: IJob;
  };
}
