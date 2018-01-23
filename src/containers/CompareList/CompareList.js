import React, { Component } from 'react';
import classes from './CompareList.css';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actions/index';

import CompareItem from '../../components/CompareItem/CompareItem';

class CompareList extends Component {

    state = {
        isDeleting: false,
    }

    isDeletingHandler = () => {
        let delSelected = this.state.isDeleting;
        this.setState({isDeleting: !delSelected});
    }

    render() {

        const items = this.props.list.map(ele => {
            return <CompareItem
                key={ele.id}
                itemName={ele.location}
                isChosen={this.state.isDeleting ? 
                    () => this.props.deleteSelected(ele.id) :
                    () => this.props.changeActive(ele.id, ele.lat, ele.long, ele.isActive)
                }
            />
        });

        return (
            <div className={classes.CompareList}>
                <h1 className={classes.ComparingHeadline}>{this.state.isDeleting ? "Delete" : "Compare"} ({this.props.list.length})</h1>
                <div className={classes.CompareList_Options}>
                    <p className={classes.CompareList_About} onClick={this.props.showAboutModal}>About</p>
                    <p className={classes.CompareList_Mode} onClick={this.isDeletingHandler}>Mode</p>
                    <p className={classes.CompareList_Units} onClick={() => this.props.changeUnits()}>{this.props.units ? "F" : "C"}</p>
                    <p className={classes.CompareList_DeleteAll} onClick={() => this.props.deleteAll()}>Empty</p>
                </div>
                <div className={classes.ItemsContainer}>
                    {items}
                </div>
            </div>
            
        );
    }

}

const mapStateToProps = state => {
    return {
        list: state.listRedu.finalList,
        units: state.listRedu.isAmerican,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        changeActive: (id, lat, lng, active) => dispatch(actionCreator.changeActiveFromList(id, lat, lng, active)),
        deleteSelected: (id) => dispatch(actionCreator.deleteSelectedFromList(id)),
        deleteAll: () => dispatch(actionCreator.deleteAllFromList()),
        changeUnits: () => dispatch(actionCreator.changeListUnits()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareList);