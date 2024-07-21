interface category {
    id: string,
    key: string,
    name: string,
    sub_categories: category [],
};

export const categories: category [] = [
    {
        id: "1",
        key: "",
        name: "all",
        sub_categories: []
    },
    {
        id: "2",
        key: "ao",
        name: "ao",
        sub_categories: [
            {
                id: "2-1",
                key: "mut day",
                name: "mut day",
                sub_categories: []
            },
            {
                id: "2-2",
                key: "mut vua",
                name: "mut vua",
                sub_categories: []
            }
        ]
    },
    {
        id: "3",
        key: "quan",
        name: "quan",
        sub_categories: [
            {
                id: "3-1",
                key: "type-1",
                name: "type-1",
                sub_categories: []
            },
            {
                id: "3-2",
                key: "type-2",
                name: "type-2",
                sub_categories: []
            }
        ]
    },
];

