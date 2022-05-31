import React, { createContext, useState } from "react";
export const holly = createContext();
const ApiHolly = (props) => {
  const [dataHolly, setDataHolly] = useState([
    {
      "source": {
      "id": null,
      "name": "As.com"
      },
      "author": "Calum Roche",
      "title": "Johnny Depp v Amber Heard trial live: breaking news and updates, Kate Moss testimony today, 25 May - AS USA",
      "description": "Follow all the latest developments on Depp’s $50 million defamation case against ex-wife Amber Heard, and her counter suit, in the final week.",
      "url": "https://en.as.com/latest_news/johnny-depp-v-amber-heard-trial-live-breaking-news-and-updates-today-25-may-n/",
      "urlToImage": "https://img.asmedia.epimg.net/resizer/oM6Z7XSibKaYTZ7qwpLCdCFBJBM=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PJJNUJR3EPIAVRTLXRESTMG6YI.jpg",
      "publishedAt": "2022-05-25T18:38:20Z",
      "content": "Depp vs Heard: some of the key points early in the trial\r\nIf you're only just coming to the Depp-Heard case now, here is a selection of some of the key points from earlier in the trial that will help… [+2358 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Deadline"
      },
      "author": "Nellie Andreeva",
      "title": "‘Speed Racer’ Live-Action TV Series From Bad Robot In Works At Apple TV+ - Deadline",
      "description": "Apple TV+ is prepping Speed Racer, a high-profile live-action series from J.J. Abrams’ Bad Robot and Warner Bros. Television where the company is under a deal. Primetime-Panic Your Complete Guide to Pilots and Straight-to-Series orders See All Details are ske…",
      "url": "https://deadline.com/2022/05/speed-racer-live-action-tv-series-bad-robot-apple-tv-plus-1235032611/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2022/05/Speed-Racer-Fuji-TV-e1653501107415.jpg?w=982",
      "publishedAt": "2022-05-25T18:00:00Z",
      "content": "Apple TV+ is prepping Speed Racer, a high-profile live-action series from J.J. Abrams’ Bad Robot and Warner Bros. Television where the company is under a deal.\r\nPrimetime-Panic\r\nYour Complete Guide t… [+1717 chars]"
      },
      {
      "source": {
      "id": "buzzfeed",
      "name": "Buzzfeed"
      },
      "author": "Nora Dominick",
      "title": "\"This Is Us\" Just Ended After Six Seasons, And Here's Why People Are Emotional Over The Perfect Series Finale - BuzzFeed",
      "description": "The This Is Us series finale is being called \"tremendous\" by fans as they watched the Pearsons say goodbye.",
      "url": "https://www.buzzfeed.com/noradominick/this-is-us-series-finale-reactions-explainer",
      "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/25/17/enhanced/31b1d40c88ca/original-2076-1653498807-17.jpg?crop=1200:628;0,0%26downsize=1250:*",
      "publishedAt": "2022-05-25T17:34:13Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Caitlyn Jenner Says Kanye West Made Kim Kardashian's Life DIFFICULT - Entertainment Tonight",
      "description": "Caitlyn Jenner says Kanye West made Kim Kardashian’s life difficult during a conversation about Kim’s relationships on ‘The Pivot’ podcast. The 72-year-old a...",
      "url": "https://www.youtube.com/watch?v=hZjxtC-IrmI",
      "urlToImage": "https://i.ytimg.com/vi/hZjxtC-IrmI/hqdefault.jpg",
      "publishedAt": "2022-05-25T17:18:06Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Daily Mail"
      },
      "author": "Harriet Johnston",
      "title": "Princess Beatrice is elegant in £320 Self Portrait dress at garden party - Daily Mail",
      "description": "For the garden party at Buckingham Palace, mother-of-one Princess Beatrice picked a checked dress from the trendy label Self Portrait, which she paired with a statement headband.",
      "url": "https://www.dailymail.co.uk/femail/article-10854307/Princess-Beatrice-elegant-320-Self-Portrait-dress-garden-party.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/25/18/58278863-0-image-a-14_1653498703020.jpg",
      "publishedAt": "2022-05-25T17:12:12Z",
      "content": "Princess Beatrice was elegant in a £320 Self Portrait dress as she joined the Duke and Duchess of Cambridge for a garden party at Buckingham Palace today.\r\nThe 33-year-old royal was among a host of r… [+4331 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Lifehacker.com"
      },
      "author": "Joel Cunningham",
      "title": "What's New on Netflix in June 2022 - Lifehacker",
      "description": "Somehow, The Umbrella Academy is already back for a third season.",
      "url": "https://lifehacker.com/whats-new-on-netflix-in-june-2022-1848975521",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/93e7f0bd0bd20afbd89bffc4baf006cf.png",
      "publishedAt": "2022-05-25T16:30:00Z",
      "content": "Cultural critics have spent a lot of time waxing poetical about how the streaming eraand Netflix in particulardevalues creative works by turning them into mere content plopped thoughtlessly into a bi… [+5101 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Vulture"
      },
      "author": "Victoria Bekiempis",
      "title": "Kate Moss Denies Johnny Depp Pushed Her Down the Stairs - Vulture",
      "description": "The trial is nearing its end.",
      "url": "http://www.vulture.com/2022/05/kate-moss-fall-down-stairs-johnny-depp.html",
      "urlToImage": "https://pyxis.nymag.com/v1/imgs/ccd/7bb/2f2555c0c72a1e0db66fa5a2b75a2a7d92-kate-moss-johnny-depp.1x.rsocial.w1200.jpg",
      "publishedAt": "2022-05-25T16:20:00Z",
      "content": "Kate Moss testified on May 25 that ex-boyfriend Johnny Depp never pushed me, kicked me, or threw me down any stairs. Rather, she said that he came to her rescue after what she described as a nasty fa… [+3879 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Padma Lakshmi's Guide to Hyperpigmentation and Camera-Ready Makeup - Vogue",
      "description": "The author and “Taste the Nation” creator walks us through her beauty routine while reflecting on her inside-out approach and what she’s learned from her yea...",
      "url": "https://www.youtube.com/watch?v=PZQcKcrWguc",
      "urlToImage": "https://i.ytimg.com/vi/PZQcKcrWguc/maxresdefault.jpg",
      "publishedAt": "2022-05-25T16:00:04Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "CNBC"
      },
      "author": "Sarah Whitten",
      "title": "Tom Cruise sets his sights on his first $100 million domestic opening with 'Top Gun: Maverick' - CNBC",
      "description": "This weekend Tom Cruise has a chance to do something he's never done before — have a film open to more than $100 million at the domestic box office.",
      "url": "https://www.cnbc.com/2022/05/25/top-gun-maverick-could-be-tom-cruise-first-100-million-opening-weekend.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106866305-1617994177028-top.jpg?v=1617994249&w=1920&h=1080",
      "publishedAt": "2022-05-25T16:00:01Z",
      "content": "This weekend Tom Cruise has a chance to do something he's never done before open a film to more than $100 million at the domestic box office.\r\nThe prolific actor, who has made a name for himself as a… [+3743 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "BuzzFeed News"
      },
      "author": "Stephanie Soteriou",
      "title": "Kim Kardashian Is Being Roasted For Seemingly Pretending To Eat The Food In Her New Advert As Beyond Meat’s “Chief Taste Consultant” - BuzzFeed News",
      "description": "“You do realise she didn’t actually put any of that in her mouth right?”",
      "url": "https://www.buzzfeednews.com/article/stephaniesoteriou/kim-kardashian-roasted-pretending-eat-beyond-meat",
      "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/25/15/enhanced/4441bd4b5fcd/original-1919-1653493168-4.jpg?crop=1244:651;1,7%26downsize=1250:*",
      "publishedAt": "2022-05-25T15:54:17Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "The A.V. Club"
      },
      "author": "Mary Kate Carr",
      "title": "Margaret Atwood auctioning an \"unburnable\" copy of Handmaid's Tale in response to book bans - The A.V. Club",
      "description": "Atwood took a flamethrower to her novel to raise money for PEN America",
      "url": "https://www.avclub.com/margaret-atwood-handmaids-tale-unburnable-auction-censo-1848975057",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c9e1cd274cee1c645da4085020214db1.png",
      "publishedAt": "2022-05-25T15:12:05Z",
      "content": "Margaret Atwood has responded to the threat of book burning with a very literal solution: she made The Handmaids Tale unburnable. The author is auctioning off a very special edition of the story in p… [+1749 chars]"
      },
      {
      "source": {
      "id": "associated-press",
      "name": "Associated Press"
      },
      "author": null,
      "title": "Steven Tyler enters treatment, Aerosmith cancels shows - The Associated Press",
      "description": "BOSTON (AP) — Aerosmith frontman Steven Tyler has voluntarily entered a rehabilitation program, forcing the Boston-based rock band to cancel the first portion of its upcoming Las Vegas residency. Tyler, 74, has made no secret of his lifelong struggle with sub…",
      "url": "https://apnews.com/article/entertainment-health-steven-tyler-boston-f4677b9e4dd2a4d210a3af073628ce6b",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/8a0b11bd95d94e5e91c6c07db8f04bb9/2325.jpeg",
      "publishedAt": "2022-05-25T15:07:25Z",
      "content": "BOSTON (AP) Aerosmith frontman Steven Tyler has voluntarily entered a rehabilitation program, forcing the Boston-based rock band to cancel the first portion of its upcoming Las Vegas residency.\r\nTyle… [+784 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Variety"
      },
      "author": "Angelique Jackson",
      "title": "The Feminist Evolution of ‘Jurassic World Dominion’: How Laura Dern, Bryce Dallas Howard and DeWanda Wise Became Summer’s Breakout Action Stars - Variety",
      "description": "“Dinosaurs eat man. Woman inherits the earth.” That quip from Laura Dern’s Dr. Ellie Sattler in 1993’s “Jurassic Park” has been immortalized on T-shirts, bumper stickers and coffee mugs ever since the first film in the mega-billion-dollar dinosaur franchise d…",
      "url": "https://variety.com/2022/film/news/jurassic-world-dominion-laura-dern-bryce-dallas-howard-dewanda-wise-1235275720/",
      "urlToImage": "https://variety.com/wp-content/uploads/2022/05/Women-of-Jurassic-World-Variety-Cover-Story-16x9-1.jpg?w=1024",
      "publishedAt": "2022-05-25T15:00:41Z",
      "content": "“Dinosaurs eat man. Woman inherits the earth.”\r\nThat quip from Laura Dern’s Dr. Ellie Sattler in 1993’s “Jurassic Park” has been immortalized on T-shirts, bumper stickers and coffee mugs ever since t… [+19639 chars]"
      },
      {
      "source": {
      "id": "entertainment-weekly",
      "name": "Entertainment Weekly"
      },
      "author": "Dalton Ross",
      "title": "The Survivor 42 final five speak! | EW.com - Entertainment Weekly News",
      "description": "Mike, Maryanne, Romeo, Jonathan, and Lindsay tell EW all about their first 23 days in the game.",
      "url": "https://ew.com/tv/survivor-42-finale-maryanne-mike-lindsay-jonathan-romeo/",
      "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B500%2C173%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F05%2F23%2F117529_65095bc.jpg",
      "publishedAt": "2022-05-25T14:30:00Z",
      "content": "They survived hourglasses. They survived amulets. They survived goofy phrases, prisoner's dilemmas, shots in the dark, and even unseen idol nullifiers. And now five players — Mike Turner, Maryanne Ok… [+14603 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "New York Post"
      },
      "author": "Eric Hegedus",
      "title": "Inside Ellen DeGeneres' last show: 'The entire place was crying' - New York Post ",
      "description": "“The controversy from two years ago, there was no sense of that on that day at all,” an insider told The Post. “No one hated her. No one was miserable. No one.”",
      "url": "https://nypost.com/2022/05/25/ellen-degeneres-last-show-the-entire-place-was-crying/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/ellen-degeneres-1b-copy.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-05-25T14:27:00Z",
      "content": "Ellen DeGeneres shed more than a few tears leading up to the final episode of her eponymous talk show.\r\nBut her last dance on Thursday, May 26, will be an especially emotional one, an insider who was… [+6498 chars]"
      },
      {
      "source": {
      "id": "usa-today",
      "name": "USA Today"
      },
      "author": "Bryan Alexander, USA TODAY",
      "title": "'Top Gun: Maverick' pilots: Meet Goose's son Rooster, Hangman, more - USA TODAY",
      "description": "Who had the right stuff to star in Tom Cruise's \"Top Gun: Maverick\"? The new class of elite pilots is significantly more diverse and includes a woman.",
      "url": "https://www.usatoday.com/story/entertainment/movies/2022/05/25/meet-top-gun-maverick-new-pilots/9848855002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2022/05/20/USAT/1c81d61a-3fbb-4e33-8ae3-353454181018-MAIN_PILOTS.jpg?auto=webp&crop=999,562,x0,y0&format=pjpg&width=1200",
      "publishedAt": "2022-05-25T14:00:36Z",
      "content": "Director Joseph Kosinski had a surefire method of determining who had the right stuff to star in \"Top Gun: Maverick.\"\r\nHe made it clear to auditioning actors that the \"Top Gun\" sequel would really fl… [+7027 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Bruce Willis' wife shares new video of him after aphasia diagnosis announcement - Good Morning America",
      "description": "Willis’ family announced three months ago that the actor would be stepping away from his career.LEARN MORE:Bruce Willis' wife Emma Heming opens up about cari...",
      "url": "https://www.youtube.com/watch?v=5lkxQWc8GKw",
      "urlToImage": "https://i.ytimg.com/vi/5lkxQWc8GKw/hqdefault.jpg",
      "publishedAt": "2022-05-25T13:39:55Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "BuzzFeed News"
      },
      "author": "Sarah Emerson",
      "title": "We Spoke To The Owner Of Seth Green's Stolen Ape. They Don’t Have Plans To Return It. - BuzzFeed News",
      "description": "The owner requested that BuzzFeed News put them in touch with Green.",
      "url": "https://www.buzzfeednews.com/article/sarahemerson/seth-green-bored-ape-owner",
      "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/25/13/tmp/31b1d40c88ca/tmp-name-2-1688-1653485753-27_dblbig.jpg",
      "publishedAt": "2022-05-25T13:39:38Z",
      "content": "After a scammer swiped comedian Seth Greens NFT collection, robbing him of the Bored Ape he planned to feature in his upcoming animated show, BuzzFeed News spoke to the person claiming to be the apes… [+2461 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Www.geo.tv"
      },
      "author": "Web Desk",
      "title": "Jennifer Lopez in distress over Ben Afflecks reluctance to marry - Geo News",
      "description": "Lopez 'stressing out’ over Ben Affleck's reluctance to start planning for wedding",
      "url": "https://www.geo.tv/latest/418921-jennifer-lopez-worried-as-ben-affleck-refuses-to-marry",
      "urlToImage": "https://www.geo.tv/assets/uploads/updates/2022-05-25/418921_063914_updates.jpg",
      "publishedAt": "2022-05-25T13:33:00Z",
      "content": "Jennifer Lopez, who is planning her dream wedding to Ben Affleck, seems to be in stressful situation as her beau is reluctant to marry. \r\nLopez and Affleck first fell madly in love with each other on… [+1608 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Rolling Stone"
      },
      "author": "Tatiana Siegel",
      "title": "Kevin Spacey, James Franco, and More Are Trying to Make Comebacks at Cannes - Rolling Stone",
      "description": "Projects starring, made by, or financed by the scandal-plagued are drumming up business at the iconic film festival",
      "url": "https://www.rollingstone.com/movies/movie-features/cannes-canceled-stars-scandal-spacey-franco-besson-baldwin-1357049/",
      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2022/05/CANNECANNE.jpg",
      "publishedAt": "2022-05-25T13:26:31Z",
      "content": "From a cramped hotel suite in a luxury Cannes hotel, a pair of film executives are trying to pull off an unlikely feat: Sell distribution rights to Kevin Spacey’s comeback film. On May 17, Vantage Me… [+7159 chars]"
      }
  ]);
  return (
    <div>
      <holly.Provider value={[dataHolly, setDataHolly]}>
        {props.children}
      </holly.Provider>
    </div>
  );
};
export default ApiHolly;
