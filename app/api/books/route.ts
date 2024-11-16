
import { NextResponse, NextRequest } from "next/server";
export type Book = {
  id: number;
  title: string;
  desc: string;
  author: string;
  available: boolean;
  image: string;
};
const books: Book[] = [
  {
    id: 1,
    title: "Echoes of Eternity",
    desc: "A spellbinding tale of love, betrayal, and redemption across lifetimes.",
    author: "Isabella Hart",
    available: true,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "The Forgotten Realm",
    desc: "An epic fantasy adventure in a land where magic has been outlawed.",
    author: "Ethan Blake",
    available: true,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    title: "Beneath Starlit Skies",
    desc: "A heartwarming story of two strangers brought together under the stars.",
    author: "Sophia Carter",
    available: false,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "The Shadow Chronicles",
    desc: "A gripping mystery set in a world where secrets lurk in every shadow.",
    author: "Liam Harper",
    available: true,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    title: "Winds of Destiny",
    desc: "A journey of courage and discovery through treacherous lands.",
    author: "Olivia Bennett",
    available: true,
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 6,
    title: "The Eternal Enigma",
    desc: "A scientist races against time to unlock the mysteries of the universe.",
    author: "Mason Wright",
    available: false,
    image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 7,
    title: "Threads of Time",
    desc: "A gripping tale of a historian who finds herself lost in another era.",
    author: "Amelia Brooks",
    available: true,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 8,
    title: "The Last Voyage",
    desc: "A captain's perilous journey across uncharted waters.",
    author: "Benjamin Parker",
    available: true,
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 9,
    title: "Fragments of Hope",
    desc: "A poignant narrative of resilience and survival.",
    author: "Ella Peterson",
    available: false,
    image: "https://images.unsplash.com/photo-1495640452828-3df6795cf69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    title: "Beyond the Horizon",
    desc: "An inspiring story of chasing dreams and defying odds.",
    author: "Evelyn Gray",
    available: true,
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJvb2t8ZW58MHx8MHx8fDA%3D"
  }
];



export function getBooks(): Book[] {
  return books;
}

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
  try {
    const newBook: Book = await request.json();
    books.push(newBook);
    return NextResponse.json({ message: "Book added successfully", book: newBook }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Failed to add book: ${error}` }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedBook: Partial<Book> = await request.json();
    const bookIndex = books.findIndex(book => book.id === updatedBook.id);

    if (bookIndex === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    books[bookIndex] = { ...books[bookIndex], ...updatedBook };
    return NextResponse.json({ message: "Book updated successfully", book: books[bookIndex] });
  } catch (error) {
    return NextResponse.json({ message: `Failed to update book: ${error}` }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: "Book ID is required" }, { status: 400 });
    }

    const bookIndex = books.findIndex(book => book.id === parseInt(id));

    if (bookIndex === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    const deletedBook = books.splice(bookIndex, 1)[0];
    return NextResponse.json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    return NextResponse.json({ message: `Failed to delete book: ${error}` }, { status: 500 });
  }
}
