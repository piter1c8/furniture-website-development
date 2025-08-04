import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const BookDoors = () => {
  const doorTypes = [
    {
      title: "Классические двери-книжки",
      description: "Традиционные распашные конструкции с поворотным механизмом",
      price: "от 10 000 ₽/м²",
      features: ["Стандартная фурнитура", "Надежные петли", "Классический дизайн"],
      image: "/img/697ad4bb-fbce-4d72-b17f-44293b322d42.jpg"
    },
    {
      title: "Современные двери-книжки",
      description: "Инновационные решения с улучшенными механизмами",
      price: "от 14 000 ₽/м²",
      features: ["Доводчики", "Бесшумное закрывание", "Современный дизайн"],
      image: "/img/0b4ea9a4-683d-4feb-85ec-4e34cd0aeb60.jpg"
    },
    {
      title: "Премиум двери-книжки",
      description: "Элитные конструкции с эксклюзивной фурнитурой",
      price: "от 20 000 ₽/м²",
      features: ["Премиум фурнитура", "Индивидуальный дизайн", "Эксклюзивные материалы"],
      image: "/img/91b0cd9f-5269-427b-a67b-92c612098605.jpg"
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
              <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">Каталог</Link>
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
              Двери-книжки на заказ
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Распашные двери с поворотным механизмом для шкафов и гардеробных. 
              Классическое решение с современными технологиями.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Выбрать модель
            </Button>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Виды дверей-книжек
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doorTypes.map((type, index) => (
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
                  <ul className="space-y-2 mb-4">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Заказать
                  </Button>
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
            Преимущества дверей-книжек
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Полный обзор</h3>
              <p className="text-muted-foreground text-sm">Широкое открывание обеспечивает полный доступ к содержимому</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Надежность</h3>
              <p className="text-muted-foreground text-sm">Проверенная временем конструкция с долгим сроком службы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Дизайн</h3>
              <p className="text-muted-foreground text-sm">Классический стиль подходит к любому интерьеру</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Простота</h3>
              <p className="text-muted-foreground text-sm">Легкая установка и обслуживание механизмов</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDoors;