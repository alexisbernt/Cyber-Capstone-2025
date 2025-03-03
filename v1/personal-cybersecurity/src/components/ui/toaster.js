import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#333",
          color: "#fff",
          fontSize: "24px",
        },
        success: {
          style: {
            background: "#4caf50",
          },
        },
        error: {
          style: {
            background: "#f44336",
          },
        },
      }}
    />
  );
}
