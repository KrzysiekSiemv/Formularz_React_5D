import { useState } from 'react';

const books = [
    { id: 1, title: "Pan Tadeusz", price: "16.00", rate: "5.0" },
    { id: 2, title: "Krzyżacy", price: "10.00", rate: "4.5" },
    { id: 3, title: "Kamienie na szaniec", price: "16.00", rate: "5.0" },
    { id: 4, title: "Oskar i Pani Róża", price: "14.00", rate: "5.0" },
    { id: 5, title: "Przyrodo, witaj! 5", price: "30.00", rate: "2.0" }
];

export function Books() {
    const [ulubione, setUlubione] = useState();

    // Tworzenie funkcji do wyświetlenia wszystkich książek
    function ListBooks(){
        // Metoda map - taka pętla, która wytwarza dany fragment kodu dla każdego elementu
        
        const LiBooks = books.map((book) => 
            <li key={book.id}>
                {book.title}  |  Cena: {book.price} zł  |  Ocena książki: {book.rate}
            </li>
        );

        return (
            <ol>
                {LiBooks}
            </ol>
        );
    }

    return (
        <ListBooks />
    );
}