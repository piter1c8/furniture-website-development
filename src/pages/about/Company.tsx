import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Company = () => {
  const achievements = [
    {
      number: "2500+",
      title: "Выполненных проектов",
      description: "За 9 лет работы"
    },
    {
      number: "15",
      title: "Городов Подмосковья",
      description: "География работы"
    },
    {
      number: "98%",
      title: "Довольных клиентов",
      description: "По отзывам"
    },
    {
      number: "5 лет",
      title: "Гарантия",
      description: "На всю продукцию"
    }
  ];

  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      experience: "15 лет в мебельной индустрии",
      description: "Основатель компании, эксперт по корпусной мебели"
    },
    {
      name: "Мария Сидорова",
      position: "Главный дизайнер",
      experience: "12 лет в дизайне интерьеров",
      description: "Создает уникальные проекты для каждого клиента"
    },
    {
      name: "Дмитрий Козлов",
      position: "Руководитель производства",
      experience: "18 лет в производстве мебели",
      description: "Контролирует качество на всех этапах изготовления"
    },
    {
      name: "Елена Морозова",
      position: "Менеджер по работе с клиентами",
      experience: "8 лет в сфере продаж",
      description: "Помогает клиентам выбрать идеальное решение"
    }
  ];

  const values = [
    {
      icon: "Award",
      title: "Качество",
      description: "Используем только проверенные материалы и технологии"
    },
    {
      icon: "Clock",
      title: "Пунктуальность",
      description: "Всегда соблюдаем сроки изготовления и доставки"
    },
    {
      icon: "Users",
      title: "Клиентоориентированность",
      description: "Каждый клиент получает индивидуальный подход"
    },
    {
      icon: "Zap",
      title: "Инновации",
      description: "Постоянно внедряем новые технологии и решения"
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
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">О компании</Link>
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
              О компании МебельПроект
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              9 лет создаем качественную корпусную мебель по индивидуальным размерам. 
              Более 2500 довольных клиентов в Москве и Подмосковье.
            </p>
            <Button size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Icon name="Users" size={20} className="mr-2" />
              Познакомиться с командой
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Наши достижения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <h3 className="font-semibold text-navy mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              История компании
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">2015 год - Основание</h3>
                  <p className="text-muted-foreground">
                    Александр Петров, имея за плечами многолетний опыт работы в мебельной индустрии, 
                    решил создать компанию, которая будет производить качественную мебель по доступным ценам.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Factory" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">2017 год - Собственное производство</h3>
                  <p className="text-muted-foreground">
                    Открытие собственного производственного цеха с современным оборудованием. 
                    Это позволило полностью контролировать качество и сократить сроки изготовления.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">2019 год - Расширение географии</h3>
                  <p className="text-muted-foreground">
                    Начали работать не только в Москве, но и во всех крупных городах Подмосковья. 
                    Создали сеть партнеров для обеспечения качественного сервиса в регионах.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">2022 год - Признание качества</h3>
                  <p className="text-muted-foreground">
                    Получили сертификат качества ISO 9001 и стали лауреатами премии "Лучшая мебельная компания Подмосковья". 
                    Количество довольных клиентов превысило 2000 человек.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Rocket" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">2024 год - Новые горизонты</h3>
                  <p className="text-muted-foreground">
                    Внедрили 3D-проектирование и виртуальную реальность для визуализации проектов. 
                    Запустили онлайн-конфигуратор мебели и расширили ассортимент материалов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-cream/20 to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <CardTitle className="text-navy text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {member.position}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-cream/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-8">
              Наша миссия
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Мы создаем мебель, которая делает дом уютнее, а жизнь комфортнее. 
              Каждое изделие - это результат профессионализма, внимания к деталям и заботы о клиенте.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-navy mb-2">Цель</h3>
                <p className="text-sm text-muted-foreground">
                  Стать лидером в производстве корпусной мебели в Подмосковье
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Icon name="Eye" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-navy mb-2">Видение</h3>
                <p className="text-sm text-muted-foreground">
                  Качественная мебель должна быть доступна каждой семье
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-navy mb-2">Принципы</h3>
                <p className="text-sm text-muted-foreground">
                  Честность, качество и забота о каждом клиенте
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;