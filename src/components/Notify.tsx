import { toast } from "react-hot-toast";

const Notify = (text: string, duration: number = 4000) =>
  toast(text, {
    duration: duration,
    position: "top-right",

    // Styling
    style: {
      backgroundColor: "var(--background-color)",
      backdropFilter: "blur(20px)",
      color: "var(--text-color)",
    },
    className: "",

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export default Notify;
