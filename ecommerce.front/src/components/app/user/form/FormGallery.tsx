"use client";

import React, { useState, useEffect } from "react";
import { Order, OrderItem } from "../data/ordersData";
import { button } from "@/components/common/styles";

interface FormGalleryProps {
  onClose: () => void;
  orders: Order[];
  onSave: (data: any) => void;
  initialData?: any;
}

const FormGallery: React.FC<FormGalleryProps> = ({
  onClose,
  orders,
  onSave,
  initialData,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [filePreviews, setFilePreviews] = useState<string[]>(
    initialData ? initialData.selectedFiles : [],
  );
  const [gender, setGender] = useState<"male" | "female">(
    initialData ? initialData.gender : "male",
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<OrderItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [orderList, setOrderList] = useState<OrderItem[]>(
    initialData ? initialData.orderList : [],
  );

  useEffect(() => {
    setSuggestions(
      orders
        .flatMap((order) => order.items)
        .filter(
          (item) => !orderList.some((orderItem) => orderItem.id === item.id),
        ),
    );
  }, [orders, orderList]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);
    if (files) {
      const previews = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );
      setFilePreviews((prevPreviews) => [...prevPreviews, ...previews]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setFilePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index),
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const matchedItems = orders
        .flatMap((order) => order.items)
        .filter(
          (item) =>
            item.name.toLowerCase().includes(value.toLowerCase()) &&
            !orderList.some((orderItem) => orderItem.id === item.id),
        );
      setSuggestions(matchedItems);
      setShowDropdown(true);
    } else {
      setSuggestions(
        orders
          .flatMap((order) => order.items)
          .filter(
            (item) => !orderList.some((orderItem) => orderItem.id === item.id),
          ),
      );
      setShowDropdown(true);
    }
  };

  const handleSuggestionClick = (item: OrderItem) => {
    setOrderList((prevOrderList) => [...prevOrderList, item]);
    setSearchTerm("");
    setShowDropdown(false);
  };

  const handleSave = () => {
    const data = {
      selectedFiles: filePreviews,
      gender,
      orderList,
    };
    onSave(data);
    onClose();
  };

  return (
    <div>
      <h2 className="mb-4 text-xl">Gallery</h2>
      <div className="mb-4">
        <label className="mb-2 block">Upload Images</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mb-4"
        />
        <div className="flex h-40 flex-wrap gap-4 space-x-2 overflow-y-auto pt-10 md:h-80">
          {filePreviews.map((src, index) => (
            <div key={index} className="relative h-60 w-60">
              <img
                src={src}
                alt={`preview-${index}`}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute right-0 top-0 h-8 w-8 rounded-full bg-red-500 p-1 text-white"
                style={{ transform: "translate(50%, -50%)" }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Gender</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            Female
          </label>
        </div>
      </div>
      <div className="relative mb-4">
        <label className="mb-2 block">Order Product</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowDropdown(true)}
          placeholder="Search for a product"
          className="mb-2 w-full border p-2"
        />
        {showDropdown && (
          <div className="absolute z-10 max-h-60 w-full overflow-y-auto border bg-white shadow-lg">
            {suggestions.map((item, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center p-2 hover:bg-gray-100"
                onClick={() => handleSuggestionClick(item)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mr-2 h-10 w-10 object-cover"
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <ul className="mb-4 h-28 list-disc overflow-y-auto pl-5">
        {orderList.map((item, index) => (
          <li key={index} className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="mr-2 h-10 w-10 object-cover"
              />
              <span>{item.name}</span>
            </div>
            <button
              onClick={() =>
                setOrderList(orderList.filter((_, i) => i !== index))
              }
              className={button.delete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end gap-2">
        <button onClick={onClose} className="rounded px-4 py-2 text-black">
          Close
        </button>
        <button onClick={handleSave} className={button.save}>
          Save
        </button>
      </div>
    </div>
  );
};

export default FormGallery;
