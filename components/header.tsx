import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path: string) => {
    return currentPath === path ? "font-semibold text-gray-900" : "text-gray-600 hover:text-gray-900";
  };

  return (
    <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Blog
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className={`${isActive('/')} px-3 py-2 rounded-md transition-colors duration-200`}>
                  Ana Sayfa
                </Link>
                <Link href="/blog" className={`${isActive('/blog')} px-3 py-2 rounded-md transition-colors duration-200`}>
                  Yazılar
                </Link>
                <Link href="/hakkimda" className={`${isActive('/hakkimda')} px-3 py-2 rounded-md transition-colors duration-200`}>
                  Hakkımda
                </Link>
              </div>
            </div>
          </div>
        </nav>
    </header>
  )
}
