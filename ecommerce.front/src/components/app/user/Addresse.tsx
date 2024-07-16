"use client";

import React, { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "./form/Modal";
import FormAddresse from "./form/FormAddresse";
import { button } from "@/components/common/styles";

type Address = {
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  state: string;
  city: string;
};

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
};

const Addresse: React.FC = () => {
  const isMobile = useMediaQuery(768);
  const [isEditing, setIsEditing] = useState(false);
  const [userInfos, setUserInfos] = useState<UserInfo[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [currentUserInfo, setCurrentUserInfo] = useState<UserInfo | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleOpenForm = (index: number | null = null) => {
    setEditingIndex(index);
    if (index !== null) {
      setCurrentUserInfo(userInfos[index]);
    } else {
      setCurrentUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: {
          addressLine1: "",
          addressLine2: "",
          postalCode: "",
          state: "",
          city: "",
        },
      });
    }
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
    setEditingIndex(null);
    setCurrentUserInfo(null);
    setErrors({});
  };

  const handleSaveInfo = (info: UserInfo) => {
    if (editingIndex !== null) {
      const updatedInfos = [...userInfos];
      updatedInfos[editingIndex] = info;
      setUserInfos(updatedInfos);
    } else {
      setUserInfos([...userInfos, info]);
    }
    handleCloseForm();
  };

  return (
    <div className="flex min-h-[70vh] flex-col px-4 md:px-0">
      <div className="mb-10 flex justify-between">
        <h1 className="text-xl font-semibold">Card Addresses</h1>
        <button onClick={() => handleOpenForm(null)} className={button.save}>
          Add Address
        </button>
      </div>
      {isEditing && isMobile ? (
        <div className="relative mb-4 rounded-md bg-white p-6 shadow-md">
          <FormAddresse
            onClose={handleCloseForm}
            onSave={handleSaveInfo}
            userInfo={currentUserInfo}
            errors={errors}
            setErrors={setErrors}
            setCurrentUserInfo={setCurrentUserInfo}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {userInfos.length === 0 ? (
            <p>No addresses available. Please add one.</p>
          ) : (
            userInfos.map((userInfo, index) => (
              <div
                key={index}
                className="relative mb-4 rounded-md bg-white p-6 shadow-md"
              >
                <div
                  className="absolute left-0 top-0 h-2 w-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, red 0 112px, white 112px 212px, blue 212px 312px, white 312px 412px)",
                  }}
                ></div>
                <h1 className="text-md my-4 font-medium">
                  {userInfo.address.addressLine1}
                </h1>
                <p className="text-sm">
                  Name: {userInfo.firstName} {userInfo.lastName}
                </p>
                <p className="text-sm">Email: {userInfo.email}</p>
                <p className="text-sm">Phone: {userInfo.phone}</p>
                <h2 className="text-md mt-4 font-medium">Street Address</h2>
                <div className="mb-4 rounded-md border p-4">
                  <p className="text-sm">
                    Address Line 1: {userInfo.address.addressLine1}
                  </p>
                  <p className="text-sm">
                    Address Line 2: {userInfo.address.addressLine2}
                  </p>
                  <p className="text-sm">
                    Postal Code: {userInfo.address.postalCode}
                  </p>
                  <p className="text-sm">
                    State/Province: {userInfo.address.state}
                  </p>
                  <p className="text-sm">City: {userInfo.address.city}</p>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => handleOpenForm(index)}
                    className={button.edit}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      setUserInfos(userInfos.filter((_, i) => i !== index))
                    }
                    className={button.delete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      {!isMobile && (
        <Modal isOpen={isEditing} onClose={handleCloseForm}>
          <FormAddresse
            onClose={handleCloseForm}
            onSave={handleSaveInfo}
            userInfo={currentUserInfo}
            errors={errors}
            setErrors={setErrors}
            setCurrentUserInfo={setCurrentUserInfo}
          />
        </Modal>
      )}
    </div>
  );
};

export default Addresse;
