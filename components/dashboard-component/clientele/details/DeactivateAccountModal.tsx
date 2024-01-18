"use client";

export function DeactivateAccountModal() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-ghost hover:bg-transparent p-0"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <label
          htmlFor="AcceptConditions"
          title="Deactivate ADS"
          className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
        >
          <input
            type="checkbox"
            id="AcceptConditions"
            // defaultChecked
            className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
          />

          <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"></span>

          <span className="absolute inset-0 rounded-full bg-[#E93C3C] transition peer-checked:bg-green-500"></span>
        </label>
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-inherit">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="border-b pb-1">
            <h1 className="font-bold text-[#242F57] text-[1.5625rem]">
              Account Deactivation
            </h1>
            <p className="text-[#636E95] text-base">
              Deactivating this account will disable the business from using it
            </p>
          </div>
          <div className="mt-8">
            <p className="text-[#25324B] text-base">Give reason</p>
            <textarea
              required
              className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            ></textarea>
            <p className="text-[#F6513B] text-center">
              Are you sure you want to deactivate this account
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
