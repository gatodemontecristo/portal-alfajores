import {
  AlfajorSpringTardProps,
  AlfajorSpringUserProps,
  DataColumnProps,
  DataHistoryProps,
  DataTagsProps,
} from '../interfaces';

export const calculateTotalAmount = (
  data: DataTagsProps[] | DataColumnProps[] | AlfajorSpringTardProps[],
): number => {
  return data.reduce((total, item) => {
    return total + (item.over9 ? 10 : 5);
  }, 0);
};

export const formatDateToMMDD = (dateString: string): string => {
  const arrayValue = dateString.split('-');
  return `${arrayValue[2]}/${arrayValue[1]}`;
};

const calculateTotalByHour = (
  data: DataTagsProps[] | DataColumnProps[] | AlfajorSpringTardProps[],
  over: boolean,
): number => {
  return data.reduce((total, item) => {
    return over ? total + (item.over9 ? 10 : 0) : total + (item.over9 ? 0 : 5);
  }, 0);
};

export const calculateFinalAmount = (
  alfajorCollection: AlfajorSpringUserProps[],
): number => {
  return alfajorCollection.reduce((total, item) => {
    return total + calculateTotalAmount(item.tardanzas);
  }, 0);
};
export const mapUsersDonnut = (alfajorCollection: AlfajorSpringUserProps[]) => {
  return alfajorCollection
    .filter((user) => user.tardanzas.length > 0)
    .map((user) => {
      return {
        id: user.name,
        label: user.name,
        value: calculateTotalAmount(user.tardanzas),
        color: user.color,
      };
    });
};
export const mapUsersChoco = (alfajorCollection: AlfajorSpringUserProps[]) => {
  return alfajorCollection
    .filter((user) => user.tardanzas.length > 0)
    .map((user) => {
      return {
        deudores: user.name,
        over8: calculateTotalByHour(user.tardanzas, false).toString(),
        over8Color: 'hsl(112, 70%, 50%)',
        over9: calculateTotalByHour(user.tardanzas, true).toString(),
        over9Color: 'hsl(8, 70%, 50%)',
      };
    });
};
export const groupUsersByTardanzaFecha = (
  users: AlfajorSpringUserProps[],
): DataHistoryProps[] => {
  const groupedData: {
    [key: string]: { userName: string; over9: boolean }[];
  } = {};

  users.forEach((user) => {
    user.tardanzas.forEach((tardanza) => {
      if (!groupedData[tardanza.fecha]) {
        groupedData[tardanza.fecha] = [];
      }
      groupedData[tardanza.fecha].push({
        userName: user.name,
        over9: tardanza.over9,
      });
    });
  });

  return Object.keys(groupedData).map((fecha) => ({
    fecha,
    users: groupedData[fecha],
  }));
};
export const getUsersString = (users: DataColumnProps[]) => {
  return users
    .map((user) => {
      if (user.over9) {
        return `<strong>${user.userName}</strong>`;
      }
      return user.userName;
    })
    .join(', ');
};
