import Link from 'next/link'

export default function Card() {
    return (
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
    )
}
