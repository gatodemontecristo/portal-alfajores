interface SkeletonProps {
  type: 'circle' | 'rect';
  extraClass: string;
}

export const Skeleton = ({ type, extraClass }: SkeletonProps) => {
  const baseClasses = 'bg-pink-300 animate-pulse';

  if (type === 'circle') {
    return <div className={`${baseClasses} rounded-full ${extraClass}`}></div>;
  }

  return <div className={`${baseClasses} rounded ${extraClass}`}></div>;
};
