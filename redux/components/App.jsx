import { useEffect, } from 'react';
import propTypes from 'prop-types';
import { ConnectedTopicContainer, } from '../containers';

/**
 * Wrap all the app in order to load all the topics on the ComponentDidMount event.
 */
const App = (props) => {
    const { fetchTopics, } = props;
    useEffect(() => {
        fetchTopics();
    }, []);
    return (
        <ConnectedTopicContainer id={0} />
    );
}; //end of the component 'App'
App.propTypes = {
    fetchTopics: propTypes.func.isRequired,
};
export default App;