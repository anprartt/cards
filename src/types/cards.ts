export interface ICard {
    id: number | null;
    folder: string;
    name: string;
    content: string;
    questions: string;
    created: string;
    repeated: string;
    repeatedAmount: number;
}

export interface ICardData {
    cards: ICard[];
}
