import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Bounce, toast } from "react-toastify";

export type ConnectionState =
  | "disconnection"
  | "connecting"
  | "connected"
  | "connection error"
  | "restoring connection"
  | "";

const useTonConnectEvents = (): ConnectionState => {
  const [connectionState, setConnectionState] = useState<ConnectionState>("");
  const { t } = useTranslation();

  useEffect(() => {
    let resetTimer: NodeJS.Timeout;

    const resetState = () => {
      resetTimer = setTimeout(() => {
        setConnectionState("");
      }, 1000); // Adjust the delay as needed
    };

    const handleConnectionStarted = (event: CustomEvent) => {
      console.log("Connection started", event.detail);
      clearTimeout(resetTimer);
      setConnectionState("connecting");
    };
    const handleConnectionRestoringStarted = (event: CustomEvent) => {
      console.log("Connection restoring started", event.detail);
      clearTimeout(resetTimer);
      setConnectionState("restoring connection");
    };

    const handleConnectionCompleted = (event: CustomEvent) => {
      console.log("Connection completed", event.detail);
      toast.success(t("Connection completed"), {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setConnectionState("connected");
      resetState();
    };

    const handleConnectionError = (event: CustomEvent) => {
      console.log("Connection error", event.detail);
      toast.error(t("Connection error"), {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setConnectionState("connection error");
      resetState();
    };

    const handleDisconnection = (event: CustomEvent) => {
      console.log("Disconnection", event.detail);

      clearTimeout(resetTimer);
      setConnectionState("disconnection");
    };

    // Add event listeners for custom events
    window.addEventListener(
      "ton-connect-ui-connection-started",
      handleConnectionStarted as EventListener
    );
    window.addEventListener(
      "ton-connect-ui-connection-completed",
      handleConnectionCompleted as EventListener
    );
    window.addEventListener(
      "ton-connect-ui-connection-error",
      handleConnectionError as EventListener
    );
    window.addEventListener(
      "ton-connect-ui-connection-restoring-started",
      handleConnectionRestoringStarted as EventListener
    );
    window.addEventListener(
      "ton-connect-ui-disconnection",
      handleDisconnection as EventListener
    );

    // Clean up event listeners on component unmount
    return () => {
      clearTimeout(resetTimer);
      window.removeEventListener(
        "ton-connect-ui-connection-started",
        handleConnectionStarted as EventListener
      );
      window.removeEventListener(
        "ton-connect-ui-connection-completed",
        handleConnectionCompleted as EventListener
      );
      window.removeEventListener(
        "ton-connect-ui-connection-error",
        handleConnectionError as EventListener
      );
      window.removeEventListener(
        "ton-connect-ui-connection-restoring-started",
        handleConnectionRestoringStarted as EventListener
      );
      window.removeEventListener(
        "ton-connect-ui-disconnection",
        handleDisconnection as EventListener
      );
    };
  }, []);

  return connectionState;
};

export default useTonConnectEvents;
