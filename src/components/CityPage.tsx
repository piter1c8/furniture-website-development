import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface CityData {
  name: string;
  slug: string;
  population: number;
  type: string;
  features: string[];
  popularOrders: string[];
  keyWords: string[];
  priceModifier: number;
  description: string;
  specificNeeds: string;
  workingTime: string;
}

interface CityPageProps {
  cityData: CityData;
}

const CityPage = ({ cityData }: CityPageProps) => {
  const [calculatorData, setCalculatorData] = useState({
    width: "",
    height: "",
    depth: "",
    material: "",
    type: ""
  });

  const furnitureTypes = [
    { id: "sliding", name: "Шкаф-купе", basePrice: 25000 },
    { id: "hinged", name: "Распашной шкаф", basePrice: 20000 },
    { id: "builtin", name: "Встроенный шкаф", basePrice: 30000 },
    { id: "wardrobe", name: "Гардеробная", basePrice: 45000 }
  ];

  const materials = [
    { id: "ldsp", name: "ЛДСП стандарт", multiplier: 1.0 },
    { id: "ldsp-premium", name: "ЛДСП премиум", multiplier: 1.3 },
    { id: "mdf", name: "МДФ", multiplier: 1.6 },
    { id: "natural", name: "Массив дерева", multiplier: 2.2 }
  ];

  const calculatePrice = () => {
    if (!calculatorData.width || !calculatorData.height || !calculatorData.depth || !calculatorData.type || !calculatorData.material) {
      return 0;
    }

    const width = parseFloat(calculatorData.width) / 100; // в метрах
    const height = parseFloat(calculatorData.height) / 100;
    const depth = parseFloat(calculatorData.depth) / 100;
    
    const volume = width * height * depth;
    const selectedType = furnitureTypes.find(t => t.id === calculatorData.type);
    const selectedMaterial = materials.find(m => m.id === calculatorData.material);
    
    if (!selectedType || !selectedMaterial) return 0;
    
    const basePrice = selectedType.basePrice * volume;
    const materialPrice = basePrice * selectedMaterial.multiplier;
    const cityPrice = materialPrice * cityData.priceModifier;
    
    return Math.round(cityPrice);
  };

  const advantages = [
    {
      icon: "MapPin",
      title: `Работаем в ${cityData.name}`,
      description: `Знаем особенности планировок и предпочтений жителей города`
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: `Доставим и установим мебель в ${cityData.name} в удобное время`
    },
    {
      icon: "Users",
      title: "Местная команда",
      description: "Наши мастера работают в вашем районе постоянно"
    },
    {
      icon: "Star",
      title: "Гарантия 5 лет",
      description: "Полное сервисное обслуживание в вашем городе"
    }
  ];

  const testimonials = [
    {
      name: "Анна С.",
      location: cityData.name,
      text: `Заказывали шкаф-купе в ${cityData.name}. Качество отличное, установили быстро и аккуратно.`,
      rating: 5
    },
    {
      name: "Михаил К.",
      location: cityData.name,
      text: `Сделали гардеробную под наши размеры. ${cityData.specificNeeds.toLowerCase()}. Очень довольны!`,
      rating: 5
    },
    {
      name: "Елена В.",
      location: cityData.name,
      text: `Профессиональный подход, качественные материалы. Рекомендую всем в ${cityData.name}!`,
      rating: 5
    }
  ];

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
              <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
              <a href="/#calculator" className="text-foreground hover:text-primary transition-colors">Калькулятор</a>
              <a href="/#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-cream via-white to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
              Шкафы на заказ в {cityData.name}<br />
              <span className="text-primary">| Изготовление и установка</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Производим качественную корпусную мебель для жителей {cityData.name}. 
              {cityData.specificNeeds}. Замер, дизайн-проект, изготовление и установка 
              в {cityData.description}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость в {cityData.name}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Ruler" size={20} className="mr-2" />
                Вызвать замерщика в {cityData.name}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* City Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              Почему выбирают нас в {cityData.name}
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
        </div>
      </section>

      {/* Popular Orders */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              Популярные заказы в {cityData.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cityData.popularOrders.map((order, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-navy flex items-center">
                      <Icon name="CheckCircle" size={20} className="text-primary mr-2" />
                      {order}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Востребованное решение среди жителей {cityData.name}. 
                      Учитываем особенности {cityData.features.join(", ")}.
                    </CardDescription>
                    <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                      Узнать цену
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Калькулятор стоимости для {cityData.name}
              </h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте стоимость мебели с учетом цен в {cityData.name}
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-cream/20 to-primary/5 border-0 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="type" className="text-navy font-medium">Тип мебели</Label>
                    <Select value={calculatorData.type} onValueChange={(value) => setCalculatorData({...calculatorData, type: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        {furnitureTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
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
                        {materials.map((material) => (
                          <SelectItem key={material.id} value={material.id}>{material.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center text-center bg-white rounded-xl p-8 shadow-lg">
                  <Icon name="Calculator" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-navy mb-2">Стоимость в {cityData.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {calculatePrice() > 0 ? `${calculatePrice().toLocaleString()} ₽` : "0 ₽"}
                  </div>
                  <Badge variant="secondary" className="mb-4">
                    Цены для {cityData.name} {cityData.priceModifier !== 1.0 && 
                      (cityData.priceModifier > 1.0 ? `+${Math.round((cityData.priceModifier - 1) * 100)}%` : 
                       `-${Math.round((1 - cityData.priceModifier) * 100)}%`)
                    }
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-6">
                    Точная стоимость после выезда замерщика в {cityData.name}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать расчет в {cityData.name}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              Отзывы клиентов из {cityData.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-navy">{testimonial.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {testimonial.location}
                        </CardDescription>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Заявка на замер в {cityData.name}
              </h2>
              <p className="text-xl text-muted-foreground">
                Наш специалист приедет в {cityData.name} в удобное для вас время
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-cream/20 border-0 shadow-xl">
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
                  <Label htmlFor="address" className="text-navy font-medium">Адрес в {cityData.name}</Label>
                  <Input id="address" placeholder={`${cityData.name}, ул. Примерная, д. 123, кв. 45`} />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-navy font-medium">Комментарий к заказу</Label>
                  <Input id="comment" placeholder="Опишите ваши пожелания" />
                </div>

                <Separator />

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold text-navy mb-3">Время работы в {cityData.name}:</h4>
                  <p className="text-sm text-muted-foreground mb-3">{cityData.workingTime}</p>
                  <h4 className="font-semibold text-navy mb-2">Что входит в бесплатный выезд:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Консультация по материалам и фурнитуре</li>
                    <li>• Точные замеры с учетом особенностей планировки</li>
                    <li>• 3D-визуализация будущей мебели</li>
                    <li>• Расчет точной стоимости для {cityData.name}</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Заказать замер в {cityData.name}
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
                Производство корпусной мебели по индивидуальным размерам в {cityData.name} с 2015 года.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги в {cityData.name}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {cityData.popularOrders.map((order, index) => (
                  <li key={index}>{order}</li>
                ))}
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
                  <span>Работаем в {cityData.name}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="text-sm text-gray-300">
                {cityData.workingTime}
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-600" />
          
          <div className="text-center text-sm text-gray-400">
            © 2024 МебельПроект в {cityData.name}. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CityPage;