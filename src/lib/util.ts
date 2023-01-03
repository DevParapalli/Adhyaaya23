import {toast} from 'svelte-french-toast';


export function toastError(message: string, duration=5000) {
    toast.error(message, {
        duration,
        position: 'top-right',
        className: '!bg-red-300'
    });
}


export function toastSuccess(message: string, duration=5000) {
    toast.success(message, {
        duration,
        position: 'top-right',
        className: '!bg-green-300'
    });
}

export function toastInfo(message: string, duration=5000) {
    toast.success(message, {
        duration,
        icon: '\u2139',
        position: 'top-right',
        className: '!bg-blue-300'
    });
}

export function toastWarning(message: string, duration=5000) {
    toast.error(message, {
        duration,
        position: 'top-right',
        className: '!bg-yellow-300'
    });
}



type StructuredFormData =
  | string
  | boolean
  | number
  | File
  | StructuredFormData[];

export function convertToJSON(body: FormData) {
  return [...body.entries()].reduce((data, [k, v]) => {
    let value: StructuredFormData = v;
    if (v === "true") value = true;
    if (v === "false") value = false;
    if (!isNaN(Number(v))) value = Number(v);

    // For grouped fields like multi-selects and checkboxes, we need to
    // store the values in an array.
    if (k in data) {
      const val = data[k];
      value = Array.isArray(val) ? [...val, value] : [val, value];
    }

    data[k] = value;

    return data;
  }, {} as Record<string, StructuredFormData>);
}

import {toCanvas} from 'bwip-js';

export function getQRCode(text: string) {
  const canvas = document.createElement('canvas');
  toCanvas(canvas, {
    bcid: 'qrcode',
    text,
  });
  return canvas.toDataURL();
}