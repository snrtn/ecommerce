"use client";

import React, { useState } from "react";
import FormGallery from "./form/FormGallery";
import { ordersData, OrderItem, Order } from "./data/ordersData";
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "./form/Modal";
import { button } from "@/components/common/styles";

const Gallery: React.FC = () => {
  const isMobile = useMediaQuery(768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryData, setGalleryData] = useState<any[]>([]);
  const [editingData, setEditingData] = useState<any | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingData(null);
  };

  const handleSave = (data: any) => {
    if (editingData) {
      setGalleryData(
        galleryData.map((item) => (item === editingData ? data : item)),
      );
    } else {
      setGalleryData([...galleryData, data]);
    }
    closeModal();
  };

  const handleEdit = (data: any) => {
    setEditingData(data);
    setIsModalOpen(true);
  };

  const handleDelete = (data: any) => {
    setGalleryData(galleryData.filter((item) => item !== data));
  };

  return (
    <div className="min-h-[70vh] px-4 md:px-0">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Gallery</h1>
        <button onClick={openModal} className={button.save}>
          Add Gallery
        </button>
      </div>
      {isMobile ? (
        isModalOpen && (
          <div className="relative mb-4 rounded-md bg-white p-6 shadow-md">
            <FormGallery
              onClose={closeModal}
              orders={ordersData}
              onSave={handleSave}
              initialData={editingData}
            />
          </div>
        )
      ) : (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <FormGallery
            onClose={closeModal}
            orders={ordersData}
            onSave={handleSave}
            initialData={editingData}
          />
        </Modal>
      )}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {galleryData.map((data, index) => (
          <div key={index} className="rounded border p-4 shadow">
            <div className="mb-6">
              <strong>Gender:</strong> {data.gender}
            </div>
            <div>
              <strong>Order List:</strong>
              <ul className="flex h-40 flex-col gap-2 overflow-y-auto">
                {data.orderList.map((item: OrderItem, idx: number) => (
                  <li key={idx} className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mr-2 inline-block h-10 w-10"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <strong>Uploaded Images:</strong>
              <div className="flex h-40 flex-wrap overflow-y-auto">
                {data.selectedFiles.map((src: string, idx: number) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`uploaded-${idx}`}
                    className="m-1 h-20 w-20 object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button onClick={() => handleEdit(data)} className={button.edit}>
                Edit
              </button>
              <button
                onClick={() => handleDelete(data)}
                className={button.delete}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
