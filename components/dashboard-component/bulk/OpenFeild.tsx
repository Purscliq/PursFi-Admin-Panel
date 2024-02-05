"use client";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { MdSend } from "react-icons/md";
import { IoReturnUpForwardOutline } from "react-icons/io5";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
interface Props {
    cancel: () => void;
  }
const OpenFeild:React.FC<Props> = ({cancel}) => {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  return (
    <div className="mt-5 p-4 w-full  md:w-[800px] h-full bg-white border">
      <div className="flex items-center mb-4">
        <span className="font-bold mr-2">Recipent:</span>
        <div className="flex-grow px-2 py-1 border-b " />
      </div>
      <div className="flex items-center mb-4">
        <span className="font-bold mr-2">Subject:</span>
        <div className="flex-grow px-2 py-1 border-b " />
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        formats={formats}
        modules={modules}
        className="custom-quill-editor flex-grow !h-[300px] rounded"
      />
      <div className="px-4">
        <button onClick={cancel} className="btn btn-sm   text-white text-sm bg-black hover:bg-black font-normal rounded-[0.25rem]">
          Send
        </button>
      </div>
    </div>
  );
};

export default OpenFeild;
