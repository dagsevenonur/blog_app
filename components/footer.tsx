import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol taraf - Logo ve Copyright */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Technoblog</h2>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Technoblog. Tüm hakları saklıdır.
            </p>
          </div>

          {/* Sağ taraf - Menüler */}
          <div className="grid grid-cols-2 gap-8 justify-self-end">
            <div className="text-right">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                Sayfalar
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-base text-gray-500 hover:text-gray-900">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900">
                    Yazılar
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimda" className="text-base text-gray-500 hover:text-gray-900">
                    Hakkımda
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-right">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                İletişim
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/iletisim" className="text-base text-gray-500 hover:text-gray-900">
                    İletişim
                  </Link>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
