import { DataHistoryProps, UserProps } from '../interfaces';

export const mockUsers: UserProps[] = [
  {
    user: 'Juan',
    amount: 20,
    genre: 'male',
    color: 'hsl(307, 70%, 50%)',
    dates: [
      {
        date: '07/11',
        over9: true,
      },
      {
        date: '08/11',
        over9: false,
      },
      {
        date: '17/11',
        over9: true,
      },
    ],
  },
  {
    user: 'Rosa',
    amount: 24,
    genre: 'female',
    color: 'hsl(60, 70%, 50%)',
    dates: [
      {
        date: '07/11',
        over9: true,
      },
      {
        date: '08/11',
        over9: false,
      },
      {
        date: '17/11',
        over9: true,
      },
    ],
  },
];

export const mockHistory: DataHistoryProps[] = [
  {
    date: '07/11',
    users: [
      { user: 'Juan', over9: true },
      { user: 'Pepe', over9: false },
    ],
  },
  {
    date: '08/11',
    users: [
      { user: 'Juan', over9: false },
      { user: 'Pepe', over9: true },
      { user: 'Rosa', over9: false },
    ],
  },
];
