"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Modal({ color, diff }: any) {
  console.log(diff)
  const router = useRouter();
  const dif = diff.toLowerCase();

  useEffect(() => {
    // Polyfill for HTMLDialogElement if not supported by the browser
    if (typeof HTMLDialogElement === "undefined") {
      import("dialog-polyfill").then((dialogPolyfill) => {
        dialogPolyfill.registerDialog(document.getElementById("my_modal_1"));
      });
    }
  }, []);

  const openModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  };

  const handlePlayNow = (e: any) => {
    e.preventDefault();
    closeModal();
    router.push(`/play/${dif}`);
  };

  return (
    <div>
      <button className={`btn ${color}`} onClick={openModal}>
        Play Now
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Click `Play Now` below once you are ready. Time starts the moment you land on the game page .
          </p>
          <div className="modal-action">
            <button className={`btn ${color}`} onClick={handlePlayNow}>
              Play Now
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
