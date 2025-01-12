import { AlfajorSpringProps } from '../../../interfaces';

export interface HistoryButtonProps {
  history: AlfajorSpringProps | null;
  handleSelectHistory: (item: AlfajorSpringProps) => void;
  doc: AlfajorSpringProps;
}
export const HistoryButton = ({
  history,
  handleSelectHistory,
  doc,
}: HistoryButtonProps) => {
  return (
    <div
      className={`group flex flex-row justify-between  text-white p-3 rounded-md w-full transition-all duration-300 ${history?.name === doc.name ? 'bg-orange-500' : 'bg-slate-600 hover:bg-slate-500'} `}
      onClick={() => handleSelectHistory(doc)}
    >
      <p>
        {doc.name} | {doc.range}
      </p>
      <i className="bi bi-caret-right-fill transform group-hover:translate-x-[-15px] transition-all duration-300"></i>
    </div>
  );
};
