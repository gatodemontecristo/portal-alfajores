import { DataColumnProps, DataTagsProps, UserProps } from '../interfaces';

export const calculateTotalAmount = (
  data: DataTagsProps[] | DataColumnProps[],
): number => {
  return data.reduce((total, item) => {
    return total + (item.over9 ? 10 : 5);
  }, 0);
};

const calculateTotalByHour = (
  data: DataTagsProps[] | DataColumnProps[],
  over: boolean,
): number => {
  return data.reduce((total, item) => {
    return over ? total + (item.over9 ? 10 : 0) : total + (item.over9 ? 0 : 5);
  }, 0);
};

export const calculateFinalAmount = (mockUsers: UserProps[]): number => {
  return mockUsers.reduce((total, item) => {
    return total + calculateTotalAmount(item.dates);
  }, 0);
};
export const mapUsersDonnut = (mockUsers: UserProps[]) => {
  return mockUsers
    .filter((user) => user.dates.length > 0)
    .map((user) => {
      return {
        id: user.user,
        label: user.user,
        value: calculateTotalAmount(user.dates),
        color: user.color,
      };
    });
};
export const mapUsersChoco = (mockUsers: UserProps[]) => {
  return mockUsers
    .filter((user) => user.dates.length > 0)
    .map((user) => {
      return {
        deudores: user.user,
        over8: calculateTotalByHour(user.dates, false).toString(),
        over8Color: 'hsl(112, 70%, 50%)',
        over9: calculateTotalByHour(user.dates, true).toString(),
        over9Color: 'hsl(8, 70%, 50%)',
      };
    });
};
export const getUsersString = (users: DataColumnProps[]) => {
  return users
    .map((user) => {
      if (user.over9) {
        return `<strong>${user.user}</strong>`;
      }
      return user.user;
    })
    .join(', ');
};
