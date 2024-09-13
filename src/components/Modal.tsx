"use client";

import { ModalData } from "@/lib/constants";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
export default function Modal({
  modal,
  closeModal,
}: {
  modal: ModalData;
  closeModal: () => void;
}) {
  const { color, title, desc } = modal;
  return (
    <AlertDialog open={!!modal} onOpenChange={(v) => null}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className={color}>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => closeModal()}>
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
