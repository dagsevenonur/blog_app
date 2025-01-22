import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  const [login, setLogin] = useState(false);

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
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
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
              {login ? (
                <Link href="/profil" className="flex items-center pl-4">
                  <button onClick={() => setLogin(false)} className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src="https://avatars.githubusercontent.com/u/1?v=4"
                        alt="Kullanıcı avatarı"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">Kullanıcı Adı</span>
                  </button>
                </Link>
              ) : (
                <button onClick={() => setLogin(true)} className="px-3 py-2 rounded-md transition-colors duration-200 bg-gray-900 text-white hover:bg-gray-800">
                  Giriş Yap
                </button>
              )}
            </div>
          </div>
        </nav>
    </header>
  )
}
