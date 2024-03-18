import { getCurrentUser } from '@/lib/session';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <header className='bg-gray-800 p-4'>
      <nav className=' flex justify-between items-center max-w-7xl mx-auto'>
        <Link href='/' className='text-white text-2xl font-mono font-semibold'>
          나의 Blogs
        </Link>

        <ul className=' flex space-x-6'>
          <li>
            <Link
              href='/blogs'
              className='text-white hover:underline font-mono font-semi'
            >
              Blogs
            </Link>
          </li>
          {user?.name ? (
            <LogoutButton />
          ) : (
            <li> 
              <Link
                href='/api/auth/signin'
                className='text-white hover:underline font-mono font-semi'
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
