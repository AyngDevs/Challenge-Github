import { graphQLFetch, } from '../utils/graphQLFetch';
import { FETCHED_TOPIC, OPENED_TOPIC, } from '../constants/topicsConstants';

// Global counter in order to generate the next ids for the topics fetched.
let counter = 1;

/**
 * Return all the childIds of a topic.
 * @param {Array} relatedTopics
 */
const getChildTopicsIds = (relatedTopics) => {
    var childTopicsIds = new Array();
    let internal_counter = counter;
    for (let i = 1; i < relatedTopics.length + 1; i++ ) {
        childTopicsIds.push(internal_counter++);
    };
    return childTopicsIds;
}; //end of the action function 'getChildTopicsIds'

/**
 * Retreive all the topics from Github GraphQL API based on a topic name.
 * @param {String} topicName 🔍
 * @param {Number} id_topic parent id that is retreiving the topics.
 */
export const fetchTopics = ({ topicName = 'react', id_topic = 0, }) => async (dispatch) => {
    try {
        const query = `
        query {
            topic(name:"${topicName}") {
                name
                stargazerCount
                relatedTopics(first:10) {
                    name
                    stargazerCount
                }
            }
        }`;
        const { topic, } = await graphQLFetch(query);
        dispatch({ type: OPENED_TOPIC, topic, id_topic, childIdTopics: getChildTopicsIds(topic.relatedTopics), });
        topic.relatedTopics.map((childTopic) => dispatch({ type: FETCHED_TOPIC, topic: childTopic, id_topic: counter++, }));
    } catch (err) {
        console.log('err', err);
    }; //end of try-catch
}; //end of the action 'fetchTopics'