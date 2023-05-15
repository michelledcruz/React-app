const Title = () =>(
    <a href="/">
        <h1 key="head">
        Food Villa
        </h1>
    </a>
);

const Header = () => {
    return (
        <div className="header">
             {Title()}
            <div className="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;