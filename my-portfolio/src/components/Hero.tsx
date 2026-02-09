import Navbar from './Navbar'; 

const Hero = () => {
  return (
    <div 
      id="hero" 
      className="min-h-screen bg-no-repeat bg-[url(https://avatars.githubusercontent.com/u/145227602?v=4)] bg-cover"
      style={{ backgroundSize: "35%", backgroundPosition: "left 100px, top" }}
    >
      <Navbar />
      <div className='container grid p-20 lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className=''></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight'>
          <p data-aos="zoom-out-down">I&apos;m</p>
          <p data-aos="fade-up">Zain ul</p>
          <p data-aos="zoom-out-down">Abideen</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
