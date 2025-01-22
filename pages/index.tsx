import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'
import HeadComponent from '../components/head'
import Card from '../components/card'
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
