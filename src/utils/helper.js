import { client } from "@axiosClient";
import Bugsnag from "@bugsnag/js";
import { toast } from "react-toastify";

import { BASE_URL, URL } from "@constants/urls";
import { useEffect } from "react";

//handle images upload and delete to cdn
const changeFileName = (file, fileName) => {
  const extension = file.name.split(".").pop(); // Get the file extension
  const modifiedFileName = fileName ? `${fileName}.${extension}` : file.name;
  const newFilename = modifiedFileName.replace(/\s+/g, "");

  return new File([file], newFilename, { type: file.type });
};

export const uploadImage = async (file, storeId, fileName = "", folder) => {
  if (!file) return;
  try {
    const image = changeFileName(file, fileName);

    const res = await client.post(
      `${BASE_URL}${URL.uploadAllImage}`,
      {
        image,
        //not needed when uploading directly for particular storeId
        // folderName: folder,
        storeId: storeId,
      },
      {
        headers: {
          "content-Type": "multipart/form-data",
        },
      }
    );

    return res?.data?.imageUrl;
  } catch (error) {
    Bugsnag.notify(error);
  }
};

const updateStoreImagesData = async (storeImages, storeId, setStoreImages) => {
  if (!storeId) return;
  try {
    const response = await client.patch(URL.updateStore, {
      storeImages,
      storeId,
    });
    setStoreImages(response?.data?.data?.storeImages);
  } catch (error) {
    toast.error("Failed to update");
    Bugsnag.notify(error);
  }
};

export const deleteImage = async (
  imageUrl,
  storeImages,
  boolUpdateValue = false,
  setStoreImages,
  errorMsg = "Error in deleting file"
) => {
  try {
    if (!imageUrl) return;
    const trimmedUrl = imageUrl.replace(
      /^https:\/\/assets-pamprazzi\.b-cdn\.net\store\//,
      ""
    );
    const parts = trimmedUrl.split("/");
    const fileName = parts.pop();
    const storeId = parts.pop();
    await client.post(`${BASE_URL}${URL.deleteImage}`, {
      fileName,
      storeId,
    });
    if (boolUpdateValue) {
      updateStoreImagesData(storeImages, storeId, setStoreImages);
    }
    toast.success("File deleted successfully");
  } catch (error) {
    Bugsnag.notify(error);
    toast.error(errorMsg);
  }
};

//track
export const trackEvent = async () => {};
