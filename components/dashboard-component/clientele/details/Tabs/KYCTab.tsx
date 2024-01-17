import React from "react";
import PDF from "../../../../../assets/png/Pdf.png";
import PNG from "../../../../../assets/png/Png.png";
import Image from "next/image";

const fileData = [
  {
    type: "PDF",
    image: PDF,
    name: "Offer Letter.pdf",
    date: "Jan 16, 2020",
    size: "14.1Mb",
  },
  {
    type: "PNG",
    image: PNG,
    name: "Drivers License.png",
    date: "Jan 16, 2020",
    size: "14.1Mb",
  },
  {
    type: "PDF",
    image: PDF,
    name: "Form CAC 7.pdf",
    date: "Jan 16, 2020",
    size: "14.1Mb",
  },
  {
    type: "PDF",
    image: PDF,
    name: "Memorandum and articles association.pdf",
    date: "Jan 16, 2020",
    size: "14.1Mb",
  },
  {
    type: "PNG",
    image: PNG,
    name: "Certificate of incorporation.png",
    date: "Jan 16, 2020",
    size: "14.1Mb",
  },
  // Add more file objects as needed
];

const KycTab = () => {
  return (
    <section>
      <div className="py-6 border-y mt-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 px-6 mt-4">
          {fileData.map((file, index) => (
            <span
              key={index}
              className="text-center p-4 rounded-lg border border-[#85BC2C] border-dashed"
            >
              <Image
                src={file.image}
                className="mx-auto my-2"
                alt={file.type}
              />
              <p className="font-semibold text-[#242F57] text-[0.875rem]">
                {file.name}
              </p>
              <p className="font-normal text-[#636E95] text-[0.75rem]">
                {file.date} | {file.size}
              </p>
              <button className="text-[#85BC2C] text-[0.75rem]">
                View File
              </button>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KycTab;
