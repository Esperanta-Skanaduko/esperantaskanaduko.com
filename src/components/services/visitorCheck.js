import store from 'store2';

const visitorCheck = () => {

    // typeof window !== 'undefined' && window.whaterver-you-need

    if (store() === null) {
        window.location = '/language/';
    }
};

export default visitorCheck;