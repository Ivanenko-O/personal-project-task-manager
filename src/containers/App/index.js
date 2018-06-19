// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import taskActions from '../../actions/task';

// Components
import Scheduler from 'components/Scheduler';
class App extends Component {
    render () {
        // debugger;
        console.log( this.props);
        return (<Scheduler actions = { this.props.actions } />);
        // return (<Scheduler { ...this.props.actions } />);
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return ({
        tasks: state.tasks,
    });
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...taskActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);