import React, { useState } from "react";
import { toast } from "react-toastify";

const EditVirtualOfficePriceModal = ({ data, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: data.id,
    min_duration: data.min_duration,
    max_duration: data.max_duration,
    price: data.price,
    gst: data.gst,
    status: data.status,
  });

  /* ✅ AUTO GST CALCULATION — PLACE HERE */
  const gstAmount = (Number(formData.price) * Number(formData.gst)) / 100;
  const totalPrice = Number(formData.price) + gstAmount;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* ✅ FRONTEND VALIDATION — PLACE HERE */
    if (formData.gst < 0 || formData.gst > 28) {
      toast.error("GST must be between 0% and 28%");
      return;
    }

    if (formData.price <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">
          Edit Virtual Office Price
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Min Duration *
            </label>
            <input
              type="text"
              name="min_duration"
              value={formData.min_duration}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Max Duration *
            </label>
            <input
              type="text"
              name="max_duration"
              value={formData.max_duration}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          {/* GST Input */}
          <div>
            <label className="block text-sm font-medium mb-1">GST (%) *</label>
            <input
              type="number"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* ✅ GST BREAKDOWN — PLACE HERE */}
          <div className="bg-gray-50 border rounded p-3 text-sm space-y-1">
            <p>
              <strong>Base Price:</strong> ₹{formData.price}
            </p>
            <p>
              <strong>GST ({formData.gst}%):</strong> ₹{gstAmount.toFixed(2)}
            </p>
            <p className="font-semibold text-green-700">
              Total (Incl. GST): ₹{totalPrice.toFixed(2)}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVirtualOfficePriceModal;
