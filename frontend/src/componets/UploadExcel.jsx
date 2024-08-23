import React, { useState } from "react";

function UploadExcel({ handleFileChange, selectedFile, setSelectedFile }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Upload Excel File
        </h1>
        <div className="mb-4">
          <label
            htmlFor="fileInput"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Select Excel File
          </label>
          <input
            id="fileInput"
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {selectedFile.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadExcel;
