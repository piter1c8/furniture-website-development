import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const LDSP = () => {
  const ldspTypes = [
    {
      title: "ЛДСП Стандарт",
      description: "Качественная ламинированная плита для базовых решений",
      price: "от 1 200 ₽/м²",
      features: ["Толщина 16-18 мм", "Класс эмиссии E1", "Влагостойкость"],
      colors: ["Белый", "Дуб сонома", "Венге", "Ясень шимо"],
      image: "/img/0b4ea9a4-683d-4feb-85ec-4e34cd0aeb60.jpg"
    },
    {
      title: "ЛДСП Премиум",
      description: "Европейские плиты с улучшенными характеристиками",
      price: "от 1 800 ₽/м²",
      features: ["Толщина 16-25 мм", "Класс эмиссии E0.5", "Повышенная прочность"],
      colors: ["Дуб крафт", "Орех итальянский", "Бетон чикаго", "Мрамор каррара"],
      image: "/img/91b0cd9f-5269-427b-a67b-92c612098605.jpg"
    },
    {
      title: "ЛДСП Элит",
      description: "Премиальные плиты с эксклюзивными декорами",
      price: "от 2 500 ₽/м²",
      features: ["Толщина 18-28 мм", "Синхронная структура", "Антибактериальное покрытие"],
      colors: ["Дуб термо", "Палисандр", "Зебрано", "Кожа черная"],
      image: "/img/697ad4bb-fbce-4d72-b17f-44293b322d42.jpg"
    }
  ];

  const advantages = [
    {
      icon: "DollarSign",
      title: "Доступная цена",
      description: "Оптимальное соотношение цены и качества"
    },
    {
      icon: "Droplets",
      title: "Влагостойкость",
      description: "Устойчивость к повышенной влажности"
    },
    {
      icon: "Palette",
      title: "Широкий выбор",
      description: "Более 200 декоров и текстур"
    },
    {
      icon: "Wrench",
      title: "Простота обработки",
      description: "Легко пилится, сверлится и обрабатывается"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream/20 to-primary/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Icon name="Home" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-navy">МебельПроект</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
              <Link to="/materials" className="text-foreground hover:text-primary transition-colors">Материалы</Link>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ЛДСП - ламинированная плита
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Популярный материал для изготовления корпусной мебели. 
              Широкий выбор декоров и доступная цена.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="Layers" size={20} className="mr-2" />
              Выбрать декор
            </Button>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Виды ЛДСП
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ldspTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-navy text-lg">{type.title}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {type.price}
                    </Badge>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-navy mb-2">Характеристики:</h4>
                      <ul className="space-y-1">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy mb-2">Популярные цвета:</h4>
                      <div className="flex flex-wrap gap-1">
                        {type.colors.map((color, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {color}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Преимущества ЛДСП
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-gradient-to-br from-cream/20 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Технические характеристики
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-navy">Физические свойства</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Плотность</span>
                    <span className="font-medium">650-750 кг/м³</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Влажность</span>
                    <span className="font-medium">5-13%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Разбухание за 24ч</span>
                    <span className="font-medium">не более 15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Прочность на изгиб</span>
                    <span className="font-medium">≥ 11 МПа</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-navy">Экологические показатели</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Класс эмиссии</span>
                    <span className="font-medium">E0.5 - E1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Формальдегид</span>
                    <span className="font-medium">≤ 3.5 мг/100г</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сертификация</span>
                    <span className="font-medium">FSC, PEFC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Безопасность</span>
                    <span className="font-medium">Для детской мебели</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Применение ЛДСП
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Archive" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Корпусная мебель</h3>
              <p className="text-muted-foreground text-sm">Шкафы, комоды, тумбы, стеллажи</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="ChefHat" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Кухонная мебель</h3>
              <p className="text-muted-foreground text-sm">Кухонные гарнитуры, столешницы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Офисная мебель</h3>
              <p className="text-muted-foreground text-sm">Столы, шкафы, стеллажи для офиса</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LDSP;