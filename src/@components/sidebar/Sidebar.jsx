import Logo from "../Logo";
import SidebarIcons from "./SidebarIcons";

//Icons
import hamburger from "../../assets/Hamburger.png";
import frame from "../../assets/Frame.png";
import stack from "../../assets/Stack.png";

//User Profile
import userProfile from "../../assets/userProfile.png";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex flex-col items-center h-full min-h-screen pt-4 w-14 bg-primary-gray">
      <Logo />

      <div className="flex flex-col gap-10 pt-10 text-2xl">
        <SidebarIcons icon={hamburger} />
        <SidebarIcons icon={frame} />
        <SidebarIcons icon={stack} />
        {/* <SidebarIcons icon={git} /> */}
      </div>

      <div className="flex justify-center pb-4 mt-auto">
        <img src={userProfile} className="w-10" />
      </div>
    </div>
  );
};

export default Sidebar;