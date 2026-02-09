import Link from 'next/link';

const categories = [
  {
    id: 'furniture',
    name: 'Furniture',
    description: 'Modern and comfortable furniture for your home',
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80'
  },
  {
    id: 'lighting',
    name: 'Lighting',
    description: 'Elegant lighting solutions for any room',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80'
  },
  {
    id: 'decor',
    name: 'Decor',
    description: 'Beautiful decorative pieces to enhance your space',
    imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80'
  }
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={`/categories/${category.id}`}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-full object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              <p className="text-gray-200 mt-2">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 