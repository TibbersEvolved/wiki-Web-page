import { toast } from "react-toastify";

export function userNotification(message: string, good: boolean) {
  if (good) {
    toast.success(message, { position: "top-left" });
  } else {
    toast.warn(message, {
      position: "top-left",
    });
  }
}
