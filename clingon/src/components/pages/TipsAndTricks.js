import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import '../../css/general.css'
import SideBar from '../SideBar';
export default function TipsAndTricks() {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h1>TIPS & TRICKS!</h1>
                    <hr />
                    <p><b>K</b>eep string intact on round and oval styles. They are designed to preserve brush shape and are durable enough to withstand brush cleaning.</p>
                    <hr />
                    <p><b>B</b>efore using, let your brush “get its feet wet”. Allow the tips of the bristles to suspend in water. Wring out lightly before use or spin to remove most of the water. </p>
                    <hr />
                    <p><b>C</b>ling On's are designed to be used and stored wet. This feature contributes to the brush stroke free and flawless finish. This also prevents paint from drying on, and damaging your bristles. Life expectancy of a Cling On! brush surpasses other brushes for this reason.</p>
                    <hr />
                    <p><b>T</b>aking some time of from painting? Store your brushes a few days in water, rinse out and story them dry. You can hang them or let them dry in a towel. It's not a must to always store them in water, it's just better for the brushes when painting on a daily basis! </p>
                    <hr />
                    <p><b>I</b>f necessary, soap and water cleanup is acceptable if paint has been allowed to dry on your bristles.</p>
                    <hr />
                    <p><b>A</b> Cling On! is that supple that it allows you to apply the recommended thickness without any effort. You don’t necessarily need a roller anymore to paint doors for example: <br />Use enough paint and work swiftly, and just use the tips of the brush to achieve a smooth and even finish.</p>
                    <hr />
                    <img className='pictureFormat' src='https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=jpg/path/s03fb617b319ccf37/image/i896538a07ca7b6ef/version/1605032517/image.jpg' />
                </div>
                <div className='col-4'>
                    <SideBar />
                </div>
            </div>
        </div>
    )
}