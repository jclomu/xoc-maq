import star from '../../public/star.svg';
import img1 from '../../public/img/profileImg/lamat.jpg';
import img2 from '../../public/img/profileImg/chino-y-su-gala.jpeg';
import img3 from '../../public/img/profileImg/five-vega.jpg';

export default function Bands() {
  const bands = [
    { id: 1, name: 'Lamat', subscribed: true, imageUrl: img1 },
    { id: 2, name: 'Chino y su Gala', subscribed: false, imageUrl: img2 },
    { id: 3, name: 'Five Vega', subscribed: false, imageUrl: img3 },
    // Add more bands as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Bandas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bands.map((band) => (
            <div
              key={band.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${band.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />
              <div className="relative p-4">
                <h2 className="text-white text-2xl font-semibold mb-2">{band.name}</h2>
                <div className="text-white">
                  {band.subscribed ? (
                    <img src={star} alt="Star" className="h-5 w-5 text-yellow-500 inline-block" />
                  ) : (
                    <button className="text-blue-400 hover:underline">Suscribir</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
