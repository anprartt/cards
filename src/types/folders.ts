export interface IFolder {
    /** uuid  */
    id: string;
    name: string;
    cards: ICard[];
    folders: IFolder[];
}

export interface ICard {
    /** uuid  */
    id: string;
    /** Information about all repeats  */
    history: CardHistory[];
    /** Date, when card was created  */
    created: string;
    /** Content on the front of the card  */
    front: string;
    /** Content on the back of the card  */
    back: string;
}

export interface CardHistory {
    /** Day of repeating  */
    repeated: number;
    /** Planned day for next repeating  */
    nextRepeat: number;
    /** Planned by user day for next repeating  */
    customNextRepeat?: number;
    /** Grade  */
    grade: number;
}
