import React from 'react';
import Styles from './NavigationElement.module.css';

class NavigationElement extends React.Component{
    //constructor for navigation element
    constructor(props){
        super(props)
        this.state = {
            className: this.props.className,
            click: this.props.click
        }
    }
    //v help?
    static getDerivedStateFromProps(props, state) {
        let change;
        if (state.className === Styles.NavigationElement){
            change = Styles.NavigationElementActive
        }
        else{
            change = Styles.NavigationElement
        }
        return {
            className: props.className,
            click: change
        }
    }


    render(){
        return (
            <button type="button" className={this.props.className} onClick={this.props.click}>
               {this.props.text}
            </button>
          );
    }
}

export default NavigationElement;