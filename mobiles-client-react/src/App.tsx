import React, { Fragment, useEffect } from 'react'
import { Store } from './Store'

interface IMobile {
    id: number
    name: string
    image: {medium: string, original: string}
    status: string
    lob: string
    countryCode: string
    publicationDate: Date
    price: number
}

export default function App(): JSX.Element {
    const IMAGE_URL = 'https://images.samsung.com/is/image/samsung/in-galaxy-m31-m315f-6gb-sm-m315fzbgins-frontblue-218636856?$PD_GALLERY_L_SHOP_JPG$'

    const { state, dispatch } = React.useContext( Store )
    useEffect(() => {
        state.mobiles.length === 0 && fetchDataAction()
    });
    const fetchDataAction = async () => {
        const URL_MOBILES = 'https://my-json-server.typicode.com/sarathchandrac/mockjson/mobiles'
        const IMAGE_URL = 'https://images.samsung.com/is/image/samsung/in-galaxy-m31-m315f-6gb-sm-m315fzbgins-frontblue-218636856?$PD_GALLERY_L_SHOP_JPG$'
        const data = await fetch( URL_MOBILES )
        const dataJSON = await data.json()
        return dispatch( {
            type: 'FETCH_DATA',
            payload: dataJSON
        } )
    }
    console.log("state", state);
    return (
        <Fragment>
            <header className="header" >
                <h1>Trending Mobiles</h1>
                <p>Select your favorite Mobiles</p>
            </header>
            <section className="mobile-layout">
                {state.mobiles.map( ( mobile: IMobile )=> {
                    return (
                        <section key={mobile.id} className="mobile-box">
                            <img src={IMAGE_URL}  alt={`Mobile Brand ${mobile.name}`} />
                            <div>{mobile.name}</div>
                            <section>
                                Price: {mobile.price} LOB: {mobile.lob}
                            </section>
                            <button type="button" >Fav</button>

                        </section>
                    )
                })}
            </section>

        </Fragment>
    )
}
