export default function ServiceCard({ title, description }) {
    return (
      <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
          <span className="text-red-500 text-2xl font-bold">★</span>
        </div>
        <h3 className="text-lg font-bold mt-4">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    );
  }
  