import topics from '../reducers/topics';
import { OPENED_TOPIC, FETCHED_TOPIC, } from '../constants/topicsConstants';

const initialState = {
    0: {},
};

describe('topics reducer tests', () => {
    test('Should return de initial state correctly', () => {
        expect(topics(undefined, {})).toEqual(initialState);
    });

    test(`Should handle ${FETCHED_TOPIC} without an id_topic`, () => {
        const topic = { name: `Topic example`, stargazerCount: 10, };
        const action = {
            type: FETCHED_TOPIC,
            topic,
        };
        expect(topics({}, action)).toEqual({ [0]: { topic, childIdTopics: [], }, });
    });

    test(`Should handle ${FETCHED_TOPIC} with a specific id_topic`, () => {
        const id_topic = 0;
        const topic = { name: `Topic example`, stargazerCount: 10, };
        const action = {
            type: FETCHED_TOPIC,
            topic,
            id_topic,
        };
        expect(topics({}, action)).toEqual({ [id_topic]: { topic, childIdTopics: [], }, });
    });

    test(`Should handle ${OPENED_TOPIC}`, () => {
        const topicsState = {
            0: {
                topic: { name: `Topic 0 example`, stargazerCount: 10, },
                childIdTopics: [],
            },
        };
        const id_topic = 0;
        const topic = { name: `Topic example`, stargazerCount: 10, };

        const action = {
            type: OPENED_TOPIC,
            topic,
            id_topic,
            childIdTopics: [1],
        };
        expect(topics(topicsState, action)).toEqual({ [id_topic]: { topic, childIdTopics: [1], }, });
    });
});