import { FETCHED_TOPIC, OPENED_TOPIC, } from '../constants/topicsConstants';

const topics = (state = {}, action) => {
    switch (action.type) {
        case FETCHED_TOPIC: {
            return {
                ...state,
                topic: {
                    name: action.topic.name,
                    stargazerCount: action.topic.stargazerCount,
                },
                childIdTopics: [],
            };
        };
        case OPENED_TOPIC:
            return {
                ...state,
                topic: {
                    name: action.topic.name,
                    stargazerCount: action.topic.stargazerCount,
                },
                childIdTopics: action.childIdTopics,
            };
        default:
            return state;
    } //cierre del 'switch-case'
}; //fin de la funcion reducer 'topics'

export default (state = {}, action) => {
    const { id_topic = 0, } = action;

    return {
        ...state,
        [id_topic]: topics(state[id_topic], action),
    };
}; //cierre del 'export default'