import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Installation = () => {
  const installationSteps = [
    {
      step: "1",
      title: "Подготовка",
      description: "Проверка комплектности и подготовка инструментов",
      icon: "CheckSquare",
      duration: "30 мин"
    },
    {
      step: "2",
      title: "Разметка",
      description: "Точная разметка мест крепления по проекту",
      icon: "Ruler",
      duration: "1 час"
    },
    {
      step: "3",
      title: "Монтаж каркаса",
      description: "Установка основных несущих элементов",
      icon: "Grid3x3",
      duration: "2-3 часа"
    },
    {
      step: "4",
      title: "Установка фурнитуры",
      description: "Монтаж направляющих, петель и механизмов",
      icon: "Settings",
      duration: "1-2 часа"
    },
    {
      step: "5",
      title: "Навешивание дверей",
      description: "Установка и регулировка дверных полотен",
      icon: "DoorOpen",
      duration: "1 час"
    },
    {
      step: "6",
      title: "Финальная настройка",
      description: "Регулировка механизмов и проверка работы",
      icon: "Wrench",
      duration: "30 мин"
    }
  ];

  const serviceFeatures = [
    {
      icon: "Truck",
      title: "Доставка в срок",
      description: "Привозим мебель точно в назначенное время"
    },
    {
      icon: "Users",
      title: "Опытная бригада",
      description: "Сборщики с опытом работы более 5 лет"
    },
    {
      icon: "Wrench",
      title: "Профессиональный инструмент",
      description: "Используем качественный инструмент для точной сборки"
    },
    {
      icon: "Broom",
      title: "Уборка после работ",
      description: "Убираем за собой весь мусор и упаковку"
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
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Услуги</Link>
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
              Доставка и установка
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Профессиональная доставка и сборка мебели опытными мастерами. 
              Гарантируем качественную установку с первого раза.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="Truck" size={20} className="mr-2" />
              Заказать установку
            </Button>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Этапы установки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-8 h-8 rounded-full mx-auto mb-2">
                    {step.step}
                  </Badge>
                  <CardTitle className="text-navy text-lg">{step.title}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Что входит в услугу
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-cream/20 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Стоимость услуг
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-navy">Доставка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">По Москве</span>
                    <Badge variant="secondary">Бесплатно</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">До 30 км от МКАД</span>
                    <Badge variant="outline">30 ₽/км</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Свыше 30 км</span>
                    <Badge variant="outline">50 ₽/км</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Подъем на этаж</span>
                    <Badge variant="outline">500 ₽/этаж</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="text-center pb-4">
                  <Icon name="Wrench" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-navy">Сборка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Двери-купе</span>
                    <Badge variant="outline">2 000 ₽</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Распашной шкаф</span>
                    <Badge variant="outline">3 000 ₽</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Шкаф-купе</span>
                    <Badge variant="outline">4 000 ₽</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Гардеробная</span>
                    <Badge variant="outline">от 6 000 ₽</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Гарантии и сервис
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Гарантия на сборку</h3>
              <p className="text-muted-foreground text-sm">2 года гарантии на качество сборки и установки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Точность времени</h3>
              <p className="text-muted-foreground text-sm">Приезжаем строго в назначенное время</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Сервисная поддержка</h3>
              <p className="text-muted-foreground text-sm">Бесплатные консультации по эксплуатации</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installation;