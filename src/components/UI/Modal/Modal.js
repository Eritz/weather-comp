import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closeModal} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }} 
                >
                    <div className={classes.ModalHeaderContainer}>
                        <p className={classes.ModalHeader_Title}>{this.props.modalTitle}</p>
                        <button className={classes.CloseButton} onClick={this.props.closeButton}>&times;</button>
                    </div>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;