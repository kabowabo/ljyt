import React, { useState, useEffect } from 'react';

function App() {
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleLocationSearch = (location: string) => {
    setSearchLocation(location);
    const tour = tours.find((tour) => tour.title.toLowerCase().includes(location.toLowerCase()));
    if (tour) {
      document.getElementById(tour.title)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTours = () => {
    document.getElementById('tours-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-['Playfair_Display',_serif]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm">
        <input
          type="search"
          placeholder="Search for location..."
          className="border border-gray-300 rounded-full px-4 py-2 w-full max-w-md outline-none focus:ring-2 focus:ring-orange-500"
          onChange={(e) => handleLocationSearch(e.target.value)}
        />
        <div className="space-x-8 text-orange-600 font-medium">
          <button onClick={scrollToTours}>All Dates</button>
          <a href="#">Yoga Studio</a>
          <a href="#">Contact</a>
          <a href="#">Link</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20">
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-[#e18f1b]">Laju Yoga Tours</h1>
        </div>
        <p className="mt-4 text-xl text-[#e18f1b]">Bikram Yoga</p>
      </section>

      {/* Tours Section */}
      <section id="tours-section" className="container mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold mb-2">Laju Tours</h2>

        <div className="grid grid-cols-1 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.title}
              id={tour.title}
              className="flex items-center gap-4 bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <img
                className="w-20 h-20 object-cover rounded-md"
                src={tour.image}
                alt={tour.title}
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {tour.title}
                </h3>
                <span className="text-gray-400 text-sm">{formatDateDisplay(tour.date)}</span>
                <a
                  href="https://google.com"
                  className="mt-2 self-start px-3 py-1 text-sm rounded-md bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  DETAILS
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center text-gray-500">
          © 2025 Laju Yoga Tours. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

const formatDateDisplay = (dateString: string) => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

const tours = [
  { title: 'Hot Yoga Plus Daly City', date: '2025-03-15', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=60', link: 'https://google.com' },
  { title: 'Sonoma Like it Hot', date: '2025-03-16', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=60', link: 'https://google.com' },
  { title: 'Yoga Hell Petaluma', date: '2025-03-17', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=60', link: 'https://google.com' },
  { title: 'Hot Yoga Los Angeles', date: '2025-03-29', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=60', link: 'https://google.com' },
  { title: 'Bikram Yoga San Diego', date: '2025-03-30', image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=60', link: 'https://google.com' },
  { title: 'Focus Bryn Mawr Philly', date: '2025-04-12', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=60', link: 'https://google.com' },
];

export default App;
