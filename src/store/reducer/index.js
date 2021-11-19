import actions from "../actions";
import mockedBooks from "../../mocks/books";

export const initialState = {
    basket: {
        items: [],
        totalPrice: 0,
        quantity: 0,
        opened: false,
    },
    filters: {
        title: "",
        category: "All"
    },
    books: {
        categories: ["All", "Design", "Mobile", "UX", "DevOps", "Essentials"],
        filteredBooks: mockedBooks, // DI PARTENZA, TUTTI I LIBRI, SENZA FILTRI
    },
};

export function reducer(state, action) {
    console.log("Libri mocckati", mockedBooks);
    console.log(action);

    switch (action.type) {
        case actions.toggleBasket:
            return {
                ...state,
                basket: { ...state.basket, opened: !state.basket.opened },
            };

        case actions.setFilter: {
            return {
                ...state,
                filters: {
                    title: action.payload.title || "",
                    category: action.payload.category || "All",
                },
                books: {
                    ...state.books,
                    filteredBooks: mockedBooks.filter(
                        (books) => books.category === action.payload
                    ),
                },
            };
        }
        default:
            return state;
    }
}