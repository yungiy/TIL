export const ProductSkeleton = () => {
  return (
    <div className='relative animate-pulse'>
      <div
        className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md
Ibg-gray-200 1g: aspect -none 1g:h-80'
      >
        <div className='h-full w-full bg-gray-200' />
      </div>
      <div className='mt-4 flex flex-col gap-2'>
        <div className=' bg-gray-200 h-4 w-full' />
        <div className='bg-gray-200 h-4 w-full' />
      </div>
    </div>
  );
};