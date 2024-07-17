"use client";

import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "./form/Modal";
import PaymentForm from "./form/FormPayment";
import { button } from "@/components/common/styles";
import Image from "next/image";

interface Card {
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardType: string;
  disabled: boolean;
}

const Payment = () => {
  const isMobile = useMediaQuery(768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedCards, setSavedCards] = useState<Card[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSaveCard = (newCard: Card) => {
    setSavedCards([...savedCards, newCard]);
    setIsModalOpen(false);
  };

  const handleDeleteCard = (index: number) => {
    const updatedCards = savedCards.filter((_, i) => i !== index);
    setSavedCards(updatedCards);
  };

  const maskCardNumber = (cardNumber: string) => {
    return "XXXX XXXX XXXX " + cardNumber.slice(-5);
  };

  return (
    <div className="min-h-[70vh] px-8 md:px-0">
      <div className="mb-10 flex justify-between">
        <h1 className="text-xl font-semibold">Payment</h1>
        <button onClick={openModal} className={button.save}>
          Add Payment
        </button>
      </div>

      {!isModalOpen && savedCards.length === 0 && (
        <p>No saved payment methods available. Please add one.</p>
      )}

      {savedCards.length > 0 && (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {savedCards.map((card, index) => (
            <div key={index} className="w-full">
              <div
                className={`card relative rounded-md border ${card.disabled ? "opacity-50" : ""}`}
              >
                <div className="chip">
                  <Image src="/sim.png" alt="Chip" fill />
                </div>
                <div className="mb-2 mt-20 text-lg">
                  {maskCardNumber(card.cardNumber)}
                </div>
                <div className="card-info flex items-start justify-between">
                  <div className="flex flex-1 flex-col">
                    <p className="text-xs text-gray-200">CARD HOLDER NAME</p>
                    <div className="card-name text-lg">{`${card.firstName} ${card.lastName}`}</div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs text-gray-200">VALID THRU</p>
                    <div
                      className={`mr-3 text-lg ${card.disabled ? "text-red-500" : ""}`}
                    >
                      {card.expiryDate}
                    </div>
                  </div>
                </div>
                {card.cardType && (
                  <div className="card-logo absolute right-7 top-4">
                    {card.cardType === "Visa" && <FaCcVisa size={60} />}
                    {card.cardType === "MasterCard" && (
                      <FaCcMastercard size={60} />
                    )}
                  </div>
                )}
                <button
                  onClick={() => handleDeleteCard(index)}
                  className="absolute right-[-10px] top-[-10px] flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white"
                >
                  &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isMobile ? (
        isModalOpen && (
          <div className="relative mb-4 rounded-md bg-white">
            <PaymentForm onClose={closeModal} onSave={handleSaveCard} />
          </div>
        )
      ) : (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <PaymentForm onClose={closeModal} onSave={handleSaveCard} />
        </Modal>
      )}
    </div>
  );
};

export default Payment;
