import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Design = () => {
  const designServices = [
    {
      title: "2D-проектирование",
      description: "Технические чертежи с размерами и спецификацией",
      price: "Бесплатно",
      features: ["Точные размеры", "Спецификация материалов", "Схема сборки"],
      icon: "FileText"
    },
    {
      title: "3D-визуализация",
      description: "Реалистичное изображение будущей мебели в интерьере",
      price: "от 2 000 ₽",
      features: ["Фотореалистичность", "Разные ракурсы", "Варианты цветов"],
      icon: "Box"
    },
    {
      title: "Дизайн интерьера",
      description: "Комплексное решение для всего помещения",
      price: "от 15 000 ₽",
      features: ["Планировка", "Подбор мебели", "Цветовые решения"],
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
              Дизайн и проектирование
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Профессиональное проектирование мебели с 3D-визуализацией. 
              Увидьте результат до начала производства.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="Palette" size={20} className="mr-2" />
              Заказать проект
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Услуги проектирования
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-navy text-lg">{service.title}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Этапы проектирования
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Техническое задание</h3>
              <p className="text-muted-foreground text-sm">Обсуждаем ваши пожелания и требования</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="PenTool" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Эскизирование</h3>
              <p className="text-muted-foreground text-sm">Создаем первые наброски и варианты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Monitor" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">3D-моделирование</h3>
              <p className="text-muted-foreground text-sm">Создаем детальную 3D-модель</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Утверждение</h3>
              <p className="text-muted-foreground text-sm">Вносим правки и утверждаем проект</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-cream/20 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Преимущества 3D-проектирования
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Eye" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Визуализация результата</h3>
                  <p className="text-muted-foreground text-sm">Увидите, как будет выглядеть мебель в вашем интерьере</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Быстрые изменения</h3>
                  <p className="text-muted-foreground text-sm">Легко вносить правки на этапе проектирования</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="DollarSign" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Экономия средств</h3>
                  <p className="text-muted-foreground text-sm">Избежите ошибок и переделок в производстве</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Palette" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Выбор материалов</h3>
                  <p className="text-muted-foreground text-sm">Сравните разные варианты отделки и цветов</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Ruler" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Точные размеры</h3>
                  <p className="text-muted-foreground text-sm">Проверите соответствие размеров помещению</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Обсуждение с семьей</h3>
                  <p className="text-muted-foreground text-sm">Покажите проект близким для принятия решения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;