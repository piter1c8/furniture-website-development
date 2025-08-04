import { useParams, Navigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import citiesData from "@/data/cities.json";

interface City {
  name: string;
  slug: string;
  population: string;
  type: string;
  description: string;
  keyFeatures: string[];
  popularOrders: string[];
  localizedKeywords: string[];
  priceModifier: number;
  specialties: string[];
  advantages: string[];
}

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const [calculatorData, setCalculatorData] = useState({
    width: "",
    height: "",
    depth: "",
    material: "",
    category: ""
  });

  const city = citiesData.cities.find((c: City) => c.slug === citySlug);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const calculatePrice = () => {
    const basePrice = 15000;
    const volume = parseFloat(calculatorData.width || "0") * 
                  parseFloat(calculatorData.height || "0") * 
                  parseFloat(calculatorData.depth || "0") / 1000000;
    
    let materialMultiplier = 1;
    switch (calculatorData.material) {
      case "ldsp-premium": materialMultiplier = 1.5; break;
      case "mdf": materialMultiplier = 1.8; break;
      case "massiv": materialMultiplier = 3.0; break;
      default: materialMultiplier = 1;
    }
    
    let categoryMultiplier = 1;
    switch (calculatorData.category) {
      case "sliding-doors": categoryMultiplier = 1.2; break;
      case "book-doors": categoryMultiplier = 1.4; break;
      case "built-in": categoryMultiplier = 1.6; break;
      default: categoryMultiplier = 1;
    }

    const price = basePrice * volume * materialMultiplier * categoryMultiplier * city.priceModifier;
    return Math.round(price);
  };

  const testimonials = [
    {
      name: `${city.keyFeatures[0] === "новостройки" ? "Анна К." : city.keyFeatures[0] === "промышленность" ? "Сергей Р." : "Марина В."}`,
      text: `Заказывали ${city.popularOrders[0].toLowerCase()} в ${city.name}. Качество отличное, установили точно в срок!`,
      rating: 5,
      district: city.keyFeatures[0]
    },
    {
      name: `${city.keyFeatures[0] === "дачи" ? "Владимир П." : city.keyFeatures[0] === "наукоград" ? "Елена С." : "Дмитрий М."}`,
      text: `Спасибо за ${city.popularOrders[1] ? city.popularOrders[1].toLowerCase() : "качественную работу"}. Рекомендую всем в ${city.name}!`,
      rating: 5,
      district: city.keyFeatures[1] || city.keyFeatures[0]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream/20 to-primary/10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Шкафы на заказ в {city.name} | Изготовление и установка
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {city.description}. Создаем мебель с учетом особенностей города и потребностей жителей.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {city.keyFeatures.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-navy bg-white/90">
                  {feature}
                </Badge>
              ))}
            </div>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость в {city.name}
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Orders Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Популярные заказы в {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {city.popularOrders.map((order, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-navy text-lg">{order}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Популярный выбор жителей {city.name}
                  </p>
                  <Button variant="outline" className="w-full">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-cream/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Калькулятор стоимости для {city.name}
              </h2>
              <p className="text-xl text-muted-foreground">
                Узнайте стоимость вашего заказа с учетом региональных особенностей
              </p>
            </div>

            <Card className="p-8 bg-white border-0 shadow-xl">
              <div className="space-y-6">
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
                  <Label className="text-navy font-medium">Тип шкафа</Label>
                  <Select value={calculatorData.category} onValueChange={(value) => setCalculatorData({...calculatorData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sliding-doors">Шкаф-купе</SelectItem>
                      <SelectItem value="swing-doors">Распашной шкаф</SelectItem>
                      <SelectItem value="book-doors">Шкаф-книжка</SelectItem>
                      <SelectItem value="built-in">Встроенный шкаф</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-navy font-medium">Материал</Label>
                  <Select value={calculatorData.material} onValueChange={(value) => setCalculatorData({...calculatorData, material: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите материал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ldsp">ЛДСП стандарт</SelectItem>
                      <SelectItem value="ldsp-premium">ЛДСП премиум</SelectItem>
                      <SelectItem value="mdf">МДФ</SelectItem>
                      <SelectItem value="massiv">Массив дерева</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {calculatorData.width && calculatorData.height && calculatorData.depth && (
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Предварительная стоимость:</h4>
                    <p className="text-2xl font-bold text-primary">{calculatePrice().toLocaleString()} ₽</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      *Цена учитывает региональные особенности {city.name}
                    </p>
                  </div>
                )}

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  onClick={() => window.scrollTo({ top: document.querySelector('#contact')?.offsetTop, behavior: 'smooth' })}
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать точную стоимость в {city.name}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Преимущества работы с нами в {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {city.advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon 
                      name={index === 0 ? "Award" : index === 1 ? "Truck" : "Shield"} 
                      size={24} 
                      className="text-primary" 
                    />
                  </div>
                  <p className="text-muted-foreground">{advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gradient-to-br from-cream/20 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Наши специализации в {city.name}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {city.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <Icon name="CheckCircle" size={20} className="text-primary mr-3" />
                  <span className="text-navy font-medium">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Отзывы клиентов из {city.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-navy">{testimonial.name}</span>
                    <Badge variant="outline">{testimonial.district}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-cream/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Заявка на замер в {city.name}
              </h2>
              <p className="text-xl text-muted-foreground">
                Наш специалист приедет в любую точку {city.name} для бесплатного замера
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
                  <Label htmlFor="address" className="text-navy font-medium">
                    Адрес замера в {city.name}
                  </Label>
                  <Input id="address" placeholder={`${city.name}, ул. Примерная, д. 123, кв. 45`} />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-navy font-medium">Комментарий к заказу</Label>
                  <Input id="comment" placeholder="Опишите ваши пожелания" />
                </div>

                <Separator />

                <div className="bg-cream/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">
                    Что входит в бесплатный выезд замерщика в {city.name}:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Консультация с учетом особенностей {city.type.replace('_', ' ')}</li>
                    <li>• Точные замеры помещения</li>
                    <li>• 3D-визуализация будущей мебели</li>
                    <li>• Расчет стоимости с региональными особенностями</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку в {city.name}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-medium text-navy mb-4">
              Популярные запросы в {city.name}:
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {city.localizedKeywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Население {city.name}: {city.population} человек | Тип города: {city.type.replace('_', ' ')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityPage;