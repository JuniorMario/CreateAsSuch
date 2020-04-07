
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('POSTS').del()
    .then(function () {
      // Inserts seed entries
      return knex('POSTS').insert([
        { id: 1, title: 'Lorem Ipsum', subtitle: "Memento Mori", content: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker." },
        {
          id: 2, title: 'odaat', subtitle: 'This is it', content: `This is it
        This is life, the one you get
            So go and have a ball
        This is it
        Straight ahead and rest assured
        You can't be sure at all
        So while you're here enjoy the view
        Keep on doing what you do
        Hold on tight we'll muddle through
        One day at a time
        So up on your feet
        Somewhere there's music playing
        Don't you worry none
        Just take it like it… `},
        { id: 3, title: 'Memento mori', subtitle: "In the bleak mindwinter", content: `In the bleak midwinter
        Frosty wind made moan,
        Earth stood hard as iron,
        Water like a stone;
        Snow had fallen,
        Snow on snow,
        In the bleak midwinter,
        Long ago.
        Our God, heaven cannot hold him,
        Nor earth sustain;
        Heaven and earth shall flee away
        When he comes to reign;
        In the bleak midwinter
        A stable place sufficed
        The Lord God incarnate,
        Jesus Christ.
        Enough for him, whom Cherubim
        Worship night and day
        A breast full of milk
        And a manger full of hay.
        Enough for him, whom angels
        Fall down before,
        The ox and ass and camel
        Which adore.` }
      ]);
    });
};
