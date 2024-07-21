interface product {
    id: number,
    name: string,
    images: {
        src: string,
        alt: string,
    } [],
    description: string,
    colours: string [],
    sizes: string [],
    type: string [],
};

export const products: product [] = [
    {
        id: 1,
        name: "ao 1",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 1 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 1 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 1 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["red", "yellow", "blue"],
        sizes: ["32", "31", "30", "29", "28"],
        type: ["mut day", "ao"]
    },
    {
        id: 2,
        name: "ao 2",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 2 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 2 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 2 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["red", "yellow"],
        sizes: ["32", "31", "30"],
        type: ["mut day", "ao"]
    },
    {
        id: 3,
        name: "ao 3",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 3 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 3 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 3 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["red"],
        sizes: ["30", "29", "28"],
        type: ["mut day", "ao"],
    },
    {
        id: 4,
        name: "ao 4",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 4 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 4 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 4 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["red", "yellow", "blue"],
        sizes: ["32", "31", "30", "29", "28"],
        type: ["mut vua", "ao"]
    },
    {
        id: 5,
        name: "ao 5",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 5 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 5 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 5 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["red", "yellow"],
        sizes: ["32", "31", "30"],
        type: ["mut vua", "ao"]
    },
    {
        id: 6,
        name: "ao 6",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 6 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 6 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "ao 6 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["red"],
        sizes: ["30", "29", "28"],
        type: ["mut vua", "ao"],
    },
    {
        id: 7,
        name: "quan 1",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 1 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 1 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 1 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["orange", "green", "purple"],
        sizes: ["32", "31", "30", "29", "28"],
        type: ["type 1", "quan"]
    },
    {
        id: 8,
        name: "quan 2",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 2 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 2 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 2 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["orange", "green"],
        sizes: ["32", "31", "30"],
        type: ["type 1", "quan"]
    },
    {
        id: 9,
        name: "quan 3",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 3 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 3 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 3 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["orange"],
        sizes: ["30", "29", "28"],
        type: ["type 1", "quan"],
    },
    {
        id: 10,
        name: "quan 4",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 4 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 4 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 4 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["orange", "green", "purple"],
        sizes: ["32", "31", "30", "29", "28"],
        type: ["type 2", "quan"]
    },
    {
        id: 11,
        name: "quan 5",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 5 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 5 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 5 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["orange", "green"],
        sizes: ["32", "31", "30"],
        type: ["type 2", "quan"]
    },
    {
        id: 12,
        name: "quan 6",
        images: [
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 6 - hinh anh 1"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 6 - hinh anh 2"},
            {src: "https://picsum.photos/seed/picsum/600/400", alt: "quan 6 - hinh anh 3"},
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        colours: ["orange"],
        sizes: ["30", "29", "28"],
        type: ["type 2", "quan"],
    },
];