export const graphQLFetch = async (query) => {
    try {
        const GITHUB_GRAPHQL_ENDPOINT = process.env.GITHUB_GRAPHQL_ENDPOINT;
        const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
        const abortController = new AbortController();
        const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
            method: "POST",
            credentials: 'same-origin',
            headers: new Headers({
                'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({ query, }),
            signal: abortController ? abortController.signal : null,
        }).catch((err) => console.log('err on fetch', err));
        const body = await response.text();
        const { data, } = JSON.parse(body);
        return data;
    } catch (err) {
        console.log('err on graphQLFetch', err);
    }; //end of try-catch
}; //end of the function 'graphQLFetch'