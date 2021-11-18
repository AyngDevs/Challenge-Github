import { connect, } from 'react-redux';
import App from '../components/App';

import { fetchTopics, } from '../actions/topicsActions';

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
}; //cierre del 'mapStateToProps'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTopics: (params = {}) => dispatch(fetchTopics(params)),
    };
}; //cierre del 'mapDispatchToProps'
const ConnectedAppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedAppContainer;