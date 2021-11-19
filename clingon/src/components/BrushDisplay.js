import React from 'react'
import styles from '../css/brushDisplay.module.css'
import '../css/general.css'
import SideBar from './SideBar'
export default function BrushDisplay({brush, textAlignment = 'left'}) {
    return (
        <div className='container'>
            <div className='row'>

                <div className='col-8 col-left'>
                    {brush.title}
                    <hr/>
                    <p>{brush.description}</p>
                    <hr/>
                    <div className='row'>
                        <div className='col-6 col-left'>
                            {textAlignment == 'left' && <p className={styles.brushWriteUp}>{brush.writeUp}</p>}
                            {textAlignment == 'right' && <img src={brush.image} />}
                        </div>
                        <div className='col-6 col-left'>
                            {textAlignment == 'right' && <p className={styles.brushWriteUp}>{brush.writeUp}</p>}
                            {textAlignment == 'left' && <img src={brush.image} />}

                        </div>
                    </div>

                </div>
                <div className='col-4 col-right'>
                    <SideBar />
                </div>

            </div>

        </div>
    )
}