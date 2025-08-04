import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Measurement = () => {
  const measurementSteps = [
    {
      step: "1",
      title: "Заявка",
      description: "Оставляете заявку на сайте или звоните нам",
      icon: "Phone"
    },
    {
      step: "2", 
      title: "Согласование",
      description: "Согласовываем удобное время визита",
      icon: "Calendar"
    },
    {
      step: "3",
      title: "Выезд",
      description: "Специалист приезжает в назначенное время",
      icon: "Car"
    },
    {
      step: "4",
      title: "Замер",
      description: "Производим точные измерения помещения",
      icon: "Ruler"
    },
    {
      step: "5",
      title: "Консультация",
      description: "Обсуждаем варианты и материалы",
      icon: "MessageCircle"
    },
    {
      step: "6",
      title: "Расчет",
      description: "Рассчитываем точную стоимость проекта",
      icon: "Calculator"
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
              Бесплатный замер
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Профессиональный замер помещения с консультацией специалиста. 
              Точные размеры - основа качественной мебели.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="Ruler" size={20} className="mr-2" />
              Заказать замер
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Как проходит замер
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {measurementSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-8 h-8 rounded-full mx-auto mb-2">
                    {step.step}
                  </Badge>
                  <CardTitle className="text-navy">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Что входит в бесплатный замер
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Точные измерения</h3>
                  <p className="text-muted-foreground text-sm">Профессиональные инструменты для максимальной точности</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Консультация по материалам</h3>
                  <p className="text-muted-foreground text-sm">Подбор оптимальных материалов под ваш бюджет</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Дизайн-проект</h3>
                  <p className="text-muted-foreground text-sm">Эскиз будущей мебели с размерами</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">3D-визуализация</h3>
                  <p className="text-muted-foreground text-sm">Реалистичное изображение готового результата</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Расчет стоимости</h3>
                  <p className="text-muted-foreground text-sm">Детальная смета с указанием всех работ</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Check" size={20} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-navy">Рекомендации</h3>
                  <p className="text-muted-foreground text-sm">Советы по оптимизации пространства</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-cream/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Готовы заказать замер?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Наш специалист приедет в удобное для вас время и проведет профессиональный замер
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать замер
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Measurement;