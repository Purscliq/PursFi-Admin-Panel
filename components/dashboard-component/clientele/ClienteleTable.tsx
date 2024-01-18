"use client";

import React, { useState } from "react";
import Link from "next/link";

import { BsChevronLeft, BsChevronRight, BsThreeDots } from "react-icons/bs";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";
import { ClienteleTableData } from "./content";

const ClienteleTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = ClienteleTableData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(ClienteleTableData.length / itemsPerPage);

  const handlePageChange = (newPage: any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <a
        key={i}
        onClick={() => handlePageChange(i)}
        className={`p-3 rounded-lg cursor-pointer text-black ${
          currentPage === i ? "bg-black text-white" : "bg-white"
        }`}
      >
        {i}
      </a>
    );
  }

  return (
    <section>
      <div>
        <div className="space-y-8">
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm text-left text-[#181336]">
              {/* Table header */}
              <thead className="text-xs text-[#7C8493] border-b-2">
                <tr>
                  <th scope="col" className="px-6 py-3 text-base font-normal">
                    Business Name <HiMiniChevronUpDown className="inline" />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-base font-normal flex gap-1"
                  >
                    Type{" "}
                    <span className="py-1">
                      <HiMiniChevronUpDown className="h-4 w-4" />
                    </span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-normal">
                    Account <HiMiniChevronUpDown className="inline h-4 w-4" />
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-normal">
                    Email <HiMiniChevronUpDown className="inline h-4 w-4" />
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-normal">
                    Action <HiMiniChevronUpDown className="inline h-4 w-4" />
                  </th>
                </tr>
              </thead>
              {/* end of Table header) */}

              {/* Table body */}
              {displayedData.map((item, index) => (
                <tbody key={index}>
                  <tr className="bg-white hover:bg-gray-50 text-base text-[#25324B] font-normal border-b">
                    <td className="px-6 py-4">{item.businessname}</td>
                    <td className="px-6 py-4">{item.type}</td>
                    <td className="px-6 py-4 text-black">{item.account}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-4 py-4 flex gap-5">
                      {/* <Link href={`/clientele/details/${item.id}`}> */}
                      <Link href={`/clientele/details`}>
                        <button className="btn text-sm rounded-none normal-case  text-black bg-[#F3F8EA] border border-black hover:border  hover:border-black hover:bg-black/20 font-semibold">
                          View Details
                        </button>
                      </Link>
                      <div className="py-3">
                        <BsThreeDots className="h-6 w-6" title="Options" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        {/* Pagination */}
        <nav
          className="flex items-center bg-white rounded-b-lg justify-between py-0"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal px-6 text-[#515B6F]">
            View{" "}
            <span className="font-semibold text-gray-900">
              {startIndex + 1}-{endIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">
              {ClienteleTableData.length}
            </span>
            <button className="border-2 mx-2 p-[1.15rem]">
              <FaChevronDown className="inline w-4 h-4 -mt-1" /> {""}
              {""}
              10
            </button>
          </span>

          <div className="inline-flex space-x-2 px-4 text-sm py-4">
            <a
              onClick={() => handlePageChange(currentPage - 1)}
              className={`flex items-center justify-center text-[#25324B] 
                            ${
                              currentPage === 1
                                ? "cursor-not-allowed"
                                : "hover:bg-gray-100 cursor-pointer hover:text-gray-700"
                            }`}
            >
              <BsChevronLeft className="w-4 h-4" />
            </a>

            <p className="">{paginationButtons}</p>

            <a
              onClick={() => handlePageChange(currentPage + 1)}
              className={`flex items-center justify-center text-[#25324B]
                            ${
                              currentPage === totalPages
                                ? "cursor-not-allowed"
                                : "hover:bg-gray-100 cursor-pointer hover:text-gray-700"
                            }`}
            >
              <BsChevronRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default ClienteleTable;
