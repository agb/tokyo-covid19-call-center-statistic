import SelectDatePresentational from "../presentational/select-date-range/select-date-range.presentational";
import SelectViewPresentational from "../presentational/select-view/select-view.presentational";
import UserNavigatorTitlePresentational from "../presentational/title/title.presentational";
import { UserNavigatorProvider } from "../user-navigator.context";

const UserNavigatorContainer = () => {
  return (
    <div className="container mx-auto p-10">
      <UserNavigatorTitlePresentational></UserNavigatorTitlePresentational>
      <div className="flex mt-3 justify-between">
        <UserNavigatorProvider>
          <SelectDatePresentational></SelectDatePresentational>
          <SelectViewPresentational></SelectViewPresentational>
        </UserNavigatorProvider>
      </div>
    </div>
  );
};

export default UserNavigatorContainer;
