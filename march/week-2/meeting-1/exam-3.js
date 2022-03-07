function getAnime(yourFavoriteAnime) {
  const animes = ['jujutsu kaisen', 'guality crown', 'plastic memories', 'koe no katachi', 'tsuki ga kirei'];

  return animes.filter((anime) => anime === yourFavoriteAnime);
}

const yourAnime = getAnime('jujutsu kaisen');
console.log(yourAnime);
