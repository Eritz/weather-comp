import React, {Component} from 'react';
import classes from './Menu.css';

import Modal from '../../components/UI/Modal/Modal';
import AboutModal from '../../components/AboutModal/AboutModal';
import Aux from '../../hoc/Auxillary';
import CompareList from '../CompareList/CompareList';

class Menu extends Component {
    
    state = {
        isAboutClicked: false,
    }

    openAboutModal = () => {
        this.setState({isAboutClicked: true});
    }

    closeAboutModal = () => {
        this.setState({isAboutClicked: false});
    }

    render () {
        return(
            <Aux>
                <div className={classes.MenuSection}>
                    <CompareList 
                        showAboutModal={this.openAboutModal}/>
                </div>
                <Modal 
                    show={this.state.isAboutClicked}
                    closeModal={this.closeAboutModal}
                    closeButton={this.closeAboutModal}
                    modalTitle={"About This Site"}>
                    <AboutModal/>
                </Modal>
            </Aux>
        );
    }

}

export default Menu;