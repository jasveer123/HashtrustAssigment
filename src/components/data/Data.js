//dummy data
//to get comment
export const getarticles = async () => {
  return [
    {
      id: '1',
      name: 'kajal',
      date: '03/10/2021',
      body: 'First comment first child',
      parentId: null,
      headline: 'Super blood moon eclipse',
      img: 'https://i.im.ge/2022/06/14/rv7sX8.webp',
      data:
        "The super blood wolf moon lunar eclipse(opens in new tab) graced the skies late-night on Jan. 20, 2019, as our lone satellite began its trek into Earth's outer shadow or penumbra. The pinnacle  the show the total eclipse happened between 11:41 p.m. and 12:43 p.m.  (8:41 p.m. and 9:43 p.m. PST), when Earth's umbra had entirely engulfed the moon. Here, Marcel Kusch captures this image in Duisburg, Germany, showing the super blood moon eclipse above an industrial plant.",
    },
    {
      id: '2',
      name: 'jaswinder singh',
      date: '03/10/2022',
      body: 'First comment first child',
      parentId: null,
      headline: 'Scientists grew living human skin around a robotic finger',
      img: 'https://i.im.ge/2022/06/14/rv7dKX.jpg',
      data:
        'The Terminator may be one step closer to reality Researchers at the University of Tokyo have built a robotic finger that, much like Arnold Schwarzenegger’s titular cyborg assassin, is covered in living human skin. The goal is to someday build robots that look like real people — albeit for more altruistic applications. Super realistic-looking robots could more seamlessly interact with humans in medical care and service industries, say biohybrid engineer Shoji Takeuchi and his colleagues June 9 in Matter. (Whether cyborgs masked in living tissue would be more congenial or creepy is probably in the eye of the beholder',
    },
    {
      id: '3',
      name: 'mica',
      date: '03/10/2000',
      body: 'First comment first child',
      parentId: null,
      headline:
        'Quantum physics exponentially improves some types of machine learning',
      img: 'https://i.im.ge/2022/06/14/rv721K.jpg',
      data:
        'Machine learning can get a boost from quantum physics On certain types of machine learning tasks, quantum computers have an exponential advantage over standard computation, scientists report in the June 10 Science. The researchers proved that, according to quantum math, the advantage applies when using machine learning to understand quantum systems. And the team showed that the advantage holds up in real-world tests.People are very excited about the potential of using quantum technology to improve our learning ability,” says theoretical physicist and computer scientist Hsin-Yuan Huang of Caltech. But it wasn’t entirely clear if machine learning could benefit from quantum physics in practice.',
    },
    {
      id: '6',
      name: 'mica2',
      date: '03/10/1000',
      body: 'First comment first child',
      parentId: null,
      headline:
        'New Gaia data paint the most detailed picture yet of the Milky Way',
      img: 'https://i.im.ge/2022/06/14/rv7OpF.jpg',
      data:
        'he European Space Agency’s Gaia space observatory, which launched in 2013, has long surpassed its goal of charting more than a billion stars in the Milky Way (SN: 10/15/16). On June 13, the mission extended that map into new dimensions, releasing more detailed measurements of hundreds of millions of stars, plus — for the first time — asteroids, galaxies and the dusty medium between stars.“Suddenly you have a flood of data,” says Laurent Eyer, an astrophysicist at the University of Geneva who has worked on Gaia for years. For some topics in astronomy, the new results effectively replace all the observations that were taken before, Eyer says. “The data is better. It’s amazing.”',
    },
    {
      id: '4',
      name: 'mica2',
      date: '03/10/1000',
      body: 'First comment first child',
      parentId: null,
      headline: 'Nasal vaccines for COVID-19 offer hope and face hurdles',
      img: 'https://i.im.ge/2022/06/14/rv77cM.webp',
      data:
        'A few weeks ago, I was obsessed with my nose and throat. I was on a trip to Seattle to speak at a small, masks-required virology meeting about being a journalist during a pandemic. I went to graduate school there, so I was thrilled to see old friends and colleagues. But the irony that I was risking getting infected amid rising COVID-19 cases to get on a plane to talk with virologists about the pandemic didn’t escape me. I spent the whole week on high alert for the slightest hint of a sore throat or a runny nose. Despite masking, I worried that I’d get sick and be stuck thousands of miles from home or that I’d unknowingly pass the virus on to someone else.  Luckily, this story has a happy ending. I didn’t catch the coronavirus. None of my friends or former colleagues got sick. Although I didn’t escape completely unscathed; I did come down with a mystery, non-COVID cold that I suspect I caught from a friend’s baby. Still, the experience made me wonder ​​— what if I didn’t have to worry so much about becoming a disease spreader because there were COVID-19 vaccines that helped my body control the virus in my nose?',
    },
    {
      id: '5',
      name: 'mica2',
      date: '03/10/1000',
      body: 'First comment first child',
      parentId: '1',
      headline:
        'A trip to the GaryVee convention, where everyone is part of cryptos 1 percent',
      img: 'https://i.im.ge/2022/06/14/rv7wif.jpg',
      data:
        'Then, its like a switch has been flipped. The crowd suddenly erupts in cheers and screams. Phones shoot into the air at rapid speed. People who had otherwise been near-motionless crane their necks, clamoring to see the stage. One man jumps up on top of a folding chair, loses his balance and falls, then scrambles back up for a better view. ',
    },
  ]
}

//to make comments
export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: 'Jasveer singh',
    date: new Date().toISOString(),
    body: text,
    parentId,
  }
}

//to delete comments

export const deleteComment = async () => {
  return {}
}
