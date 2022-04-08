const dragEvents = ['dragover', 'dragenter', 'drop'];

export function fileAccepted(file: File, accept: string | undefined) {
  return file.type === 'application/x-moz-file' || accepts(file, accept);
}

export function getDataTransferFiles(event: DragEvent | Event) {
  if (isDragEvent(event) && event.dataTransfer) {
    console.log('drag');
    const dt = event.dataTransfer;

    if (dt.files && dt.files.length) {
      return Array.from(dt.files);
    } else if (dt.items && dt.items.length) {
      // Chrome is the only browser that allows to read the file list on drag
      // events and uses `items` instead of `files` in this case.
      return Array.from(dt.items);
    }
  } else if (isChangeEvent(event) && (event.target as HTMLInputElement).files) {
    // Return files from even when a file was selected from an upload dialog
    const target = (event.target as HTMLInputElement);
    return Array.from(target.files || []);
  }

  return [];
}

function accepts(file: File, acceptedFiles: string | string[] | undefined) {
  if (file && acceptedFiles) {
    const fileName = file.name || '';
    const mimeType = file.type || '';
    const baseMimeType = mimeType.replace(/\/.*$/, '');
    const acceptedFilesArray = Array.isArray(acceptedFiles)
      ? acceptedFiles
      : acceptedFiles.split(',');

    return acceptedFilesArray.some((type) => {
      const validType = type.trim();
      if (validType.startsWith('.')) {
        return fileName.toLowerCase().endsWith(validType.toLowerCase());
      } else if (validType.endsWith('/*')) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
}

function isDragEvent(event: DragEvent | Event): event is DragEvent {
  return dragEvents.indexOf(event.type) > 0;
}

function isChangeEvent(event: DragEvent | Event): event is Event {
  return event.type === 'change';
}

export const defaultAllowMultiple = true;

export function createAllowMultipleKey(allowMultiple: boolean) {
  return allowMultiple ? 'allowMultiple' : 'single';
}
