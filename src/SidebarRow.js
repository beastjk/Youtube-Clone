import React from 'react'
import './SidebarRow.css'
import HomeIcon from '@material-ui/icons/Home';

function SidebarRow({title, Icon}) {
    return (
        <div className = 'sidebarRow'>
            <Icon className = "sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
