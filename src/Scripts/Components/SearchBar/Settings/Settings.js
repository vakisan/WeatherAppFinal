import React from 'react';
import Style from "./settings.module.css";
//
// import component 👇
//import Drawer from 'react-modern-drawer'
// Settings button icon.
// Structure of the settings button icon.
class SettingsButton extends React.Component{
        render(){
            return (
                <div className={Style.settingPane}>
                    <button>Show</button>
                    <div>
                        <div>Hello World</div>
                    </div>
                </div>
            )
        }
}

export default SettingsButton;

/*
class Settings extends React.Component{
    render(){
        return (
            <div>
                <button onClick={toggleDrawer}>Show</button>
                <div open={isOpen} onClose={toggleDrawer} direction='right'>
                    <div>Hello World</div>
                </div>
            </div>
        )
    }
}

export default Settings;

*/