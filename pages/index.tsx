import { Inter } from 'next/font/google'
import Header from '../components/header'
import HeadComponent from '../components/head'
import Link from 'next/link'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      <HeadComponent 
        title="Ana Sayfa"
        description="En son teknoloji yazıları ve güncel blog içerikleri"
      />
      <Header />

      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Son Yazılar</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog kartı örneği - bu kısım dinamik olarak doldurulacak */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://source.unsplash.com/random/800x600"
                  alt="Blog görseli"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">12 Mart 2024</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href="/blog/ornek-yazi" className="hover:text-blue-600">
                    Örnek Blog Yazısı Başlığı
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Bu bir örnek blog yazısı açıklamasıdır. Buraya yazının kısa bir özeti gelecek...
                </p>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/random/100x100"
                    alt="Yazar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Yazar Adı</p>
                    <p className="text-sm text-gray-500">Yazar Ünvanı</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">&copy; 2024 Blog Sitesi. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
