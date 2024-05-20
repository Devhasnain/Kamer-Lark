import React, { useEffect } from "react";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  modelStyle?: string;
  children: React.ReactNode;
};

const DialogModel = ({ open, setOpen, modelStyle, children }: Props) => {
  useEffect(() => {
    if (open) {
      window?.document?.body?.classList.add("h-screen");
      window?.document?.body?.classList.add("overflow-y-hidden");
    } else {
      window?.document?.body?.classList.remove("h-screen");
      window?.document?.body?.classList.remove("overflow-y-hidden");
    }

    return () => {};
  }, [open]);

  return (
    <div
      className={`absolute left-0 top-0 ${
        open ? "opacity-100 flex" : "opacity-0 hidden"
      } bg-gray-900/50 h-screen w-full flex-col justify-center overflow-auto`}
      style={{
        zIndex: open ? "100" : "-1000",
      }}
    >
      <div
        className={`_model_animation transition-all duration-500 bg-white p-5 my-5 rounded-md lg:w-6/12 mx-auto relative ${modelStyle}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DialogModel;
