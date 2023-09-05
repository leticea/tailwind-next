"use client";

import { useFileInput } from "./Root";

export function FileList() {
  const { files } = useFileInput();
  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return <p key={file.name}>{file.name}</p>;
      })}
    </div>
  );
}
