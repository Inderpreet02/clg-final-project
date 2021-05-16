import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <h1>FORBIRDS</h1>
            <div className="footer__content">
                <div className="footer__column">
                    <ul type="none">
                        <li><h3 className="footer__heading">HELP</h3></li>
                        <li>help@shoestore.com</li>
                        <li>Returns/Exchanges</li>
                        <li>FAQ/Contact Us</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <ul type="none">
                        <li><h3 className="footer__heading">SHOP</h3></li>
                        <li>Men's Shoes</li>
                        <li>Women's Shoes</li>
                        <li>Men's Apparel</li>
                        <li>Women's Apparel</li>
                        <li>Socks</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <ul type="none">
                        <li><h3 className="footer__heading">COMPANY</h3></li>
                        <li>Our Stores</li>
                        <li>Our Story</li>
                        <li>Our Materials</li>
                        <li>Sustainability</li>
                        <li>Partners</li>
                        <li>Bulk Orders</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;