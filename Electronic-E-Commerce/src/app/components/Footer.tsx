import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 p-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 md:mr-8">
          <h3 className="text-xl font-bold mb-4">Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex mt-4">
            <input type="email" placeholder="Enter your Email" className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md">→</button>
          </div>
        </div>
        <div className="md:w-1/4 md:mr-8">
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <p>Baldia Town , Karachi , Sindh , Pakistan.</p>
          <p>m.samiwaseem1234@gmail.com</p>
          <p>+923477286878</p>
        </div>
        <div className="md:w-1/4 md:mr-8">
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <div><a href="/">Home</a></div>
          <div><a href="/login">Login / Register</a></div>  
          <div><a href="#">Wishlist</a></div>
          <div><a href="/cart">Cart</a></div>
          {/* <div><a href="">Shop</a></div> */}
          
        </div>
        <div className="md:w-1/4">
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          
          <div><a href="#">Privacy Policy</a></div>
          <div><a href="#"> Terms Of Use</a></div>
          <div><a href="#">FAQ</a></div>
          <div><a href="contact">Contact</a></div>
          
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/muhammad-sami-3aa6102b8/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100044619184212" target="_blank" rel="noopener noreferrer">
          <FaFacebook  className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/muhammad_sami3344/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare className="w-8 h-8" />
          </a>
          <a href="https://github.com/muhammadsami987123" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=923477286878&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <FaWhatsappSquare className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;