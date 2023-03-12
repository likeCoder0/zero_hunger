import React, { useEffect, useState } from "react";
import BookCard from "../components/Card";
import { useUserAuth } from "../context/UserAuthContext";

const OrdersPage = () => {
  const firebase = useUserAuth();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn)
      firebase
        .fetchMyBooks(firebase.user.uid)
        ?.then((books) => setBooks(books.docs));
  }, [firebase]);

  console.log(books);

  if (!firebase.isLoggedIn) return <h1>Please log in</h1>;

  return (
    <div>
      {books.map((book) => (
        <BookCard
          link={`/books/orders/${book.id}`}
          key={book.id}
          id={book.id}
          {...book.data()}
        />
      ))}
    </div>
  );
};

export default OrdersPage;