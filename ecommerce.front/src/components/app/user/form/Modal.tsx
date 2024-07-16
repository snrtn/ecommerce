"use client";

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="relative w-full max-w-3xl rounded-md bg-white p-6 shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;
