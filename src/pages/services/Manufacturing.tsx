import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const manufacturingSteps = [
    {
      step: "1",
      title: "Подготовка материалов",
      description: "Раскрой плит по точным размерам на современном оборудовании",
      icon: "Scissors",
      duration: "1-2 дня"
    },
    {
      step: "2",
      title: "Обработка деталей",
      description: "Кромкование, сверление отверстий, фрезеровка",
      icon: "Settings",
      duration: "2-3 дня"
    },
    {
      step: "3",
      title: "Контроль качества",
      description: "Проверка размеров и качества обработки каждой детали",
      icon: "CheckCircle",
      duration: "1 день"
    },
    {
      step: "4",
      title: "Сборка и упаковка",
      description: "Предварительная сборка и упаковка для транспортировки",
      icon: "Package",
      duration: "1-2 дня"
    }
  ];

  const qualityFeatures = [
    {
      icon: "Award",
      title: "Сертифицированные материалы",
      description: "Используем только качественные материалы с сертификатами"
    },
    {
      icon: "Zap",
      title: "Современное оборудование",
      description: "Высокоточные станки с ЧПУ для идеальной обработки"
    },
    {
      icon: "Shield",
      title: "Контроль качества",
      description: "Многоступенчатый контроль на каждом этапе производства"
    },
    {
      icon: "Users",
      title: "Опытные мастера",
      description: "Команда профессионалов с многолетним опытом"
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
              Производство мебели
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Современное производство с контролем качества на каждом этапе. 
              От раскроя до готового изделия - все под нашим контролем.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="Factory" size={20} className="mr-2" />
              Узнать о производстве
            </Button>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Этапы производства
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingSteps.map((step, index) => (
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

      {/* Quality Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Гарантии качества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
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

      {/* Equipment Section */}
      <section className="py-16 bg-gradient-to-br from-cream/20 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Наше оборудование
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Scissors" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Форматно-раскроечный станок</h3>
                  <p className="text-muted-foreground text-sm">Точный раскрой плит с минимальными отходами</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Circle" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Кромкооблицовочный станок</h3>
                  <p className="text-muted-foreground text-sm">Качественное кромкование всех видов кромки</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Присадочный станок</h3>
                  <p className="text-muted-foreground text-sm">Точное сверление отверстий под фурнитуру</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Cpu" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Фрезерный станок с ЧПУ</h3>
                  <p className="text-muted-foreground text-sm">Сложная обработка деталей по программе</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Layers" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Шлифовальное оборудование</h3>
                  <p className="text-muted-foreground text-sm">Идеально гладкая поверхность деталей</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Упаковочное оборудование</h3>
                  <p className="text-muted-foreground text-sm">Надежная упаковка для безопасной доставки</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Сроки изготовления
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-cream/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="DoorOpen" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Двери-купе</span>
                </div>
                <Badge variant="secondary">7-10 дней</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-cream/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Archive" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Распашные шкафы</span>
                </div>
                <Badge variant="secondary">10-14 дней</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-cream/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Cabinet" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Шкафы-купе</span>
                </div>
                <Badge variant="secondary">14-18 дней</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-cream/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Shirt" size={24} className="text-primary" />
                  <span className="font-medium text-navy">Гардеробные</span>
                </div>
                <Badge variant="secondary">18-25 дней</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;