import { useContext } from 'react';
import { UserContext } from './UserAlert';

export const UserImage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex w-full border-solid border-8 border-[#fdbd22] rounded-full p-3 overflow-hidden">
      {user.img ? (
        <img src={user.img} alt="" />
      ) : (
        <img
          src={`../people/${user.genre === 'female' ? 'mujer' : 'hombre'}.png`}
          alt=""
        />
      )}
    </div>
  );
};
