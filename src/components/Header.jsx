const Header = () => {
  return (
    <header className="bg-primary-softRed text-neutral-veryPaleOrange flex items-center justify-between rounded-xl p-6 shadow-lg">
      <div className="space-y-2">
        <p>My balance</p>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <div className="relative flex">
        <div className="border-neutral-veryPaleOrange absolute right-5 h-10 w-10 rounded-full border-2"></div>
        <div className="bg-neutral-darkBrown h-10 w-10 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
