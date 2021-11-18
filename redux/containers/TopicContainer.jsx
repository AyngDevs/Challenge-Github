import { connect, } from 'react-redux';
import Topic from '../components/Topic';

import { fetchTopics, } from '../actions/topicsActions';
import { getTopic, } from '../selectors/topicsSelectors';

const mapStateToProps = (state, ownProps) => {
    return {
        ...getTopic(state, ownProps.id),
    };
}; //cierre del 'mapStateToProps'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchTopics: (params = {}) => dispatch(fetchTopics(params)),
    };
}; //cierre del 'mapDispatchToProps'

export const ConnectedTopicContainer = connect(mapStateToProps, mapDispatchToProps)(Topic);
export default ConnectedTopicContainer;