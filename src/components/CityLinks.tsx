import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import citiesData from "@/data/cities.json";

const CityLinks = () => {
  // Группируем города по типам для лучшей навигации
  const cityGroups = {
    "Крупные города": citiesData.cities.filter(city => city.population > 100000),
    "Средние города": citiesData.cities.filter(city => city.population >= 50000 && city.population <= 100000),
    "Небольшие города": citiesData.cities.filter(city => city.population < 50000)
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Работаем в городах Подмосковья</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изготавливаем и устанавливаем корпусную мебель по индивидуальным размерам 
            во всех городах Московской области
          </p>
        </div>

        {Object.entries(cityGroups).map(([groupName, cities]) => (
          <div key={groupName} className="mb-12">
            <h3 className="text-2xl font-semibold text-navy mb-6 text-center">{groupName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Card key={city.slug} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <a href={`/city/${city.slug}`} className="no-underline">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-navy hover:text-primary transition-colors">
                          {city.name}
                        </CardTitle>
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {city.population.toLocaleString()} чел.
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${
                            city.priceModifier > 1.1 ? 'bg-orange-100 text-orange-800' :
                            city.priceModifier < 0.9 ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {city.priceModifier > 1.1 ? 'Премиум' :
                           city.priceModifier < 0.9 ? 'Эконом' :
                           'Стандарт'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {city.specificNeeds}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {city.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 bg-gradient-to-br from-primary/5 to-cream/20 rounded-xl p-8 text-center">
          <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy mb-4">
            Не нашли свой город?
          </h3>
          <p className="text-muted-foreground mb-6">
            Мы работаем по всей Московской области. Звоните, обсудим условия работы в вашем городе!
          </p>
          <a 
            href="tel:+74951234567" 
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            +7 (495) 123-45-67
          </a>
        </div>
      </div>
    </section>
  );
};

export default CityLinks;