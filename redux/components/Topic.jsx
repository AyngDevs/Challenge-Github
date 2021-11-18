import { useMemo, } from 'react';
import propTypes from 'prop-types';
import { Grid, Typography, } from '@mui/material';
import { StarBorder, } from '@mui/icons-material';
import { makeStyles, } from '@mui/styles';
import { ConnectedTopicContainer, } from '../containers';

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: 200,
        margin: 10,
        border: '0.3px solid rgba(0, 0, 0, 0.2)',
        borderRadius: 7,
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    list: {
        'list-style-type': 'none',
    },
    link: {
        color: '#0868d9',
        cursor: 'pointer',
    },
    icon: {
        fontSize: '0.8em',
    },
})); //end of the 'useStyles'

/**
 * Component that return a ConnectTopicContainer allowing to have its own logic.
 */
const ListItemTopic = ({ id, }) => {
    return (
        <li key={`child_${id}`}>
            <ConnectedTopicContainer id={id} />
        </li>
    );
}; //end of the component 'ListItemTopic'
ListItemTopic.propTypes = {
    id: propTypes.number.isRequired,
};

/**
 * Component that renders a single Topic like a small card.
 */
const Topic = (props) => {
    const { id, fetchTopics, topic, childIdTopics, } = props;
    const { container, list, link, icon, } = useStyles();
    return useMemo(() => (
        <div>
            <div className={container}>
                <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h6" component="div">
                        <a className={link} onClick={() => fetchTopics({ topicName: topic?.name, id_topic: id, })}>{topic?.name}</a>
                    </Typography>
                    <Grid container justify="space-around" alignItems="center">
                        <StarBorder className={icon} />
                        <Typography variant="body2">
                            {topic?.stargazerCount}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <ul className={list}>
                {childIdTopics?.length > 0 && childIdTopics.map((id) => <ListItemTopic id={id} fetchTopics={fetchTopics} />)}
            </ul>
        </div>
    ), [childIdTopics?.length]);
}; //end of the component 'Topic'
Topic.propTypes = {
    id: propTypes.number.isRequired,
    fetchTopics: propTypes.func.isRequired,
    topic: propTypes.objectOf({
        name: propTypes.string.isRequired,
        stargazerCount: propTypes.number.isRequired,
    }),
    childIdTopics: propTypes.arrayOf(propTypes.number),
};
export default Topic;