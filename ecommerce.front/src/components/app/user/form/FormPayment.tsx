"use client";

import React, { useState, useEffect } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
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

export type PaymentFormProps = {
  onClose: () => void;
  onSave: (card: Card) => void;
  initialCardData?: Card | null;
};

const FormPayment: React.FC<PaymentFormProps> = ({
  onClose,
  onSave,
  initialCardData,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiryError, setExpiryError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [cardNumberError, setCardNumberError] = useState(false);
  const [cvvError, setCvvError] = useState(false);

  useEffect(() => {
    if (initialCardData) {
      setFirstName(initialCardData.firstName);
      setLastName(initialCardData.lastName);
      setCardNumber(initialCardData.cardNumber);
      setExpiryDate(initialCardData.expiryDate);
      setCvv(initialCardData.cvv);
      setCardType(initialCardData.cardType);
    }
  }, [initialCardData]);

  const formatCardNumber = (value: string) => {
    return value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "");
    setCardNumber(formatCardNumber(value));

    const firstDigit = value[0];
    if (firstDigit === "4") {
      setCardType("Visa");
    } else if (firstDigit === "5") {
      setCardType("MasterCard");
    } else {
      setCardType("");
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiryDate(value);

    const currentYear = new Date().getFullYear() % 100;
    const [month, year] = value.split("/").map(Number);
    if (
      year < currentYear ||
      (year === currentYear && month < new Date().getMonth() + 1)
    ) {
      setExpiryError(true);
    } else {
      setExpiryError(false);
    }
  };

  const handleSaveCard = () => {
    let hasError = false;
    if (!firstName) {
      setFirstNameError(true);
      hasError = true;
    } else {
      setFirstNameError(false);
    }

    if (!lastName) {
      setLastNameError(true);
      hasError = true;
    } else {
      setLastNameError(false);
    }

    if (!cardNumber || cardNumber.length < 19) {
      setCardNumberError(true);
      hasError = true;
    } else {
      setCardNumberError(false);
    }

    if (!cvv) {
      setCvvError(true);
      hasError = true;
    } else {
      setCvvError(false);
    }

    if (expiryError) {
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newCard: Card = {
      firstName,
      lastName,
      cardNumber,
      expiryDate,
      cvv,
      cardType,
      disabled: false,
    };

    const currentYear = new Date().getFullYear() % 100;
    const [month, year] = expiryDate.split("/").map(Number);
    if (
      year < currentYear ||
      (year === currentYear && month < new Date().getMonth() + 1)
    ) {
      newCard.disabled = true;
    }

    onSave(newCard);
    onClose();
  };

  return (
    <div>
      <h2 className="my-4 hidden text-xl md:flex">Add Payment</h2>
      <div className="mb-4 flex flex-col md:flex-row">
        <div className="w-full pr-0 md:w-1/2 md:pr-4">
          <div className="mb-4">
            <label className="mb-2 block">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border p-2"
            />
            {firstNameError && (
              <p className="mt-1 text-xs text-red-500">
                First Name is required
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="mb-2 block">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border p-2"
            />
            {lastNameError && (
              <p className="mt-1 text-xs text-red-500">Last Name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label className="mb-2 block">
              Card Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full border p-2"
              maxLength={19}
            />
            {cardNumberError && (
              <p className="mt-1 text-xs text-red-500">
                Card Number is required and must be 16 digits
              </p>
            )}
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2">
              <label className="mb-2 block">
                Valid Through<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className="w-full border p-2"
                maxLength={5}
              />
              {expiryError && (
                <p className="mt-1 text-xs text-red-500">Invalid expiry date</p>
              )}
            </div>
            <div className="ml-2 w-1/2">
              <label className="mb-2 block">
                CVV<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full border p-2"
                maxLength={4}
              />
              {cvvError && (
                <p className="mt-1 text-xs text-red-500">CVV is required</p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:h-full md:w-1/2">
          <div className="card bordertext-white relative rounded-md">
            <div className="chip">
              <Image src="/sim.png" alt="Chip" fill />
            </div>
            <div className="mb-2 mt-20 text-xs">
              {cardNumber ? cardNumber : "XXXX XXXX XXXX XXXX"}
            </div>
            <div className="card-info flex items-start justify-between">
              <div className="flex flex-1 flex-col">
                <p className="text-[10px] text-gray-300">CARD HOLDER NAME</p>
                <div className="card-name text-xs">
                  {firstName || lastName
                    ? `${firstName} ${lastName}`
                    : "XXX XXX"}
                </div>
              </div>
              <div className="flexflex-col pl-6 md:pl-0">
                <p className="text-[10px] text-gray-300">VALID THRU</p>
                <div className="text-xs">
                  {expiryDate ? expiryDate : "MM/YY"}
                </div>
              </div>
            </div>
            {cardType && (
              <div className="card-logo absolute right-7 top-4">
                {cardType === "Visa" && <FaCcVisa size={60} />}
                {cardType === "MasterCard" && <FaCcMastercard size={60} />}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button onClick={onClose} className={button.cancel}>
          Cancel
        </button>
        <button onClick={handleSaveCard} className={button.save}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FormPayment;
