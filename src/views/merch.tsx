import { useState } from 'react';
import camiseta from '../../public/img/merchImg/playera.jpg';
import gorra from '../../public/img/merchImg/gorra.jpg';
import taza from '../../public/img/merchImg/taza.jpg';
import vinil from '../../public/img/merchImg/vinil.jpg';
import Cart from './cart'; // Asegúrate de importar correctamente el componente

interface MerchItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const Merch: React.FC = () => {
  const merchItems: MerchItem[] = [
    { id: 1, name: 'Playera', price: '$200', imageUrl: camiseta },
    { id: 2, name: 'Gorra', price: '$150', imageUrl: gorra },
    { id: 3, name: 'Taza', price: '$100', imageUrl: taza },
    { id: 4, name: 'Vinil', price: '$500', imageUrl: vinil },
  ];

  const [cart, setCart] = useState<{ [key: number]: number }>({}); // Inicializamos cart como un objeto vacío

  const addToCart = (id: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Merchandising</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />
              <div className="relative p-4">
                <h2 className="text-white text-2xl font-semibold mb-2">{item.name}</h2>
                <p className="text-white mb-4">{item.price}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-white">{cart[item.id] || 0}</span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Cart cart={cart} merchItems={merchItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default Merch;
