import React from 'react'
import {Panel,PanelBody,PanelFooter} from 'react-bootstrap';
import amritsar from '../images/amritsar.jpg'

function MyPanel () {
    return(
        <Panel>
        <PanelBody>
        <img src={amritsar}/>
        </PanelBody>
        <PanelFooter>
            <p></p>
        </PanelFooter>
        </Panel>
    )
}
export default MyPanel;