import { DataHistoryProps, UserProps } from '../interfaces';

export const mockUsers: UserProps[] = [
  {
    user: 'Paul',
    amount: 20,
    genre: 'male',
    color: 'hsl(204, 70%, 50%)',
    img: null,
    dates: [
      {
        date: '27/11',
        over9: false,
      },
      {
        date: '02/12',
        over9: false,
      },
      {
        date: '03/12',
        over9: true,
      },
    ],
  },
  {
    user: 'Erick',
    amount: 0,
    genre: 'male',
    color: 'hsl(83, 70%, 50%)',
    img: null,

    dates: [],
  },
  {
    user: 'Diego',
    amount: 0,
    genre: 'male',
    color: 'hsl(8, 70%, 50%)',
    img: null,

    dates: [],
  },
  {
    user: 'Renzo',
    amount: 0,
    genre: 'male',
    color: 'hsl(272, 70%, 50%)',
    img: null,

    dates: [],
  },
  {
    user: 'Ernesto',
    amount: 15,
    genre: 'male',
    color: 'hsl(103, 70%, 50%)',
    img: '../people/cubo.jpg',

    dates: [
      {
        date: '27/11',
        over9: false,
      },
      {
        date: '03/12',
        over9: true,
      },
    ],
  },
  {
    user: 'Milagros',
    amount: 0,
    genre: 'female',
    color: 'hsl(178, 70%, 50%)',
    img: '../people/gato_brujo.png',

    dates: [],
  },
  {
    user: 'Diana',
    amount: 0,
    genre: 'female',
    color: 'hsl(254, 70%, 50%)',
    img: null,

    dates: [],
  },
  {
    user: 'Melanye',
    amount: 0,
    genre: 'female',
    color: 'hsl(345, 70%, 50%)',
    img: '../people/airplane.png',
    dates: [],
  },
  {
    user: 'Miluska',
    amount: 0,
    genre: 'female',
    color: 'hsl(169, 70%, 50%)',
    img: '../people/picachu_fbi.jpeg',

    dates: [],
  },
  {
    user: 'Noel',
    amount: 10,
    genre: 'male',
    color: 'hsl(8, 70%, 50%)',
    img: null,
    dates: [
      {
        date: '02/12',
        over9: true,
      },
    ],
  },
  {
    user: 'Brooke',
    amount: 15,
    genre: 'female',
    color: 'hsl(72, 70%, 50%)',
    img: null,
    dates: [
      {
        date: '02/12',
        over9: false,
      },
      {
        date: '03/12',
        over9: true,
      },
    ],
  },
  {
    user: 'Calif',
    amount: 20,
    genre: 'male',
    color: 'hsl(245, 70%, 50%)',
    img: null,
    dates: [
      {
        date: '02/12',
        over9: true,
      },
      {
        date: '03/12',
        over9: true,
      },
    ],
  },
];

export const mockHistory: DataHistoryProps[] = [
  {
    date: '27/11',
    users: [
      { user: 'Ernesto', over9: false },
      { user: 'Paul', over9: false },
    ],
  },
  {
    date: '02/12',
    users: [
      { user: 'Paul', over9: false },
      { user: 'Brooke', over9: false },
      { user: 'Noel', over9: true },
      { user: 'Calif', over9: true },
    ],
  },
  {
    date: '03/12',
    users: [
      { user: 'Calif', over9: true },
      { user: 'Ernesto', over9: true },
      { user: 'Paul', over9: true },
      { user: 'Brooke', over9: true },
    ],
  },
];
