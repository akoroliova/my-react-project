import './App.css';
import Product from './Product';
import { BookList } from './BookList';
import { favouriteBooks } from '../assets/favouriteBooks';
import { Alert } from './Alert';
import { HiUser } from 'react-icons/hi';

export default function App() {
  return (
    <div>
      <div>
        <p>
          <HiUser className="my-icon" size="24" /> {name}
        </p>
      </div>

      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />

      <h1>Best selling</h1>

      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </div>
  );
}
