const Header = () => {
  return (
    <header className="header">
      <div className="space-y-2">
        <p>My balance</p>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <div className="relative flex">
        <div className="circle-one"></div>
        <div className="circle-two"></div>
      </div>
    </header>
  );
};

export default Header;
