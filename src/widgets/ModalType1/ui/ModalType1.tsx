import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import cls from "./ModalType1.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { useClickOutside } from "shared/lib/hooks/useClickOutside/useClickOutside";

interface ModalType1Props extends PropsWithChildren {
  className?: string;
  onClose: () => void;
}

export interface ModalType1Handles {
  triggerClose: () => void;
}

const ModalType1 = forwardRef<ModalType1Handles, ModalType1Props>(
  (props, ref) => {
    const { children, className, onClose } = props;
    const [closing, setClosing] = useState<boolean>(false);
    const [opening, setOpening] = useState<boolean>(false);

    const modalRef = useRef(null);

    //if click outside modal
    useClickOutside(modalRef, () => handleClose());

    const handleClose = () => {
      setClosing(true);
      console.log("trigger");
      const timer = setTimeout(() => {
        onClose();
      }, 300); // Match the duration of your CSS transition

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    };

    useImperativeHandle(ref, () => ({
      triggerClose: handleClose,
    }));

    useEffect(() => {
      setOpening(true); // Remove the opening state after the animation duration
    }, []);

    const mods: Mods = {
      [cls.closing]: closing,
      [cls.opening]: opening,
    };

    return (
      <div className={classNames(cls.ModalType1, { ...mods }, [className])}>
        <div
          ref={modalRef}
          className={classNames(cls.ModalType1__content, { ...mods }, [])}
        >
          {children}
        </div>
      </div>
    );
  }
);

export default ModalType1;
