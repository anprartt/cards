import { IFolder } from '../../types';

export const mockFolders: IFolder[] = [
    {
        id: '10',
        name: 'Programming',
        cards: [],
        folders: [
            { id: '1', name: 'Browser', cards: [], folders: [] },
            { id: '2', name: 'JS', cards: [], folders: [] },
            {
                id: '9',
                name: 'TS',
                cards: [],
                folders: [
                    {
                        id: '8',
                        name: 'Basics1',
                        cards: [],
                        folders: [
                            { id: '3', name: 'Browser1', cards: [], folders: [] },
                            { id: '4', name: 'JSS', cards: [], folders: [] },
                            {
                                id: '5',
                                name: 'TSS',
                                cards: [],
                                folders: [{ id: '6', name: 'Basicsc', cards: [], folders: [] }],
                            },
                        ],
                    },
                    {
                        id: '7',
                        name: 'Basics2',
                        cards: [],
                        folders: [],
                    },
                ],
            },
        ],
    },
];
