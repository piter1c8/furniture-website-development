import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import CityLinks from "@/components/CityLinks";
import { useState } from "react";

const Index = () => {
  const [calculatorData, setCalculatorData] = useState({
    width: "",
    height: "",
    depth: "",
    material: "",
    category: ""
  });

  const furnitureCategories = [
    {
      id: "sliding-doors",
      title: "Двери-купе",
      description: "Раздвижные системы для экономии пространства. Современные профили и качественная фурнитура.",
      image: "/img/0b4ea9a4-683d-4feb-85ec-4e34cd0aeb60.jpg",
      icon: "DoorOpen",
      priceFrom: "от 15 000 ₽"
    },
    {
      id: "accordion-doors",
      title: "Двери-гармошки",
      description: "Складные конструкции с плавным механизмом. Идеальны для гардеробных и кладовых.",
      image: "/img/91b0cd9f-5269-427b-a67b-92c612098605.jpg",
      icon: "Layers",
      priceFrom: "от 12 000 ₽"
    },
    {
      id: "book-doors",
      title: "Двери-книжки",
      description: "Распашные конструкции с поворотным механизмом. Классическое решение для любого интерьера.",
      image: "/img/697ad4bb-fbce-4d72-b17f-44293b322d42.jpg",
      icon: "BookOpen",
      priceFrom: "от 18 000 ₽"
    },
    {
      id: "partitions",
      title: "Перегородки",
      description: "Мобильные и стационарные конструкции для зонирования пространства.",
      image: "/img/0b4ea9a4-683d-4feb-85ec-4e34cd0aeb60.jpg",
      icon: "Columns",
      priceFrom: "от 8 000 ₽"
    },
    {
      id: "hinged-wardrobes",
      title: "Шкафы распашные",
      description: "Классические шкафы с распашными дверьми. Надежность и функциональность.",
      image: "/img/91b0cd9f-5269-427b-a67b-92c612098605.jpg",
      icon: "Archive",
      priceFrom: "от 25 000 ₽"
    },
    {
      id: "built-in-wardrobes",
      title: "Шкафы встроенные",
      description: "Интегрированные в ниши решения. Максимальное использование пространства.",
      image: "/img/697ad4bb-fbce-4d72-b17f-44293b322d42.jpg",
      icon: "Inbox",
      priceFrom: "от 30 000 ₽"
    },
    {
      id: "sliding-wardrobes",
      title: "Шкафы-купе",
      description: "Шкафы с раздвижными системами. Современное решение для спальни и прихожей.",
      image: "/img/0b4ea9a4-683d-4feb-85ec-4e34cd0aeb60.jpg",
      icon: "Cabinet",
      priceFrom: "от 35 000 ₽"
    },
    {
      id: "dressing-rooms",
      title: "Гардеробные",
      description: "Системы хранения с комбинированными решениями. Полки, штанги, ящики на заказ.",
      image: "/img/91b0cd9f-5269-427b-a67b-92c612098605.jpg",
      icon: "Shirt",
      priceFrom: "от 50 000 ₽"
    }
  ];

  const advantages = [
    {
      icon: "Ruler",
      title: "Индивидуальные размеры",
      description: "Мебель изготавливается точно под ваши размеры"
    },
    {
      icon: "Palette",
      title: "Выбор материалов",
      description: "Широкий выбор цветов, текстур и фурнитуры"
    },
    {
      icon: "Clock",
      title: "Быстрое изготовление",
      description: "Готовность заказа от 7 до 14 рабочих дней"
    },
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "5 лет гарантии на всю продукцию"
    }
  ];

  const calculatePrice = () => {
    const basePrice = 5000;
    const width = parseFloat(calculatorData.width) || 0;
    const height = parseFloat(calculatorData.height) || 0;
    const depth = parseFloat(calculatorData.depth) || 0;
    
    const area = (width * height) / 10000; // перевод в м²
    const materialMultiplier = calculatorData.material === "premium" ? 1.5 : 1.2;
    
    return Math.round(basePrice * area * materialMultiplier);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Home" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-navy">МебельПроект</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-cream via-white to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6 leading-tight">
              Корпусная мебель<br />
              <span className="text-primary">по индивидуальным размерам</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Производим качественную мебель для дома и офиса. Замер, дизайн-проект, изготовление и установка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Ruler" size={20} className="mr-2" />
                Вызвать замерщика
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Каталог мебели</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент корпусной мебели для дома и офиса. Все изделия изготавливаются по индивидуальным размерам.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {furnitureCategories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon name={category.icon} size={24} className="text-primary" />
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {category.priceFrom}
                    </Badge>
                  </div>
                  <CardTitle className="text-navy text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {category.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте предварительную стоимость вашей мебели
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-cream/20 to-primary/5 border-0 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="category" className="text-navy font-medium">Категория мебели</Label>
                    <Select value={calculatorData.category} onValueChange={(value) => setCalculatorData({...calculatorData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        {furnitureCategories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>{cat.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="width" className="text-navy font-medium">Ширина (см)</Label>
                      <Input 
                        id="width"
                        type="number"
                        placeholder="200"
                        value={calculatorData.width}
                        onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-navy font-medium">Высота (см)</Label>
                      <Input 
                        id="height"
                        type="number"
                        placeholder="240"
                        value={calculatorData.height}
                        onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="depth" className="text-navy font-medium">Глубина (см)</Label>
                      <Input 
                        id="depth"
                        type="number"
                        placeholder="60"
                        value={calculatorData.depth}
                        onChange={(e) => setCalculatorData({...calculatorData, depth: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="material" className="text-navy font-medium">Материал</Label>
                    <Select value={calculatorData.material} onValueChange={(value) => setCalculatorData({...calculatorData, material: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите материал" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standart">ЛДСП стандарт</SelectItem>
                        <SelectItem value="premium">ЛДСП премиум</SelectItem>
                        <SelectItem value="mdf">МДФ</SelectItem>
                        <SelectItem value="natural">Массив дерева</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center bg-white rounded-xl p-8 shadow-lg">
                  <Icon name="Calculator" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-navy mb-2">Предварительная стоимость</h3>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {calculatorData.width && calculatorData.height && calculatorData.material 
                      ? `${calculatePrice().toLocaleString()} ₽`
                      : "0 ₽"
                    }
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Точная стоимость рассчитывается после замера
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать точный расчет
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <CityLinks />

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-cream/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">Заявка на замер</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
              </p>
            </div>

            <Card className="p-8 bg-white border-0 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-navy font-medium">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-navy font-medium">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="address" className="text-navy font-medium">Адрес замера</Label>
                  <Input id="address" placeholder="Москва, ул. Примерная, д. 123, кв. 45" />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-navy font-medium">Комментарий к заказу</Label>
                  <Input id="comment" placeholder="Опишите ваши пожелания" />
                </div>

                <Separator />

                <div className="bg-cream/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Что входит в бесплатный выезд замерщика:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Консультация по материалам и фурнитуре</li>
                    <li>• Точные замеры помещения</li>
                    <li>• 3D-визуализация будущей мебели</li>
                    <li>• Расчет точной стоимости</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Home" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">МебельПроект</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Производство корпусной мебели по индивидуальным размерам с 2015 года.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Мебель для дома</li>
                <li>Офисная мебель</li>
                <li>Торговое оборудование</li>
                <li>3D-визуализация</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@mebelproject.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Производственная, 12</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>Пн-Пт: 9:00 - 19:00</div>
                <div>Сб: 10:00 - 17:00</div>
                <div>Вс: выходной</div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-600" />
          
          <div className="text-center text-sm text-gray-400">
            © 2024 МебельПроект. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;