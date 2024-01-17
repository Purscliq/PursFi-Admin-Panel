const timelineData = [
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  {
    title: "Attempted card debit. response: 539983******5870 = Declined",
    date: "Date: Thu Nov 4, 2021 9:05AM",
  },
  // Add more timeline items as needed
];

const RecentActivitiesTab = () => {
  return (
    <section className="py-6">
      <div className="border-y py-4">
        <p className="px-4 font-semibold text-[1.1875rem] text-[#25324B]">
          Recent Activities
        </p>
        <p className="px-4 text-base text-[#7C8493]">
          This information can not be created and edited
        </p>
      </div>

      {/* timeline section */}
      <div className="flex-1 pb-2 border-b">
        <div className="relative px-4">
          <div className="absolute h-full border border-opacity-20 border-[#623CEA]"></div>

          {timelineData.map((item, index) => (
            <div key={index} className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-[#0AA07B] rounded-full"></div>
              </div>
              <div className="w-11/12">
                <p className="text-[0.75rem] text-[#0A302B]">{item.title}</p>
                <p className="text-[0.625rem] text-[#7C88B1]">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivitiesTab;
