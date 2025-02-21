import { useEffect } from "react";

interface IMethods {
  onMessage: (event: MessageEvent<any>) => void;
  onError: (event: Event) => void;
  onOpen: (event: Event) => void;
}

export const useServerSentEvents = (url: string, handlers: IMethods, config: EventSourceInit) => {
  const eventSource = new EventSource(`${process.env.BASE_API_URL}/${url}`, config);

  eventSource.onopen = handlers.onOpen;
  eventSource.onerror = handlers.onError;
  eventSource.onmessage = handlers.onMessage;

  useEffect(() => eventSource.close(), []);

  return {
    readyState: eventSource.readyState,
    closed: eventSource.CLOSED,
    connecting: eventSource.CONNECTING,
    open: eventSource.OPEN
  };
};
