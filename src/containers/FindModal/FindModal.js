import React, { Component } from 'react';
import classes from './FindModal.css';


import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions/index';

import ModalLink from '../../components/ModalLink/ModalLink';

class FindModal extends Component {

    componentWillUpdate() {
        if (this.props.wipe === false) {
            this.props.clearAllModal();
        }
    }

    render () {
        
        const modalLinkCount = this.props.storedLinks.map((ele,idx) => {
            return(
                <ModalLink 
                    key={ele.id}
                    addNewLink={this.props.addLinkSpace}
                    delNewLink={() => this.props.delLinkSpace(ele.id)}
                    inputProps={{
                        value: this.props.storedLinks[idx].location,
                        onChange: (address) => this.props.addLinkText(address, idx),
                        onBlur: () => this.props.getLatLng(idx),
                        type: 'search',
                        placeholder: 'Type a place here! (e.g. New York, NY)',
                        autoFocus: true,

                    }}
                />
            );
        });

        return(
            <div className={classes.FindModal}>
                {modalLinkCount}
                <button 
                    className={classes.ParseLinkButton} 
                    onClick={() => {this.props.parseModalLinks(this.props.storedLinks)}}
                    onClickCapture={this.props.pressed}>
                    ADD TO MENU
                </button>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        storedLinks: state.linkRedu.locations,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addLinkSpace: () => dispatch(actionCreator.addSpace()),
        delLinkSpace: (id) => dispatch(actionCreator.delSpace(id)),
        clearAllModal: () => dispatch(actionCreator.clearAll()),
        parseModalLinks: (val) => dispatch(actionCreator.parseLinks(val)),
        addLinkText: (e, index) => dispatch(actionCreator.addLinkText(e, index)),
        getLatLng: (index) => dispatch(actionCreator.getLatLng(index)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(FindModal);