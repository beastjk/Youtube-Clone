import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';


function Sidebar() {
    return (
        <div className = 'sidebar'>
            <SidebarRow selected Icon = {HomeIcon} title = 'Home'/>
            <SidebarRow Icon={WhatshotIcon} title='Trending' />
            <SidebarRow Icon={SubscriptionsIcon} title='Subscription' />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title='Library' />
            <SidebarRow Icon={HistoryIcon} title='Trending' />
            <SidebarRow Icon={SubscriptionsIcon} title='History' />
            <SidebarRow Icon={OndemandVideoIcon} title='Watch Later' />
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title='Liked Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Show More' />
        </div>
    )
}

export default Sidebar
