import React, { Component } from 'react';
import Confirm from 'react-confirm-bootstrap';

export default class DestinationInfoWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.selectedDestination.id,
            name: this.props.selectedDestination.name,
            budgetItems: this.props.selectedDestination.budgetItems,
            newBudgetItemName: '',
            newBudgetItemAmount: ''
        };
        this.onNameFormSubmitted = this.onNameFormSubmitted.bind(this);
        this.onBudgetFormSubmitted = this.onBudgetFormSubmitted.bind(this);
        this.onConfirmDelete = this.onConfirmDelete.bind(this);
        this.onNameChanged = this.onNameChanged.bind(this);
        this.onBudgetNameChanged = this.onBudgetNameChanged.bind(this);
        this.onBudgetAmountChanged = this.onBudgetAmountChanged.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.selectedDestination.id,
            name: nextProps.selectedDestination.name,
            budgetItems: nextProps.selectedDestination.budgetItems,
            newBudgetItemName: '',
            newBudgetItemAmount: ''
        });
    }

    onNameFormSubmitted(e) {
        e.preventDefault();
        this.props.updateDestination({
            id: this.props.selectedDestination.id,
            name: this.state.name
        });
    }

    onBudgetFormSubmitted(e) {
        e.preventDefault();
        console.log(`adding budget item name: ${this.state.newBudgetItemName} - ${this.state.newBudgetItemAmount}`);
        this.setState({
            newBudgetItemName: '',
            newBudgetItemAmount: ''
        });
        this.refs.budgetName.focus();
    }

    onConfirmDelete() {
        this.props.deleteDestination(this.props.selectedTrip.id, this.props.selectedDestination.id);
    }

    onNameChanged(e) {
        this.setState({name: e.target.value});
    }

    onBudgetNameChanged(e) {
        this.setState({newBudgetItemName: e.target.value});
    }

    onBudgetAmountChanged(e) {
        this.setState({newBudgetItemAmount: e.target.value});
    }

    render() {
        return (
            <div className='info-window'>
                <form className='info-window-form' onSubmit={this.onNameFormSubmitted}>
                    <div className='input-group'>
                        <div className='form-group'>
                            <label htmlFor='destination-name'>Name</label>
                            <input id='destination-name' value={this.state.name}
                                   className='form-control' type='input'
                                   onChange={this.onNameChanged} placeholder='Name of destination...' />
                        </div>
                    </div>
                </form>

                <label>Budget items</label>
                <ul className='list-group budget-list'>
                    {this.state.budgetItems && Object.keys(this.state.budgetItems).map(key => {
                        const item = this.state.budgetItems[key];
                        return (
                            <li key={item.id} className='list-group-item'>
                                <div className='row'>
                                    <div className='col-sm-6'>{item.description}</div>
                                    <div className='col-sm-6'>${item.amount}</div>
                                </div>
                            </li>
                        );
                    })}
                    <li className='list-group-item'>
                        <form className='budget-form' onSubmit={this.onBudgetFormSubmitted}>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <input type='text' ref='budgetName' className='form-control' value={this.state.newBudgetItemName}
                                           placeholder='New item...' onChange={this.onBudgetNameChanged} />
                                </div>
                                <div className='col-sm-6'>
                                    <div className='input-group'>
                                        <span className="input-group-addon">$</span>
                                        <input type='number' min='0' step='0.01' className='form-control currency'
                                               value={this.state.newBudgetItemAmount} placeholder='Amount' onChange={this.onBudgetAmountChanged} />
                                    </div>
                                </div>
                            </div>
                            <input type='submit' style={{display: 'none'}} />
                        </form>
                    </li>
                </ul>

                <Confirm
                    body='Are you sure you want to delete this destination?'
                    confirmText='Confirm delete'
                    title='Delete destination'
                    onConfirm={this.onConfirmDelete}>
                    <button type='button' className='btn btn-link'>Delete</button>
                </Confirm>
            </div>
        );
    }
};
