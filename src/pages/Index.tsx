import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [playingTrailer, setPlayingTrailer] = useState<string | null>(null);

  const trendingMovies = [
    {
      id: '1',
      title: 'Киберпанк 2077',
      year: '2024',
      genre: 'Экшн',
      rating: 8.9,
      image: '/img/2019be9c-1981-43b9-ab08-6f5ee9019433.jpg',
      trailer: 'https://example.com/trailer1'
    },
    {
      id: '2',
      title: 'Звездные Войны: Будущее',
      year: '2024',
      genre: 'Фантастика',
      rating: 9.2,
      image: '/img/3d0bd9ab-01d3-41fb-8820-8c130aaada66.jpg',
      trailer: 'https://example.com/trailer2'
    },
    {
      id: '3',
      title: 'Любовь на Закате',
      year: '2024',
      genre: 'Драма',
      rating: 8.5,
      image: '/img/09cad136-4964-436b-b4c7-ad358c13f41c.jpg',
      trailer: 'https://example.com/trailer3'
    }
  ];

  const genres = [
    { name: 'Экшн', count: 245, color: 'bg-primary' },
    { name: 'Комедия', count: 189, color: 'bg-secondary' },
    { name: 'Драма', count: 312, color: 'bg-mint' },
    { name: 'Ужасы', count: 156, color: 'bg-coral' },
    { name: 'Фантастика', count: 198, color: 'bg-lavender' },
    { name: 'Романтика', count: 167, color: 'bg-teal' }
  ];

  const newMovies = [
    { title: 'Новый Мир', year: '2024', genre: 'Фантастика' },
    { title: 'Последний Герой', year: '2024', genre: 'Экшн' },
    { title: 'Тайна Океана', year: '2024', genre: 'Приключения' },
    { title: 'Город Будущего', year: '2024', genre: 'Научная фантастика' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white font-roboto">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-montserrat font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
              Filmoteca
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Откройте для себя мир кинематографа
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative animate-scale-in">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Icon name="Search" size={20} className="absolute left-4 top-3.5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Поиск фильмов, сериалов, жанров..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 py-3 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm"
                  />
                </div>
                <Button className="px-6 py-3 bg-primary hover:bg-primary/80 transition-all duration-300">
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trending Movies */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-montserrat font-bold">Трендовые фильмы</h2>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Смотреть все
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingMovies.map((movie) => (
            <Card key={movie.id} className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Button
                  onClick={() => setPlayingTrailer(movie.id)}
                  className="absolute top-4 right-4 p-2 bg-primary hover:bg-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Icon name="Play" size={16} />
                </Button>
                <Badge className="absolute bottom-4 left-4 bg-black/50 text-white">
                  {movie.genre}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-montserrat font-semibold mb-2">{movie.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{movie.year}</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    <span>{movie.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Genres */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-montserrat font-bold mb-8">Фильмы по жанрам</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <Card key={genre.name} className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${genre.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name="Film" size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-semibold mb-1">{genre.name}</h3>
                <p className="text-sm text-gray-400">{genre.count} фильмов</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* New Movies */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-montserrat font-bold">Новые фильмы</h2>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить в избранное
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newMovies.map((movie, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-montserrat font-semibold">{movie.title}</h3>
                  <Icon name="Heart" size={16} className="text-gray-400 hover:text-red-400 transition-colors duration-300" />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{movie.year}</span>
                  <Badge variant="outline" className="border-white/20 text-white">
                    {movie.genre}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold mb-4">Почему выбирают Filmoteca?</h2>
            <p className="text-gray-300">Ваш персональный гид в мире кинематографа</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Play" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Трейлеры HD</h3>
              <p className="text-gray-400">Смотрите трейлеры в высоком качестве перед просмотром</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Избранное</h3>
              <p className="text-gray-400">Создавайте списки любимых фильмов и сериалов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mint rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Search" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">Умный поиск</h3>
              <p className="text-gray-400">Находите фильмы по жанрам, актерам и рейтингу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Filmoteca. Все права защищены.</p>
        </div>
      </footer>

      {/* Trailer Modal */}
      {playingTrailer && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-montserrat font-semibold">Трейлер</h3>
              <Button
                onClick={() => setPlayingTrailer(null)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Здесь будет воспроизводиться трейлер</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;