const axios = require('axios');
const {Episode} = require('../db');

const getEpisodies = async () => {
    if(!(await Episode.findAll()).length){
    
    const nPages = (await axios.get("https://rickandmortyapi.com/api/episode")).data.info.pages;
    const links = [];

    for (let i = 1; i <= nPages; i++) {
        links.push(`https://rickandmortyapi.com/api/episode?page=${i}`);
    }

    const data = await Promise.all(links.map((link) => axios.get(link)));

    const episodies = data.map(elem => elem.data.results).flat();

    await Episode.bulkCreate(episodies);
    console.log("Creamos el episodio")

}else{
    console.log("Ya esta creado")
}
};

module.exports =  getEpisodies;
