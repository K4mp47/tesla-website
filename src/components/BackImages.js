function BackImages() {
    return (
        <div className="">
            <picture className="tcl-image__picture h-full w-full" data-alt="Red Model 3 driving down a lakeside road" data-class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" data-iesrc="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg">
                <source srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-NA.jpg" media="(max-width: 599px)"/>
                <source srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg" media="(min-width: 600px)"/>
                <source srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-NA.jpg" media="(min-width: 600px) and (orientation:portrait)"/>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg" srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg" alt="Red Model 3 driving down a lakeside road" className="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center h-full w-full"/>
            </picture>
            <picture className="tcl-image__picture h-full w-screen" data-alt="Metallic blue Model Y driving down a hillside highway" data-class="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center" data-iesrc="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop">
                <source srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-ModelY-LHD-Mobile" media="(max-width: 599px)"/>
                <source srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop" media="(min-width: 600px)"/>
                <source srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2100,w_800,c_fit,f_auto,q_auto:best/Homepage-ModelY-LHD-Mobile" media="(min-width: 600px) and (orientation:portrait)"/>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop" srcSet="https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop" alt="Metallic blue Model Y driving down a hillside highway" className="tds-asset-fallback tcl-asset tcl-image__asset tcl-objectfit-position tcl-objectfit-position--center"/>
            </picture>
        </div>
    );
};

export default BackImages;