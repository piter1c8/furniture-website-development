import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const NaturalWood = () => {
  const woodTypes = [
    {
      title: "Сосна",
      description: "Доступная хвойная порода с приятным ароматом",
      price: "от 8 000 ₽/м³",
      features: ["Легкая обработка", "Натуральный аромат", "Доступная цена"],
      properties: ["Плотность: 520 кг/м³", "Твердость: мягкая", "Цвет: светлый"],
      image: "/img/0b4ea9a4-683d-4feb-85ec-4e34cd0aeb60.jpg"
    },
    {
      title: "Дуб",
      description: "Премиальная твердая порода с выразительной текстурой",
      price: "от 25 000 ₽/м³",
      features: ["Высокая прочность", "Красивая текстура", "Долговечность"],
      properties: ["Плотность: 700 кг/м³", "Твердость: твердая", "Цвет: от светлого до темного"],
      image: "/img/91b0cd9f-5269-427b-a67b-92c612098605.jpg"
    },
    {
      title: "Ясень",
      description: "Прочная порода с контрастной текстурой",
      price: "от 18 000 ₽/м³",
      features: ["Высокая упругость", "Контрастная текстура", "Хорошая обрабатываемость"],
      properties: ["Плотность: 680 кг/м³", "Твердость: твердая", "Цвет: светлый с темными прожилками"],
      image: "/img/697ad4bb-fbce-4d72-b17f-44293b322d42.jpg"
    }
  ];

  const advantages = [
    {
      icon: "Leaf",
      title: "100% натуральность",
      description: "Экологически чистый материал без химических добавок"
    },
    {
      icon: "Heart",
      title: "Здоровый микроклимат",
      description: "Регулирует влажность и создает комфортную атмосферу"
    },
    {
      icon: "Crown",
      title: "Престиж",
      description: "Символ качества и высокого статуса"
    },
    {
      icon: "Clock",
      title: "Долговечность",
      description: "Служит десятилетиями при правильном уходе"
    }
  ];

  const finishes = [
    {
      title: "Масло",
      description: "Подчеркивает натуральную текстуру дерева",
      icon: "Droplets"
    },
    {
      title: "Лак",
      description: "Защищает поверхность и придает блеск",
      icon: "Sparkles"
    },
    {
      title: "Воск",
      description: "Создает матовую бархатистую поверхность",
      icon: "Circle"
    },
    {
      title: "Морилка",
      description: "Изменяет цвет с сохранением текстуры",
      icon: "Palette"
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
              Массив натурального дерева
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Премиальный материал для элитной мебели. 
              Натуральная красота и неповторимая текстура каждого изделия.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="TreePine" size={20} className="mr-2" />
              Выбрать породу
            </Button>
          </div>
        </div>
      </section>

      {/* Wood Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Породы дерева
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {woodTypes.map((type, index) => (
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
                      <h4 className="font-medium text-navy mb-2">Особенности:</h4>
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
                      <h4 className="font-medium text-navy mb-2">Свойства:</h4>
                      <div className="space-y-1">
                        {type.properties.map((property, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground">
                            {property}
                          </div>
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
            Преимущества натурального дерева
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
            Виды отделки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {finishes.map((finish, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={finish.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{finish.title}</h3>
                <p className="text-muted-foreground text-sm">{finish.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Уход за мебелью из массива
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Thermometer" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Температурный режим</h3>
                    <p className="text-muted-foreground text-sm">Избегайте резких перепадов температуры и прямых солнечных лучей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Droplets" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Влажность</h3>
                    <p className="text-muted-foreground text-sm">Поддерживайте влажность воздуха 40-60%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Чистка</h3>
                    <p className="text-muted-foreground text-sm">Используйте мягкую ткань и специальные средства для дерева</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Защита</h3>
                    <p className="text-muted-foreground text-sm">Используйте подставки под горячие предметы</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="RefreshCw" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Обновление</h3>
                    <p className="text-muted-foreground text-sm">Периодически обновляйте защитное покрытие</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Wrench" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Ремонт</h3>
                    <p className="text-muted-foreground text-sm">Мелкие повреждения легко устраняются шлифовкой</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-cream/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Сравнение пород по цене
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Icon name="TreePine" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Сосна</span>
                </div>
                <Badge variant="secondary">8 000 - 12 000 ₽/м³</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Icon name="TreePine" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Береза</span>
                </div>
                <Badge variant="secondary">15 000 - 20 000 ₽/м³</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Icon name="TreePine" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Ясень</span>
                </div>
                <Badge variant="secondary">18 000 - 25 000 ₽/м³</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Icon name="TreePine" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Дуб</span>
                </div>
                <Badge variant="secondary">25 000 - 40 000 ₽/м³</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <Icon name="TreePine" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Орех</span>
                </div>
                <Badge variant="secondary">35 000 - 55 000 ₽/м³</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaturalWood;