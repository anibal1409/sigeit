export class BlobVM {
  blob: Blob;
  filename: string;

  constructor(blob: Blob, filename: string) {
    this.blob = blob;
    this.filename = filename;
  }
}