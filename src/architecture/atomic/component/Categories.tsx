import { categoryFilters } from '@/constant/data';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useCategories } from './hooks';

const Categories = () => {

  const {handleTags} = useCategories();
  const searchParams = useSearchParams();

  const category = searchParams.get("category")

  return (
    <div className='flexBetween w-full gap-5 flex-wrap' >
      <ul className="flex gap-2 overflow-auto">
        {
            categoryFilters.map((filter)=>(
                <button
                    key={filter}
                    type='button'
                    onClick={()=> handleTags(filter)}
                    className={`
                        ${category === filter ? 
                            'bg-light-white-300 font-medium':
                            'font-normal'}
                        px-4 py-3 rounded-lg capitalize whitespace-nowrap
                    `}
                >

                </button>
            ))
        }
      </ul>
    </div>
  )
}

export {Categories}
