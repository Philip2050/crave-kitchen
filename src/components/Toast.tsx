"use client";

import { Transition } from "@headlessui/react";
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";

export type ToastType = "success" | "error" | "info";

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastProps {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

export default function Toast({ toast, onClose }: ToastProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onClose(toast.id), 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast.id, onClose]);

  const icons = {
    success: CheckCircleIcon,
    error: ExclamationCircleIcon,
    info: CheckCircleIcon,
  };

  const Icon = icons[toast.type];

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Icon className={`h-6 w-6 ${toast.type === "success" ? "text-green-400" : toast.type === "error" ? "text-red-400" : "text-blue-400"}`} />
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {toast.message}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="bg-white dark:bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  setShow(false);
                  setTimeout(() => onClose(toast.id), 300);
                }}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}