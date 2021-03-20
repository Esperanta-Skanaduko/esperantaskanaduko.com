import { Mangadex } from 'mangadex-api';
const client = new Mangadex();

export const login = async() => {
    await client.agent.login('testtest3141', 'test123123', true).catch(e => {console.log('output:' + e);
    console.log(e);
    return e;
});
};
login();
