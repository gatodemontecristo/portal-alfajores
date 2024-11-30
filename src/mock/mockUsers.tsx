import { UserProps } from '../interfaces';

export const mockUsers: UserProps[] = [
  {
    user: 'Juan',
    amount: 20,
    genre: 'male',
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
