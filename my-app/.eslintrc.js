module.exports = {
    env: {
        node: true,
        es6: true
    },
    extends: [
        //eslint,
        //plugin,
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: module
    },
    plugins: [
        'react'
    ],
    rules: {
      'no-underscore-dangle':0,
      'arrow-body-style':0,
      'no-shadow':0,
      'consistent-return':0,
      'no-nested-ternary':0,
      'no-console':1,
      'no-case-declarations':0,
      'import/prefer-default-export': 0,
      'linebreak-style': 0
      //"eslint-plugin-jsx-a11y"
			//"@testing-library/jest-dom": "^4.2.4",
    
			//"@testing-library/user-event": "^7.2.1",
    }
};
