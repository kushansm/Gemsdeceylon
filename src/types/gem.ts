export type Category =
    | "Blue Sapphires"
    | "Yellow Sapphires"
    | "Pink Sapphires"
    | "White Sapphires"
    | "Spinel"
    | "Garnet"
    | "Star Sapphires"
    | "Other Gemstones";

export interface Gem {
    id: string;
    name: string;
    category: Category;
    price: number;
    description: string;
    image: string;
    isFeatured: boolean;
    isNew: boolean;
    weight: number; // in carats
    clarity: string;
    origin: string;
}
