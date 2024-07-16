"use client";

import React, { useState, useEffect } from "react";
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

type FormProps = {
  onClose: () => void;
  onSave: (info: UserInfo) => void;
  userInfo: UserInfo | null;
  errors: { [key: string]: string };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  setCurrentUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
};

const FormAddresse: React.FC<FormProps> = ({
  onClose,
  onSave,
  userInfo,
  errors,
  setErrors,
  setCurrentUserInfo,
}) => {
  const [firstName, setFirstName] = useState(userInfo?.firstName || "");
  const [lastName, setLastName] = useState(userInfo?.lastName || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [phone, setPhone] = useState(userInfo?.phone || "");
  const [address, setAddress] = useState<Address>(
    userInfo?.address || {
      addressLine1: "",
      addressLine2: "",
      postalCode: "",
      state: "",
      city: "",
    },
  );

  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setEmail(userInfo.email);
      setPhone(userInfo.phone);
      setAddress(userInfo.address);
    }
  }, [userInfo]);

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "First Name is required";
    if (!lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    if (!address.addressLine1.trim())
      newErrors.addressLine1 = "Address Line 1 is required";
    if (!address.city.trim()) newErrors.city = "City is required";
    if (!address.postalCode.trim())
      newErrors.postalCode = "Postal Code is required";
    if (!address.state.trim()) newErrors.state = "State/Province is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateFields()) {
      const updatedUserInfo: UserInfo = {
        firstName,
        lastName,
        email,
        phone,
        address,
      };
      onSave(updatedUserInfo);
    }
  };

  return (
    <div>
      <div
        className="absolute left-0 top-0 h-2 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, red 0 112px, white 112px 212px, blue 212px 312px, white 312px 412px)",
        }}
      ></div>
      <h2 className="my-6 text-xl font-semibold">Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-0 md:space-y-1">
          <label className="text-sm text-gray-600">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`rounded-md border px-2 py-1 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500 focus:outline-none`}
          />
          <div className="min-h-[12px]">
            {errors.firstName && (
              <p className="text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-0 md:space-y-1">
          <label className="text-sm text-gray-600">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`rounded-md border px-2 py-1 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500 focus:outline-none`}
          />
          <div className="min-h-[12px]">
            {errors.lastName && (
              <p className="text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-0 md:space-y-1">
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full rounded-md border px-2 py-1 ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:border-blue-500 focus:outline-none`}
        />
        <div className="min-h-[12px]">
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="space-y-0 md:space-y-1">
        <label className="text-sm text-gray-600">Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full rounded-md border px-2 py-1 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } focus:border-blue-500 focus:outline-none`}
        />
        <div className="min-h-[12px]">
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>
      <h3 className="mt-3 text-lg font-medium">Street Address</h3>
      <div className="space-y-0 md:space-y-1">
        <label className="text-sm text-gray-600">Address Line 1</label>
        <input
          type="text"
          value={address.addressLine1}
          onChange={(e) =>
            setAddress({ ...address, addressLine1: e.target.value })
          }
          className={`w-full rounded-md border px-2 py-1 ${
            errors.addressLine1 ? "border-red-500" : "border-gray-300"
          } focus:border-blue-500 focus:outline-none`}
        />
        <div className="min-h-[12px]">
          {errors.addressLine1 && (
            <p className="text-xs text-red-500">{errors.addressLine1}</p>
          )}
        </div>
      </div>
      <div className="space-y-0 md:space-y-1">
        <label className="text-sm text-gray-600">Address Line 2</label>
        <input
          type="text"
          value={address.addressLine2}
          onChange={(e) =>
            setAddress({ ...address, addressLine2: e.target.value })
          }
          className="w-full rounded-md border border-gray-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="space-y-0 md:space-y-1">
        <label className="text-sm text-gray-600">City</label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
          className={`w-full rounded-md border px-2 py-1 ${
            errors.city ? "border-red-500" : "border-gray-300"
          } focus:border-blue-500 focus:outline-none`}
        />
        <div className="min-h-[12px]">
          {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex w-1/2 flex-col space-y-0 md:space-y-1">
          <label className="text-sm text-gray-600">Postal Code</label>
          <input
            type="text"
            value={address.postalCode}
            onChange={(e) =>
              setAddress({ ...address, postalCode: e.target.value })
            }
            className={`w-full rounded-md border px-2 py-1 ${
              errors.postalCode ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500 focus:outline-none`}
          />
          <div className="min-h-[12px]">
            {errors.postalCode && (
              <p className="text-xs text-red-500">{errors.postalCode}</p>
            )}
          </div>
        </div>
        <div className="flex w-1/2 flex-col space-y-0 md:space-y-1">
          <label className="text-sm text-gray-600">State/Province</label>
          <input
            type="text"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
            className={`w-full rounded-md border px-2 py-1 ${
              errors.state ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500 focus:outline-none`}
          />
          <div className="min-h-[12px]">
            {errors.state && (
              <p className="text-xs text-red-500">{errors.state}</p>
            )}
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-end space-x-4">
        <button onClick={onClose} className={button.cancel}>
          Cancel
        </button>
        <button onClick={handleSave} className={button.save}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FormAddresse;
