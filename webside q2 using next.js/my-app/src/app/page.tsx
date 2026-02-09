import Head from 'next/head';
import Image from 'next/image';
import LogoImage from "@/app/picture/download.jpeg"
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="font-sans text-gray-800 bg-gray-100">
        {/* Header */}
        <div className="text-white flex justify-end bg-black  ">
          +923477286878 | m.samiwaseem1234@gmail.com
        </div>
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="logo flex items-center">
              <Image
                src={LogoImage}
                alt="PanaCloud Logo"
                width={55}
                height={48}
                className="h-12 mr-40 text-2xl"
              />
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-green-500">About</a></li>
                <li><a href="#services" className="hover:text-green-500">Services</a></li>
                <li><a href="#portfolio" className="hover:text-green-500">Portfolio</a></li>
                <li><a href="#process" className="hover:text-green-500">Process</a></li>
                <li><a href="#contact" className="hover:text-green-500">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-green-500 text-white py-20 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">We Are Experts</h1>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eu leo.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-white text-green-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100"
            >
              Read More
            </a>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Our Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-green-500 text-3xl mb-2">💡</div>
                <p className="font-semibold">Innovation</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-green-500 text-3xl mb-2">🏆</div>
                <p className="font-semibold">Quality</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-green-500 text-3xl mb-2">⏰</div>
                <p className="font-semibold">Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eu leo vestibulum suscipit.
              </p>
              <a
                href="#contact"
                className="mt-6 inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600"
              >
                Read More
              </a>
            </div>
            <div className="md:w-1/2 p-4">
              <Image
                src="https://via.placeholder.com/400"
                alt="About Us Image"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow">
                <h3 className="font-semibold">Web Design</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow">
                <h3 className="font-semibold">Graphic Design</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Our Portfolio</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="p-4 bg-white rounded-lg shadow">
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Portfolio Item"
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="mt-4 font-semibold">Project Name</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Start Your New Project</h2>
            <form className="flex flex-col items-center space-y-4 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600"
              >
                Send Request
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="container mx-auto text-center">
            <p>&copy; PanaCloud 2024. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
