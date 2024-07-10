const MenuPresentational = () => {
  return (
    <div className="p-1 mr-2 flex gap-2 items-center">
      <img
        className="w-10 rounded-full border border-gray-300"
        src={process.env.PUBLIC_URL + "/ali-bektash-profile.jpg"}
        alt="logo"
      />
      <span className="hidden md:block">Ali Bektash</span>
    </div>
  );
};

export default MenuPresentational;
