import express from 'express';
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();
const app = express();
const port = 4000;

app.use(express.static('public'));
const whoseThat =
  'https://e7.pngegg.com/pngimages/794/778/png-clipart-pokemon-quest-pokemon-sun-and-moon-pokemon-go-hitmonchan-hitmonchan-hand-monochrome-thumbnail.png';

app.get('/', async (req, res) => {
  const team = [];

  for (let i = 0; i < 6; i++) {
    const species = await P.getPokemonSpeciesByName(
      Math.floor(Math.random() * (1017 - 1) + 1)
    );
    team.push(species);
  }

  res.render('index.ejs', { team });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
