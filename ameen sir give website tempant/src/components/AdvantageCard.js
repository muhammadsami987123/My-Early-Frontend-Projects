export default function AdvantageCard({ icon, title }) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
          <div className="text-green-500 text-4xl">{icon}</div>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    );
  }
  