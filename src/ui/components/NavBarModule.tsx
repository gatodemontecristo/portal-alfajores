import { useNavigate } from 'react-router-dom';
export interface NavBarModuleProps {
  image: string;
  title: string;
  path: string;
}
export const NavBarModule = ({ ...props }: NavBarModuleProps) => {
  const navigate = useNavigate();
  const onNavigateApp = () => {
    navigate(`/${props.path}`);
  };
  return (
    <button
      className="p-3  w-[120px] flex flex-col items-center group"
      onClick={onNavigateApp}
    >
      <div className="flex group-hover:bg-pinkberry rounded-md p-3">
        <img className="h-10 w-10 " src={props.image} alt="" />
      </div>
      <p className="text-center text-black  text-[13px]	mt-1 font-semibold">
        {props.title}
      </p>
    </button>
  );
};
