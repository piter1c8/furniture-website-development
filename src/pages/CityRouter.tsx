import { useParams } from "react-router-dom";
import CityPage from "@/components/CityPage";
import citiesData from "@/data/cities.json";

const CityRouter = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  const cityData = citiesData.cities.find(city => city.slug === citySlug);
  
  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">404</h1>
          <p className="text-xl text-gray-600">Город не найден</p>
          <a href="/" className="text-primary hover:underline mt-4 inline-block">
            Вернуться на главную
          </a>
        </div>
      </div>
    );
  }

  return <CityPage cityData={cityData} />;
};

export default CityRouter;