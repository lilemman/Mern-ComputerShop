import Cards from '../../components/Cards/Cards';
import Slider from '../../components/Slider/Slider';
import ProductCarousel from '../../components/ProductsCarousel/ProductCarousel';
import LatestProducts from '../../components/ProductsCarousel/LatestProducts';
import FooterLinks from '../../components/Footer/FooterLinks';
import FooterMenu from '../../components/Footer/FooterMenu';

const HomePage = () => {
  return (
    <>
      <Slider />
      <Cards />
      <div className="container">
        <LatestProducts/>
?      </div>
<FooterMenu/>

    </>
  );
};

export default HomePage;
