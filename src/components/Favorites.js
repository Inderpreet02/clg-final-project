import FavCard from "./FavCard";
import "./Favorites.css"
import WavesIcon from '@material-ui/icons/Waves';

const Favorites = () => {
    return (
        <div className="favorites">
            <div className="favorites__container">
                <h1>Our Favorites</h1>
                <div className="favorite__containerOptions">
                    <h3>SHOES</h3>
                    <h3>APPAREL</h3>
                    <h3>BASICS</h3>
                </div>
                <div className="favorites__main">
                    <FavCard heading={"Tree Dasher"} description={"Dail Running Shoe"} src={"https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/6zakQ3mbPCXQU23h5vsEe3/2"} Icon={WavesIcon}/>
                    <FavCard heading={"Tree Runner"} description={"Light and Breezy Sneaker"} src={"https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/5OndhAGrtVvJanLRyuqHcm/2"} Icon={WavesIcon}/>
                    <FavCard heading={"Wool Runner"} description={"Cozy Sneaker"} src={"https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/3SIs1eQwd7uJHonZHJX4gA/2"} Icon={WavesIcon}/>
                </div>
            </div>
        </div>
    );
}
 
export default Favorites;