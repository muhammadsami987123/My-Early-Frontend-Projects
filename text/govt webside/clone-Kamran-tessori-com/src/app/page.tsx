
import AdvanceCourses from "./components/advance";
import Box from "./components/boxes";
import Courses from "./components/courses";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Main from "./components/main";
import OtherCourses from "./components/othercourses";
import Piaic from "./components/piaic";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Main/>
      <Box/>
      <Piaic/>
      <Courses/>
      <AdvanceCourses/>
      <OtherCourses/>
      <Footer/>
    </div>
  );
}
// Alhamdulillah project completed