import React from 'react'
import '../css/general.css'

export default function BecomeRetailer() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h1>BECOME A RETAILER!</h1>
                    <hr />
                    <img className='pictureFormat' src='https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/s03fb617b319ccf37/image/i87debb7faf10de40/version/1623613231/image.jpg' />
                    <p style={{textAlign: 'left'}}>We would love to welcome you as a new Cling On! retailer! <br />If you’re looking to sell our Cling On! products, check this page.<br />We have several distributors worldwide, who will be happy to help you out.<br />You can contact one of them, or contact fm@clingon.nl, if there is no distributor in your country yet, or nobody nearby.</p>
                    <button>Australia</button>
                    <a href='https://www.clingon.nl/become-a-retailer/'><button>Other</button></a>
                    <hr/>
                    <img className='pictureFormat' src='https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/s03fb617b319ccf37/image/i5466027855b84861/version/1603612761/image.jpg' />
                </div>
                <div className='col-4'>

                </div>
            </div>
        </div>
    )
}