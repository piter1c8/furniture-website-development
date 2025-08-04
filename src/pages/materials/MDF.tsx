import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const MDF = () => {
  const mdfTypes = [
    {
      title: "МДФ Стандарт",
      description: "Классические плиты МДФ для базовых решений",
      price: "от 2 200 ₽/м²",
      features: ["Толщина 16-22 мм", "Плотность 720-870 кг/м³", "Гладкая поверхность"],
      finishes: ["Шпон", "Пленка ПВХ", "Эмаль", "Пластик"],
      image: "/img/91b0cd9f-5269-427b-a67b-92c612098605.jpg"
    },
    {
      title: "МДФ Премиум",
      description: "Высококачественные плиты с улучшенными свойствами",
      price: "от 3 200 ₽/м²",
      features: ["Толщина 18-25 мм", "Повышенная плотность", "Влагостойкость"],
      finishes: ["Натуральный шпон", "Акрил", "Soft-touch", "Металлик"],
      image: "/img/697ad4bb-fbce-4d72-b17f-44293b322d42.jpg"
    },
    {
      title: "МДФ Элит",
      description: "Премиальные плиты для эксклюзивной мебели",
      price: "от 4 500 ₽/м²",
      features: ["Толщина 22-32 мм", "Экстра плотность", "Идеальная геометрия"],
      finishes: ["Экзотический шпон", "Глянцевая эмаль", "Кожа", "Стекло"],
      image: "/img/0b4ea9a4-683d-4feb-85ec-4e34cd0aeb60.jpg"
    }
  ];

  const advantages = [
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Изготовлен из натуральных древесных волокон"
    },
    {
      icon: "Zap",
      title: "Прочность",
      description: "Высокая плотность и устойчивость к нагрузкам"
    },
    {
      icon: "Scissors",
      title: "Обрабатываемость",
      description: "Отлично поддается фрезеровке и резке"
    },
    {
      icon: "Palette",
      title: "Отделка",
      description: "Принимает любые виды покрытий и отделки"
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
              МДФ - плита средней плотности
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Экологичный материал из натуральных древесных волокон. 
              Идеален для фасадов и декоративных элементов.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="TreePine" size={20} className="mr-2" />
              Выбрать отделку
            </Button>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Виды МДФ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mdfTypes.map((type, index) => (
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
                      <h4 className="font-medium text-navy mb-2">Виды отделки:</h4>
                      <div className="flex flex-wrap gap-1">
                        {type.finishes.map((finish, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {finish}
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
            Преимущества МДФ
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

      {/* Finishes Section */}
      <section className="py-16 bg-gradient-to-br from-cream/20 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Виды отделки МДФ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TreePine" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Шпонирование</h3>
              <p className="text-muted-foreground text-sm mb-4">Натуральный шпон ценных пород дерева</p>
              <Badge variant="outline">от 3 500 ₽/м²</Badge>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Paintbrush" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Эмалирование</h3>
              <p className="text-muted-foreground text-sm mb-4">Покрытие полиуретановой эмалью</p>
              <Badge variant="outline">от 4 200 ₽/м²</Badge>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Layers" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Пленка ПВХ</h3>
              <p className="text-muted-foreground text-sm mb-4">Декоративная пленка с различными текстурами</p>
              <Badge variant="outline">от 2 800 ₽/м²</Badge>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Акрил</h3>
              <p className="text-muted-foreground text-sm mb-4">Глянцевое акриловое покрытие</p>
              <Badge variant="outline">от 5 500 ₽/м²</Badge>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Square" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Пластик HPL</h3>
              <p className="text-muted-foreground text-sm mb-4">Высокопрочный декоративный пластик</p>
              <Badge variant="outline">от 3 200 ₽/м²</Badge>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Стекло</h3>
              <p className="text-muted-foreground text-sm mb-4">Закаленное стекло различных цветов</p>
              <Badge variant="outline">от 6 800 ₽/м²</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Применение МДФ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DoorOpen" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Фасады</h3>
              <p className="text-muted-foreground text-sm">Дверцы шкафов и кухонных гарнитуров</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Frame" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Декор</h3>
              <p className="text-muted-foreground text-sm">Декоративные элементы и молдинги</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Table" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Столешницы</h3>
              <p className="text-muted-foreground text-sm">Рабочие поверхности столов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Columns" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Панели</h3>
              <p className="text-muted-foreground text-sm">Стеновые и потолочные панели</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MDF;