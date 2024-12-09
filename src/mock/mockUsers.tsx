import { AlfajorSpringProps, UserProps } from '../interfaces';

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
    amount: 5,
    genre: 'male',
    color: 'hsl(8, 70%, 50%)',
    img: null,

    dates: [
      {
        date: '04/12',
        over9: false,
      },
    ],
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
      {
        date: '04/12',
        over9: false,
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
  {
    user: 'Axl',
    amount: 0,
    genre: 'male',
    color: 'hsl(111, 70%, 50%)',
    img: '../people/mono.gif',
    dates: [],
  },
];

export const mockHistory2: AlfajorSpringProps = {
  id: 'JJ4874rwQa27IbVVR39s',
  name: 'Spring Q4 SP5',
  open: true,
  range: '27 Nov - 10 Dec',
  users: [
    {
      color: 'hsl(245, 70%, 50%)',
      genre: 'male',
      img: '',
      name: 'Calif',
      tardanzas: [
        {
          fecha: '02/12',
          over9: true,
        },
        {
          fecha: '03/12',
          over9: true,
        },
      ],
    },
    {
      color: 'hsl(204, 70%, 50%)',
      genre: 'male',
      img: '',
      name: 'Paul',
      tardanzas: [
        {
          fecha: '27/11',
          over9: false,
        },
        {
          fecha: '02/12',
          over9: false,
        },
        {
          fecha: '03/12',
          over9: true,
        },
      ],
    },
    {
      color: 'hsl(83, 70%, 50%)',
      genre: 'male',
      img: '',
      name: 'Erick',
      tardanzas: [],
    },
    {
      color: 'hsl(8, 70%, 50%)',
      genre: 'male',
      img: '',
      name: 'Diego',
      tardanzas: [
        {
          fecha: '04/12',
          over9: false,
        },
      ],
    },
    {
      color: 'hsl(272, 70%, 50%)',
      genre: 'male',
      img: '',
      name: 'Renzo',
      tardanzas: [],
    },
    {
      color: 'hsl(103, 70%, 50%)',
      genre: 'male',
      img: '../people/cubo.jpg',
      name: 'Ernesto',
      tardanzas: [
        {
          fecha: '27/11',
          over9: false,
        },
        {
          fecha: '03/12',
          over9: true,
        },
        {
          fecha: '04/12',
          over9: false,
        },
      ],
    },
    {
      color: 'hsl(178, 70%, 50%)',
      genre: 'female',
      img: '../people/gato_brujo.png',
      name: 'Milagros',
      tardanzas: [],
    },
    {
      color: 'hsl(254, 70%, 50%)',
      genre: 'female',
      img: '',
      name: 'Diana',
      tardanzas: [],
    },
    {
      color: 'hsl(345, 70%, 50%)',
      genre: 'female',
      img: '../people/airplane.png',
      name: 'Melanye',
      tardanzas: [],
    },
    {
      color: 'hsl(169, 70%, 50%)',
      genre: 'female',
      img: '../people/picachu_fbi.jpeg',
      name: 'Miluska',
      tardanzas: [],
    },
    {
      color: 'hsl(8, 70%, 50%)',
      genre: 'male',
      img: '',
      name: 'Noel',
      tardanzas: [
        {
          fecha: '02/12',
          over9: true,
        },
      ],
    },
    {
      color: 'hsl(72, 70%, 50%)',
      genre: 'female',
      img: '',
      name: 'Brooke',
      tardanzas: [
        {
          fecha: '02/12',
          over9: false,
        },
        {
          fecha: '03/12',
          over9: true,
        },
      ],
    },
    {
      color: 'hsl(72, 70%, 50%)',
      genre: 'female',
      img: '',
      name: 'Brooke',
      tardanzas: [
        {
          fecha: '02/12',
          over9: false,
        },
        {
          fecha: '03/12',
          over9: true,
        },
      ],
    },
    {
      color: 'hsl(111, 70%, 50%)',
      genre: 'male',
      img: '',
      name: 'Axl',
      tardanzas: [],
    },
  ],
};
