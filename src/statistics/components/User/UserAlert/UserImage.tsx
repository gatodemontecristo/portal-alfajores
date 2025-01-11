import { useContext } from 'react';
import { UserContext } from './UserAlert';

export const UserImage = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex w-full border-solid border-8 border-[#fdbd22] rounded-full p-2 overflow-hidden">
      {user.img ? (
        <img className="rounded-full" src={user.img} alt="" />
      ) : (
        <img
          className="rounded-full"
          src={`../people/${user.genre === 'female' ? 'mujer' : 'hombre'}.png`}
          alt=""
        />
      )}
    </div>
  );
};
