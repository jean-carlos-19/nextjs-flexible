import React from 'react'
import { LoadMoreProps } from '@/types/component.types'
import { Button } from '@/atomic/element';
import { useLoadMore } from './hooks';

const LoadMore = (props: LoadMoreProps) => {

  const { hasPreviousPage, hasNextPage, endCursos, startCursor } = props;
  const {handleNavigation} = useLoadMore(hasNextPage!,endCursos!,hasPreviousPage!,startCursor!);

  return (
    <div
      className='w-full flexCenter gap-5 mt-10'
    >
      {
        hasPreviousPage && (
           <Button
            title='First Page'
            handleClick={() =>handleNavigation("first")}
          />
        )
      }
      {
        hasNextPage && (
          <Button
            title='Next'
            handleClick={() =>handleNavigation("next")}
          />
        )
      }
    </div>
  )
}

export { LoadMore }
