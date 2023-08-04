import { CompatClient, Stomp } from "@stomp/stompjs";
import { useRef, useState } from "react";
import SockJS from "sockjs-client";
const useWebsocket = (initialForm: { subscribeUrl: string }) => {
  const [messages, setMessages] = useState([]);
  const client = useRef<CompatClient>();
  client.current = Stomp.over(() => {
    const sock = new SockJS("http://localhost:8080/coinview-websocket");
    return sock;
  });
  client.current.connect({}, () => {
    client.current?.subscribe(
      initialForm.subscribeUrl,
      (message) => {
        setMessages(JSON.parse(message.body));
      },
      {}
    );
    client.current?.publish({
      destination: "http://localhost:8080/coinviewclient/call",
      body: "hello",
    });
  });

  return messages;
};

export default useWebsocket;
