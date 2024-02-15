"use client";
import ClienteleTAble from "./ClenteleTAble";
import { useGetUserQuery } from "@/services/authService";

const Clientele = () => {
  const { data: user, isLoading:isLoadingUserDetails } = useGetUserQuery({});
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Clientele</h2>
        <p className="text-[16px] text-[#7C8493]">
          Showing the list of clientele you have on PursBusiness{" "}
        </p>
      </span>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px] mt-5">
        <span className="p-4 bg-[#0AA07B26] rounded-[1.25rem] space-y-2">
          <h1 className="text-xl font-semibold">No of Clientele</h1>
          <p className="text-sm">Total number of customer in pursbusiness</p>
          <h1 className="text-xl font-semibold">
            {isLoadingUserDetails ? (
              <span className="loading loading-dots loading-xs"></span>
            ) : (
              user?.totaluser
            )}
          </h1>
        </span>

        <span className="p-4 bg-[#3180E726] rounded-[1.25rem] space-y-2">
          <h1 className="text-xl font-semibold">Active Clientele</h1>
          <p className="text-sm">Total number of active users </p>
          <h1 className="text-xl font-semibold">{isLoadingUserDetails?<span className="loading loading-dots loading-xs"></span>:user?.activeuser}</h1>
        </span>

        <span className="p-4 bg-[#F6513B26] rounded-[1.25rem] space-y-2">
          <h1 className="text-xl font-semibold">Inactive Clientele</h1>
          <p className="text-sm">Total number of user under this age </p>
          <h1 className="text-xl font-semibold">{isLoadingUserDetails?<span className="loading loading-dots loading-xs"></span>:user?.inactiveuser}</h1>
        </span>
      </div>

   <ClienteleTAble />
    </section>
  );
};

export default Clientele;
