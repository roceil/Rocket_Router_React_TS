import deleteItem from "../../../image/deleteItem.svg";

interface ListProps {
  key: number;
  content: string;
  id: string;
  completed_at: null | string;
}
export function ListItem({ content }: ListProps) {
  return (
    <li className='flex justify-between py-6 px-4 relative after:absolute after:bottom-0 after:left-1/2 after:bg-[#E5E5E5] after:h-[1px] after:w-[calc(100%-24px)] after:translate-x-[-50%]'>
      <div className='flex space-x-4 items-center'>
        <input type='checkbox' className='w-5 h-5' />
        <p>{content}</p>
      </div>
      <button>
        <img src={deleteItem} alt='deleteItem' />
      </button>
    </li>
  );
}
