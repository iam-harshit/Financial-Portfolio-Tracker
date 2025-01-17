import toast from "react-hot-toast";

export const showErrorToast = (errorMessage) => {
  toast.error(errorMessage);
};

export const showSuccessToast = (successMessage) => {
  toast.success(successMessage);
};
