import SelectDatePresentational from "../presentational/select-date-range/select-date-range.presentational";
import SelectViewPresentational from "../presentational/select-view/select-view.presentational";
import UserNavigatorTitlePresentational from "../presentational/title/title.presentational";

const UserNavigatorContainer = () => {
  return (
    <div className="container mx-auto p-10">
      <UserNavigatorTitlePresentational></UserNavigatorTitlePresentational>
      <div className="flex mt-3 justify-between">
        <SelectDatePresentational></SelectDatePresentational>
        <SelectViewPresentational></SelectViewPresentational>
      </div>
    </div>
  );
};

export default UserNavigatorContainer;
