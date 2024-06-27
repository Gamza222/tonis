import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TonConnectUI } from "@tonconnect/ui";
import useTonConnectEvents, {
  ConnectionState,
} from "../lib/WalletConnectionState";

export interface WalletContextProps {
  tonConnectUI: TonConnectUI;
  WalletConnectionState: ConnectionState;
  walletAddress: string | null;
  isConnected: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const tonConnectUIInstance = new TonConnectUI({
  manifestUrl: `${process.env.APP_URL}/tonconnect-manifest.json`,
});

export const WalletContext = createContext<WalletContextProps>({
  tonConnectUI: tonConnectUIInstance,
  WalletConnectionState: "",
  walletAddress: null,
  isConnected: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
});

interface WalletProviderProps extends PropsWithChildren {}

const WalletProvider = ({ children }: WalletProviderProps) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const wallet = await tonConnectUIInstance.openModal();
    } catch (error) {
      console.error("Failed to connect wallet", error);
    }
  };
  //   tonConnectUIInstance.setConnectRequestParameters({
  //     state: "loading",
  //   });

  const WalletConnectionState = useTonConnectEvents();

  const disconnectWallet = async () => {
    await tonConnectUIInstance.disconnect().then(() => {});
    setWalletAddress(null);
    setIsConnected(false);
  };

  useEffect(() => {
    // Check if the wallet is already connected on component mount
    if (tonConnectUIInstance.connected) {
      const wallet = tonConnectUIInstance.account?.address;
      setWalletAddress(wallet || null);
      setIsConnected(!!wallet);
    }
  }, [tonConnectUIInstance]);

  const unsubscribe = tonConnectUIInstance.onStatusChange(
    (walletAndwalletInfo) => {
      console.log(tonConnectUIInstance.account?.address, "NKJNDFNDSFSDK");
      setIsConnected(tonConnectUIInstance.connected);
      setWalletAddress(walletAndwalletInfo?.account.address || null);
    }
  );

  const contextValue = useMemo(
    () => ({
      tonConnectUI: tonConnectUIInstance,
      WalletConnectionState: WalletConnectionState,
      walletAddress,
      isConnected,
      connectWallet,
      disconnectWallet,
    }),
    [walletAddress, isConnected, WalletConnectionState]
  );

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;

export const useWallet = () => useContext(WalletContext);
