
export interface Post {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}


export interface Comment {
  id: number;
  postId: number;
  email: string;
  body: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Slasher",
    imageUrl: "./public/images/slasher-horror.jpg",
    body: "Slasher is a subgenre of horror films that focuses on a killer or a group of killers who gruesomely murder their victims, often using bladed weapons or sharp objects. The genre is known for its intense suspense, graphic violence, and iconic villains. Scream, also known as Scary Movie, is a classic slasher film directed by Wes Craven. Released in 1996, the film follows a masked killer, Ghostface, who terrorizes a small town, targeting a group of high school students. Scream became a huge success and spawned multiple sequels, leaving a significant impact on the slasher genre."
  },
  {
    id: 2,
    title: "Psychological",
    imageUrl: "./public/images/psychological-horror.jpg",
    body: "Psychological horror is a genre that delves into the deep and unsettling aspects of the human mind, often exploring fears, anxieties, and the thin line between reality and illusion. It aims to create an intense emotional experience, relying on psychological tension rather than gore or jump scares. Black Swan is a psychological horror film directed by Darren Aronofsky. The movie follows Nina Sayers, a talented ballet dancer who lands the lead role in Swan Lake. As she prepares for the demanding dual role of the innocent White Swan and the seductive Black Swan, Nina's psyche begins to unravel."
  },
  {
    id: 3,
    title: "Cosmic",
    imageUrl: "./public/images/cosmic-horror.png",
    body: "Cosmic horror is a subgenre of horror that delves into the fear of the unknown, cosmic entities, and the insignificance of humanity in the vastness of the universe. In the film 'The Lighthouse,' directed by Robert Eggers, this genre takes center stage, immersing viewers in a nightmarish tale of isolation and madness. Set in the late 19th century, the movie follows two lighthouse keepers, played brilliantly by Willem Dafoe and Robert Pattinson, as they descend into paranoia and supernatural encounters on a desolate and eerie island."
  },

];

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    email: "horrorfan@gmail.com",
    body: "Just finished watching 'Scream,' and I can't get over how intense and thrilling it was! The classic slasher elements combined with the self-awareness and clever humor made it an unforgettable horror experience. The iconic Ghostface killer kept me on the edge of my seat, and the suspenseful plot twists had me guessing until the very end."
  },
  {
    id: 2,
    postId: 1,
    email: " slasherguru@yahoo.com",
    body: "As a die-hard fan of slasher films, 'Scream' exceeded all my expectations! It pays homage to the genre while brilliantly subverting its tropes. The characters were relatable, and Neve Campbell's performance as Sidney was phenomenal. The blend of horror and humor was perfectly balanced, and the identity of the Ghostface killer kept me guessing."
  },
  {
    id: 3,
    postId: 1,
    email: "  screamlover@gmail.com",
    body: "Having watched numerous slasher films, 'Scream' stands out as one of the most iconic and game-changing entries in the genre. The self-referential and meta aspects brought a fresh twist, making it both terrifying and entertaining. The kills were gruesome, and the mystery surrounding the killer's identity kept me engaged throughout."
  },
  {
    id: 1,
    postId: 2,
    email: "bswanfan@gmail.com",
    body: "Just watched 'Black Swan,' and wow, what a mind-bending psychological horror! The portrayal of Nina's descent into madness was chilling, and I couldn't help but feel a mix of fascination and terror throughout the film. Darren Aronofsky's direction is masterful, and Natalie Portman's performance was hauntingly brilliant."
  },
  {
    id: 2,
    postId: 2,
    email: " horrorfanatic@gmail.com",
    body: "As a fan of psychological horror, 'Black Swan' had me hooked from start to finish! The movie's intense atmosphere and mind games kept me on the edge of my seat. Natalie Portman's portrayal of Nina's internal struggle was both captivating and unsettling. The seamless blend of ballet and horror elements made it a unique and unforgettable experience."
  },
  {
    id: 3,
    postId: 2,
    email: "scaredycat@icloud.com",
    body: "Okay, I finally mustered up the courage to watch 'Black Swan,' and let me tell you, it was one wild psychological rollercoaster! The psychological torment Nina goes through made me question what's real and what's not. I was so immersed in the story that I couldn't look away, despite my heart pounding with fear."
  },
  {
    id: 1,
    postId: 3,
    email: "cosmicfear@icloud.com",
    body: "Just witnessed the cosmic horror masterpiece, 'The Lighthouse,' and I'm still trying to wrap my head around it! The eerie atmosphere and Lovecraftian elements had me at the edge of my seat. Willem Dafoe and Robert Pattinson's performances were phenomenal, adding to the overwhelming sense of dread. A chilling and thought-provoking experience!"
  },
  {
    id: 2,
    postId: 3,
    email: "feartheunknown@live.com",
    body: "Wow, 'The Lighthouse' truly embodies the essence of cosmic horror. The isolated setting, the cryptic symbolism, and the relentless descent into madness left me in awe and terror. Willem Dafoe's character was enigmatic and haunting, and Robert Pattinson's portrayal of a man losing his grip on reality was superb."
  },
  {
    id: 3,
    postId: 3,
    email: "scaredwitless@example.com",
    body: "I never thought I'd be so terrified by a film until I watched 'The Lighthouse.' The cosmic horror elements were unlike anything I've ever seen, and I found myself on the edge of my seat, anticipating what mind-bending horrors awaited the characters next. The eerie black-and-white cinematography added to the unsettling atmosphere."
  },
];
