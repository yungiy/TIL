'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Product from '@/components/Products/Product';
import type { Product as TProduct } from '@/db';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { QueryResult } from '@upstash/vector';
import axios from 'axios';
import { ChevronDown, Filter } from 'lucide-react';
import { useState } from 'react';
import { ProductSkeleton } from '@/components/Products/ProductSkeleton';

const SORT_OPTIONS = [
  { name: '홈', value: 'none' },
  { name: '낮은 가격순', value: 'price-asc' },
  { name: '높은 가격순', value: 'price-desc' },
] as const;

export default function Home() {
  const [filter, setFilter] = useState({
    sort: 'none',
  });

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.post<QueryResult<TProduct>[]>(
        'http://localhost:3000/api/products',
        {
          filter: {
            sort: filter.sort,
          },
        }
      );
      return data;
    },
  });

  return (
    <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
          코튼
        </h1>
        <div className=' flex item-center'>
          <DropdownMenu>
            <DropdownMenuTrigger className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
              분류
              <ChevronDown className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.name}
                  className={cn('text-left w-full block px-4 py-2 text-sm', {
                    'text-gray-900': option.value === filter.sort,
                    'text-gray-500': option.value !== filter.sort,
                  })}
                  onClick={() => {
                    setFilter((prev) => ({
                      ...prev,
                      sort: option.value,
                    }));
                  }}
                >
                  {option.name}
                </button>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'>
            <Filter className='h-5 w-5' />
          </button>
        </div>
      </div>
      <section className='pb-24 pt-6'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
          {/* 필터 */}
          <div></div>

          {/* 제품 설명 */}
          <ul className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {products
              ? products.map((product) => (
                  // eslint-disable-next-line react/jsx-key
                  <Product product={product.metadata!} />
                ))
              : new Array(12)
                  .fill(null)
                  .map((_, i) => <ProductSkeleton key={i} />)}
          </ul>
        </div>
      </section>
    </main>
  );
}
