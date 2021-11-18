module.exports = {
    verbose: true,
    "transform": {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    "globals": {
        "NODE_ENV": "test",
        "_isBrowser_": "false",
    },
    "moduleFileExtensions": [
        "js",
        "jsx"
    ],
    "testMatch": ['<rootDir>/redux/tests/*.test.js'],
    "moduleDirectories": ["node_modules", "redux"],
    "transformIgnorePatterns": ['<rootDir>/node_modules/']
};