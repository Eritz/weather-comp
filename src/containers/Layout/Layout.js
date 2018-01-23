import React, {Component} from 'react';

import Aux from '../../hoc/Auxillary';
import Menu from '../Menu/Menu';
import WeatherSection from '../WeatherSection/WeatherSection';
import FloatingButton from '../../components/UI/FloatingButton/FloatingButton';
import Modal from '../../components/UI/Modal/Modal';
import FindModal from '../FindModal/FindModal';

class Layout extends Component {

    state = {
        isAddingItem: false,
    }

    addModalHandler = () => {
        this.setState({isAddingItem:true});
    }

    cancelModalHandler = () => {
        this.setState({isAddingItem:false});
    }


    render() {
        return(
            <Aux>
                <main>
                    <div style={{display:"flex"}}>
                        <Menu/>
                        <WeatherSection/>
                    </div>
                    <FloatingButton click={this.addModalHandler}/>
                    <Modal 
                        show={this.state.isAddingItem}
                        closeModal={this.cancelModalHandler}
                        closeButton={this.cancelModalHandler}
                        modalTitle={"Add Links"}>
                        <FindModal
                            wipe={this.state.isAddingItem}
                            pressed={this.cancelModalHandler}/>
                    </Modal>
                </main>
            </Aux>
        );
    }

}

export default Layout;