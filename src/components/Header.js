import { useEffect, useState } from "react";

function Header() {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [MenuOpen, setMenuOpen] = useState(true);

    const handleMenuClick = () => {
        setMenuOpen(!MenuOpen);
    }

    const RemoveMenuClick = () => {
        setMenuOpen(true);
    }

    const HandleSize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {

        window.addEventListener('resize', HandleSize);

        return() => {
            window.removeEventListener('resize', HandleSize);
        }
    }, []);

    useEffect(() => {
        const NoScroll = () => {
            if(!MenuOpen){
                window.scrollTo(0,0);
            }
        }
        
        if (!MenuOpen) {
          //document.body.style.overflow = "auto";
          window.addEventListener("scroll", NoScroll);
        }
        
        return() => {
            window.removeEventListener('scroll', NoScroll);
        }
      }, [MenuOpen]);
    
    
    const Larger = windowWidth > 1100 ? 1 : 0;

    return (
        <div className="flex text-md fixed text-slate-300 font-medium w-full">
            <header className="flex justify-between w-full p-5">
                <a href="/" className="h-12 w-40">
                    <svg className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
                </a>
                {Larger ? (
                    <ul className="flex justify-center list-none">
                    <li className="mx-5">Model S</li>
                    <li className="mx-5">Model 3</li>
                    <li className="mx-5">Model X</li>
                    <li className="mx-5">Model Y</li>
                    <li className="mx-5">Solar Roof</li>
                    <li className="mx-5">Solar Panels</li>
                    <li className="mx-5">Powerwall</li>
                </ul>
                ) : (<ul></ul>)}
                {!Larger ? 
                    (
                    <button className="bg-slate-300 rounded-sm bg-opacity-40 w-14 h-7" onClick={handleMenuClick}>Menu</button>
                    ) : (
                    <ul className="flex justify-center list-none">
                        <li className="mx-3">Shop</li>
                        <li className="mx-3">Account</li>
                        <li className="mx-3"><button onClick={handleMenuClick}>Menu</button></li>
                    </ul>
                )}
            </header>
            <div className={`fixed inset-0 none transition-all duration-1000 ${ MenuOpen ? "-z-20" : "z-10 backdrop-blur-sm"}`} onClick={RemoveMenuClick}></div>
            <aside className={`fixed z-50 transition-all duration-1000 ${ MenuOpen ? "-right-80" : "right-0"} w-80 bg-white p-4 z-10 h-screen text-black `}>
                <button className="border-spacing-0 top-4 text-3xl absolute right-2" onClick={handleMenuClick}>&times;</button>
                <div className="pt-14 font-lg text-md ml-10">
                <a href="/" className="block mb-4">Existing Inventory</a>
                <a href="/" className="block mb-4">Used Inventory</a>
                <a href="/" className="block mb-4">Trade-In</a>
                <a href="/" className="block mb-4">Demo Drive</a>
                <a href="/" className="block mb-4">Insurance</a>
                <a href="/" className="block mb-4">Fleet</a>
                <a href="/" className="block mb-4">Commercial Energy</a>
                <a href="/" className="block mb-4">Utilities</a>
                <a href="/" className="block mb-4">Charging</a>
                <a href="/" className="block mb-4">Careers</a>
                <a href="/" className="block mb-4">Find Us</a>
                <a href="/" className="block mb-4">Events</a>
                <a href="/" className="block mb-4">Support</a>
                <a href="/" className="block mb-4">Investor Relations</a>

                <a href="/" className="block">More</a>
                </div>
            </aside>
            <div className="fixed bottom-0 text-center text-xs md:text-md font-medium w-full flex justify-center z-0">
                <button className="my-4 mr-3 md:my-20  bg-slate-300 text-slate-800 rounded-md bg-opacity-70 w-40 md:w-60 h-10"> Custom order </button>
                <button className="my-4 ml-3 md:my-20 bg-gray-950 text-slate-300 rounded-md bg-opacity-70 w-40 md:w-60 h-10"> Demo Drive </button>
            </div>
        </div>
    );
}

export default Header;