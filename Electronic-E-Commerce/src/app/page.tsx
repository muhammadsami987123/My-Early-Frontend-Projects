import PromoBanner from "./PromoBanner";
import SidebarHero from "./SidebarHero";
import BestSell from "@/app/Bestsell"
import FlashSales from "./flashsales";
import CategorySection from "./CategorySection";
import Explore from "./Explore";
import Featured from "./Featured";
import CustomerService from "./customerservice";
// import Explore from "./explore";
export default function HomePage() {
  return (
    <div>
      <SidebarHero />
     <FlashSales/> 
     <CategorySection/>
     <BestSell/>
     <PromoBanner/>
     <Explore/>
     <Featured/>
     <CustomerService/>
     </div>
    
      
    
  );
}