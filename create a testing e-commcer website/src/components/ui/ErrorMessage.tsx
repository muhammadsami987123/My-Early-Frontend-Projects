interface ErrorMessageProps {
  title: string;
  message: string;
}

export default function ErrorMessage({ title, message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-2xl font-bold text-red-500 mb-2">{title}</h2>
      <p className="text-gray-400">{message}</p>
    </div>
  );
} 