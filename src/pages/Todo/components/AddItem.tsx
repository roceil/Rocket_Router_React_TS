import React, {
  type ChangeEventHandler,
  type MouseEventHandler,
  type KeyboardEventHandler
} from 'react'
import add from '../../../image/add.svg'

interface AddItemProps {
  text: string
  handleChange: ChangeEventHandler<HTMLInputElement>
  handleAdd: MouseEventHandler<HTMLButtonElement>
  handleEnterAdd: KeyboardEventHandler<HTMLInputElement>
}
export function AddItem({
  text,
  handleChange,
  handleAdd,
  handleEnterAdd
}: AddItemProps) {
  return (
    <div className='container lg:max-w-[500px] mb-4'>
      <div className='flex items-center'>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          className='w-full rounded-[10px] py-3 pl-4 mr-[-44px]'
          placeholder='新增待辦事項'
          onKeyDown={handleEnterAdd}
        />
        <button type='button' onClick={handleAdd}>
          <img src={add} alt='add_items' />
        </button>
      </div>
    </div>
  )
}
