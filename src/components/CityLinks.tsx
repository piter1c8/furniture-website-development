import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
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

const CityLinks = () => {
  // Группируем города по типам для лучшего отображения
  const cityTypes = {
    "крупные_центры": citiesData.cities.filter((city: City) => 
      city.type.includes("крупный") || city.type.includes("деловой_центр") || city.type.includes("промышленный_центр")
    ),
    "наукограды": citiesData.cities.filter((city: City) => 
      city.type.includes("наукоград") || city.type.includes("космический") || city.type.includes("авиационный")
    ),
    "престижные": citiesData.cities.filter((city: City) => 
      city.type.includes("престижный") || city.type.includes("элитный") || city.priceModifier > 1.2
    ),
    "малые_города": citiesData.cities.filter((city: City) => 
      city.type.includes("малый") || city.type.includes("небольшой") || city.type.includes("поселок")
    )
  };

  const getIconForCityType = (type: string) => {
    if (type.includes("наукоград") || type.includes("космический")) return "Rocket";
    if (type.includes("крупный") || type.includes("промышленный")) return "Building";
    if (type.includes("престижный") || type.includes("элитный")) return "Crown";
    if (type.includes("авиационный")) return "Plane";
    if (type.includes("деловой")) return "Briefcase";
    if (type.includes("транспортный")) return "Truck";
    if (type.includes("дачный")) return "TreePine";
    return "MapPin";
  };

  const formatCityType = (type: string) => {
    return type.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase());
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Работаем во всех городах Подмосковья
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите ваш город для получения персонализованного предложения с учетом местных особенностей
          </p>
        </div>

        {/* Основные города */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Основные города</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityTypes.крупные_центры.slice(0, 6).map((city: City) => (
              <Link key={city.slug} to={`/city/${city.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-navy">{city.name}</CardTitle>
                      <Icon 
                        name={getIconForCityType(city.type)} 
                        size={20} 
                        className="text-primary" 
                      />
                    </div>
                    <CardDescription className="text-sm">
                      {city.population} жителей
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {city.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {city.keyFeatures.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {formatCityType(city.type)}
                      </span>
                      <Badge variant={city.priceModifier > 1.1 ? "default" : "outline"} className="text-xs">
                        {city.priceModifier > 1.1 ? "Премиум" : "Стандарт"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Наукограды */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Наукограды и технологические центры</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cityTypes.наукограды.map((city: City) => (
              <Link key={city.slug} to={`/city/${city.slug}`}>
                <Card className="hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base text-navy">{city.name}</CardTitle>
                      <Icon 
                        name={getIconForCityType(city.type)} 
                        size={16} 
                        className="text-primary" 
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {city.specialties.slice(0, 2).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Все остальные города в компактном виде */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Все города Подмосковья</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {citiesData.cities
              .filter((city: City) => !cityTypes.крупные_центры.slice(0, 6).includes(city) && !cityTypes.наукограды.includes(city))
              .map((city: City) => (
              <Link key={city.slug} to={`/city/${city.slug}`}>
                <div className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer">
                  <div className="text-sm font-medium text-navy mb-1">{city.name}</div>
                  <div className="text-xs text-muted-foreground">{city.population}</div>
                  <Badge variant="outline" className="text-xs mt-1">
                    {city.keyFeatures[0]}
                  </Badge>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Статистика */}
        <div className="bg-gradient-to-r from-primary/10 to-cream/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-navy mb-4">География наших услуг</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{citiesData.cities.length}+</div>
              <div className="text-sm text-muted-foreground">городов Подмосковья</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.round(citiesData.cities.reduce((sum: number, city: City) => sum + parseInt(city.population), 0) / 1000000 * 10) / 10}М+
              </div>
              <div className="text-sm text-muted-foreground">жителей в зоне обслуживания</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">лет опыта в регионе</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityLinks;