import { useEffect } from "react";
import LogoPresentational from "../presentational/logo/logo.presentational";
import MenuPresentational from "../presentational/menu/menu.presentational";
const HeaderContainer = () => {
  useEffect(() => {
    document.title = "新型コロナコールセンター相談件数";
  });

  return (
    <div className="container mx-auto">
      <div className="flex min-h-full px-4 py-2- justify-between items-center">
        <LogoPresentational></LogoPresentational>
        <MenuPresentational></MenuPresentational>
      </div>
    </div>
  );
};

export default HeaderContainer;
