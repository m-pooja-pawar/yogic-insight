export function downloadFileFromArrayBuffer(data: ArrayBuffer, fileName: string, type: string): void {
  const blob = new Blob([new Uint8Array(data)], {
    type,
  });
  downlaodFileFromBlob(blob, fileName);
}

export function downlaodFileFromBlob(blob: Blob, fileName: string): void {
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}
