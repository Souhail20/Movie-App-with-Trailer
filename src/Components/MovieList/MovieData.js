const MovieData = [
    {
        id : 1,
        Title : "Star Wars" ,
        description : "Jean-Baptiste Grenouille, ",
        Poster : "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating : 4,
        trailer:"https://www.youtube.com/watch?v=8Qn_spdM5Zg",
    },
    {
        id : 2,
        Title : "Star Wars: Episode V - The Empire Strikes Back" ,
        description : "Une comédie romantique décalée",
        Poster :"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating : 3,
        trailer:"https://www.youtube.com/watch?v=JNwNXF9Y6kY",
    },
    {
        id : 3,
        Title : "A Bronx tale" ,
        description : "Un père s'inquiète lorsqu'un gangster local ",
        Poster :"https://m.media-amazon.com/images/I/51ymvx0BdEL._AC_.jpg",
        rating : 2,
        trailer:"https://www.youtube.com/watch?v=z50PjmZYS4A",
    },
    {
        id : 4,
        Title : "Ali G indaHouse" ,
        description : "Ali G devient sans le vouloir un pion dans le complot de la chancelière pour renverser le Premier ministre de Grande-Bretagne.",
        Poster :"https://i.ebayimg.com/images/g/gGMAAOSwzwxd3rE5/s-l300.jpg",
        rating : 3,
        trailer:"https://www.youtube.com/watch?v=7HXNtE_kaQY",
    },
    {
        id : 5,
        Title : "American Pie : Reunion" ,
        description :  'Jim, Michelle, Stifler et leurs amis se retrouvent à East Great Falls, dans le Michigan, pour leur réunion de lycée.',
        Poster :"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1jaT1yn01bbujm2pJSfpfTh8-5TK2LndPv0Kv24HDWKkcBaeH",
        rating : 2,
        trailer:"https://www.youtube.com/watch?v=OcL2zUZpfMQ",
    },
    {
        id : 6,
        Title : "Batman v Superman : L'Aube de la justice" ,
        description : "Craignant que les actions de Superman ne soient pas contrôlées, Batman affronte l'homme d'acier, tandis que le monde débat du type de héros dont il a vraiment besoin.",
        Poster :"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        rating : 2,
        trailer:"https://www.youtube.com/watch?v=Kj_a56b0TAQ",
    },
    {
        id :7,
        Title: 'The Invisible Guest',

        Poster:
          'https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        description:
        'A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.',
        rating: 1,
        trailer:"https://www.youtube.com/watch?v=epCg2RbyF80",
        },
      {
        id : 8,
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjE0NTE3MjMwNV5BMl5BanBnXkFtZTgwMDc5NjQxODE@._V1_.jpg',
        Title: 'The Brothers Grimsby',
        rating: 2,
        description:
        'A new assignment forces a top spy to team up with his football hooligan brother.',
          trailer:"https://www.youtube.com/watch?v=_YtclB_02wA",
      },
      {
        id : 9,
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
        Title: 'The Shawshank Redemption',
        rating: 5,
        description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          trailer:"https://www.youtube.com/watch?v=NmzuHjWmXOc",
      },
      
        {
          id : 10,
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_.jpg',
          Title: 'Epic Movie',
          rating: 1,
          description:
          'A spoof on previous years epic movies (The Da Vinci Code (2006), The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005) + 20 more), TV series, music videos and celebs. 4 orphans are on an epic adventure.',
            trailer:"https://www.youtube.com/watch?v=8Qn_spdM5Zg",
        },
        { id :11,
          Poster:
            'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
          Title: '1917',
          rating: 4,
          description:
          'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
            trailer:"https://www.youtube.com/watch?v=YqNYrYUiMfg",
        },
        { id:12,
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMjExNDkzNjAwOV5BMl5BanBnXkFtZTcwMDMzMzQwOQ@@._V1_.jpg',
          Title: 'The Call',
          rating: 3,
          description:
          'When a veteran 911 operator takes a life-altering call from a teenage girl who has just been abducted, she realizes that she must confront a killer from her past in order to save the girls life.',
            trailer:"https://www.youtube.com/watch?v=hxkKeniT-0Q",
        },
        { id :13,
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
          Title: 'The Hangover',
          rating: 4,
          description:
          'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
            trailer:"https://www.youtube.com/watch?v=tcdUhdOlz9M",
        },
]

export default MovieData;