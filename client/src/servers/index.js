import httpRequestZing from '~/request/httpRequestZing.js';

const search = async (keyword) => {
    try {
        const res = await httpRequestZing.get('/search', {
            params: { keyword },
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export { search };
