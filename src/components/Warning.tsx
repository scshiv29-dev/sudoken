'use client';
import { useEffect } from "react";

const UnsavedChangesWarning: React.FC = () => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ""; // This is required for some browsers to show the alert.
    };

    // Add the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null; // This component doesn't render anything, it just adds the warning
};

export default UnsavedChangesWarning;
