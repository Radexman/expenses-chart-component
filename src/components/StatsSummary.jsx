const StatsSummary = () => {
  return (
    <div className="mt-8">
      <div className="border-t-2 border-primary-cyan opacity-80"></div>
      <div className="mt-8 flex items-end justify-between">
        <div className="space-y-2">
          <p className="text-primary-cyan">Total this month</p>
          <p className="text-3xl font-bold text-neutral-darkBrown">$478.33</p>
        </div>
        <div className="">
          <p className="text-right font-bold text-neutral-darkBrown">+2.4%</p>
          <p className="text-primary-cyan">form last month</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary;
