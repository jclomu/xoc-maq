import React from 'react';

interface MerchItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface CartProps {
  cart: { [key: number]: number };
  merchItems: MerchItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, merchItems, addToCart, removeFromCart }) => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Carrito de Compras</h1>
        {merchItems.map((item) => {
          const quantity = cart[item.id] || 0;
          if (quantity === 0) return null; // Si la cantidad es 0, no renderizamos el item

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-4 mb-4 flex md:flex-col items-center justify-between   "
              style={{ maxHeight: '10rem', maxWidth: '100%' }} // Establecemos una altura y ancho máximos para cada artículo
            >
              <div className="md:w-24 md:h-24 mr-4 overflow-hidden rounded-xl mb-4 md:mb-0">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  style={{ maxWidth: '100%', maxHeight: '15rem', aspectRatio: '1/1' }} // Establecemos el tamaño máximo y relación de aspecto
                />
              </div>
              <div className='flex justify-end m-auto'>
                <div className="flex-1 md:ml-4"> {/* Añadimos un margen izquierdo en dispositivos medianos y grandes */}
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <div className="flex items-center justify-around mt-4 md:mt-0">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 mr-2"
                  >
                    -
                  </button>
                  <span className="text-lg px-auto mx-5">{quantity}</span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
