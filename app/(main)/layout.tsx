import Header from "@/components/header";
import SideBar from "../../components/side-bar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
     return (
          <div className="lg:pl-16 pt-20">
               <Header />
               <SideBar />

               {children}
          </div>
     );
};

export default MainLayout;