import { ZingMp3 } from 'zingmp3-api-full';
const searchSong = (req, res) => {
    ZingMp3.search(req.query.keyword).then((data) => {
        res.json(data);
    });
};

const getHome = (req, res) => {
    ZingMp3.getHome().then((data) => res.json(data));
};

export { searchSong, getHome };
