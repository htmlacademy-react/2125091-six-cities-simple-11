import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Offers = [
  {
    id: 10,
    url: '../project/public/img/apartment-01.jpg',
    status: 'Premium',
    price: 120,
    currency: '€',
    rating: 0.8,// *100%
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment'
  },
  {
    id: 20,
    url: '../project/public/img/room',
    status: '',
    price: 80,
    currency: '€',
    rating: 0.8,// *100%
    title: 'Wood and stone place',
    type: 'Private room'
  },
  {
    id: 30,
    url: '../project/public/img/apartment-02.jpg',
    status: '',
    price: 132,
    currency: '€',
    rating: 0.8,// *100%
    title: 'Canal View Prinsengracht',
    type: 'Apartment'
  },
  {
    id: 40,
    url: '../project/public/img/apartment-03.jpg',
    status: '',
    price: 180,
    currency: '€',
    rating: 1,// *100%
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment'
  },
  {
    id: 50,
    url: '../project/public/img/room.jpg',
    status: '',
    price: 80,
    currency: '€',
    rating: 0.8,// *100%
    title: 'Wood and stone place',
    type: 'Private room'
  }
];
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default Offers;
