import React from 'react';
import Styles from "./settings.module.css";
import StylesPane from "./SettingsPane.Module.css"
//
// import component 👇
//import Drawer from 'react-modern-drawer'
class SettingsButton extends React.Component{
    // When user click on the button icon, do the following...
    openPopUp(){
        // Hide the back panel.
        const element = document.getElementsByClassName(StylesPane.HideBackPanel)[0]
        element.className = StylesPane.BackPanel
        // Show the settings panel.
    }
        // Structure of the settings button.
        render(){
            return (
                    // <span className={Styles.SettingsButton} onClick={this.openPopUp}>
                    //     <a href="#">
                    //         <svg id="hamburger-icon">
                    //             <path d="M0,11 7,11" stroke="#000" stroke-width="7.3"/>
                    //             <path d="M0,22 7,22" stroke="#000" stroke-width="7.3"/>
                    //             <path d="M0,33 7,33" stroke="#000" stroke-width="7.3"/>
                    //         </svg>
                    //     </a>
                    // </span>
                    <button className={Styles.SettingsButton} onClick={this.openPopUp}>
                        <svg className={Styles.burgerKing} /*id="hamburger-icon"*/>
                            <path d="M0,11 7,11" stroke="#000" strokeWidth="7.3"/>
                            <path d="M0,22 7,22" stroke="#000" strokeWidth="7.3"/>
                            <path d="M0,33 7,33" stroke="#000" strokeWidth="7.3"/>
                        </svg>
                    </button>
               
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

             <div className={Style.settingPane}>
                    <button>Show</button>
                    <div>
                        <div>Hello World</div>
                    </div>
                </div>
        )
    }
}

export default Settings;

*/