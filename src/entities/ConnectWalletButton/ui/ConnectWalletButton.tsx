import "./ConnectWalletButton.scss";

import React, { useCallback, useEffect, useRef, useState } from "react";
import cls from "./ConnectWalletButton.module.scss";

import ButtonType1 from "../../../shared/ui/ButtonType1/ButtonType1";

import ModalType1, {
  ModalType1Handles,
} from "widgets/ModalType1/ui/ModalType1";

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useWallet } from "app/providers/WalletProvider/ui/WalletProvider";
import { Bounce, toast } from "react-toastify";
import { CutWalletAddress } from "shared/lib/CutWalletAddress/CutWalletAddress";

interface ConnectWalletButtonProps {
  className?: string;
}

const ConnectWalletButton = ({ className }: ConnectWalletButtonProps) => {
  const { t } = useTranslation();
  const {
    tonConnectUI,
    WalletConnectionState,
    walletAddress,
    isConnected,
    connectWallet,
    disconnectWallet,
  } = useWallet();

  const [connectedWalletModal, setConnectedWalletModal] =
    useState<boolean>(false);

  const modalRef = useRef<ModalType1Handles>(null);

  const openConnectedWalletModal = useCallback(() => {
    setConnectedWalletModal(true);
  }, [connectedWalletModal, setConnectedWalletModal]);

  const closeConnectedWalletModal = useCallback(() => {
    setConnectedWalletModal(false);
  }, [connectedWalletModal, setConnectedWalletModal]);

  const onDisconnect = useCallback(() => {
    disconnectWallet();
    if (modalRef.current) {
      modalRef.current.triggerClose();
    }
  }, [modalRef, disconnectWallet, walletAddress]);

  // Function to copy wallet address to clipboard
  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(walletAddress || "")
      .then(() => {
        toast.success(t("Address copied to clipboard"), {
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
      })
      .catch((error) => {
        toast.error(t("Error copying address"), {
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
      });
    if (modalRef.current) {
      modalRef.current.triggerClose();
    }
  }, [walletAddress]);

  return (
    <>
      {!isConnected && !walletAddress ? (
        <ButtonType1
          className={classNames(cls.ConnectWalletButton, {}, [className])}
          text={t("Connect wallet")}
          onClick={connectWallet}
          isLoading={WalletConnectionState == "connecting"}
        />
      ) : (
        <ButtonType1
          className={classNames(cls.ConnectWalletButton, {}, [className])}
          text={CutWalletAddress(walletAddress || "")}
          onClick={openConnectedWalletModal}
        />
      )}

      {connectedWalletModal && (
        <ModalType1 ref={modalRef} onClose={closeConnectedWalletModal}>
          <div className={cls.ConnectedWalletButtons}>
            <ButtonType1
              className={classNames(cls.ConnectWalletButton, {}, [className])}
              text={"Copy to clipboard"}
              onClick={copyToClipboard}
            />
            <ButtonType1
              className={classNames(cls.ConnectWalletButton, {}, [className])}
              text={"Disconnect wallet"}
              onClick={onDisconnect}
            />
          </div>
        </ModalType1>
      )}
    </>
  );
};

export default ConnectWalletButton;
