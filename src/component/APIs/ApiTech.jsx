import React, { createContext, useState } from "react";
export const tech = createContext();
const ApiTech = (props) => {
  const [dataTech, setDataTech] = useState([
    {
      "source": {
      "id": null,
      "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "Apple Releases tvOS 15.5.1 for Apple TV HD and Apple TV 4K - MacRumors",
      "description": "Apple today released tvOS 15.5.1, a minor update to the tvOS operating system that first launched in September 2021. tvOS 15.5.1 comes about 10 days...",
      "url": "https://www.macrumors.com/2022/05/25/apple-releases-tvos-15-5-1/",
      "urlToImage": "https://images.macrumors.com/t/-OrBC1E2HenMFmWiYHFnHEmi514=/2500x/article-new/2021/04/apple-tv-4k-design-green.jpg",
      "publishedAt": "2022-05-25T16:42:23Z",
      "content": "Apple today released tvOS 15.5.1, a minor update to the tvOS operating system that first launched in September 2021. tvOS 15.5.1 comes about 10 days after the launch of tvOS 15.5. \r\ntvOS 15.5.1 can b… [+657 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Xiaomi 12 Pro vs OnePlus 10 Pro: Which is top dog? - Pocket-lint",
      "description": "So you want a flagship Android phone, but don't want to spend absolute top dollar on one. You're definitely not alone here. Especially given the recent rise ...",
      "url": "https://www.youtube.com/watch?v=HFl9OsuO1Jk",
      "urlToImage": "https://i.ytimg.com/vi/HFl9OsuO1Jk/hqdefault.jpg",
      "publishedAt": "2022-05-25T16:00:08Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Kotaku"
      },
      "author": "Ari Notis",
      "title": "Some Of The PS5’s Biggest Games Are On Sale ATM - Kotaku",
      "description": "PlayStation's annual ‘Days of Play’ sale runs from now through early June",
      "url": "https://kotaku.com/playstation-days-of-play-sale-ps4-ps5-ghostwire-deathlo-1848975561",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f8180f659bb9baba869fd6049c413245.jpg",
      "publishedAt": "2022-05-25T16:00:00Z",
      "content": "If you just bought Ghostwire, Deathloop, or any other big PlayStation game, I am so, so sorry. You probably couldve picked it up a lot cheaper today, as PlayStations big spring sale kicks off.\r\nAnnou… [+2022 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Cisa.gov"
      },
      "author": null,
      "title": "Google Releases Security Updates for Chrome | CISA - US-CERT",
      "description": "Google has released Chrome version 102.0.5005.61 for Windows, Mac, and Linux. This version addresses vulnerabilities that an attacker could exploit to take control of an affected system.  CISA encourages users and administrators to review the Chrome Release N…",
      "url": "https://us-cert.cisa.gov/ncas/current-activity/2022/05/25/google-releases-security-updates-chrome",
      "urlToImage": null,
      "publishedAt": "2022-05-25T15:54:30Z",
      "content": "Google has released Chrome version 102.0.5005.61 for Windows, Mac, and Linux. This version addresses vulnerabilities that an attacker could exploit to take control of an affected system. \r\nCISA encou… [+95 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "GSMArena.com"
      },
      "author": "Peter",
      "title": "More details on the Realme Pad X revealed: memory and color options - GSMArena.com news - GSMArena.com",
      "description": "The full reveal is tomorrow, but the slate is already listed on Realme's official site for China and JD.com.",
      "url": "https://www.gsmarena.com/more_details_on_the_realme_pad_x_revealed_memory_and_color_options-news-54426.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/05/realme-pad-x-more-details/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2022-05-25T15:37:01Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "15 Games With Best Facial Animations Which Definitely Don't Go All Uncanny Valley On Us [Part 2] - GamingBolt",
      "description": "Video game graphics have certainly gotten impressive over the last couple of decades. For most games, however, facial animations still tend to be a sore poin...",
      "url": "https://www.youtube.com/watch?v=k6KC4SILUjM",
      "urlToImage": "https://i.ytimg.com/vi/k6KC4SILUjM/maxresdefault.jpg",
      "publishedAt": "2022-05-25T15:30:07Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "physicsworld.com"
      },
      "author": null,
      "title": "Quantum teleportation expands beyond neighbouring nodes – Physics World - physicsworld.com",
      "description": "Sending quantum information directly from “Alice” to “Charlie” is a step towards a functional multi-node quantum network",
      "url": "https://physicsworld.com/a/quantum-teleportation-expands-beyond-neighbouring-nodes/",
      "urlToImage": "https://physicsworld.com/wp-content/uploads/2022/05/photo_mdl_3_Quantum-teleportation-expands-beyond-neighbouring-nodes_small.jpg",
      "publishedAt": "2022-05-25T15:17:06Z",
      "content": "Teleportation in progress Researchers at QuTech in the Netherlands with their quantum teleportation experiment. (Courtesy: QuTech)\" /&gt;\r\nTeleportation in progress Researchers at QuTech in the Nethe… [+6286 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Deccan Herald"
      },
      "author": "Rohit KVN",
      "title": "WWDC 2022: Meet Indian developers creating world-class apps, games - Deccan Herald",
      "description": "Since the early 1990s, the Indian technology sector has grown by leaps and bounds. While some such as Infosys, Wipro, and others have turned into big companies employing millions of people not only in India but also around the world. With the change in time, …",
      "url": "https://www.deccanherald.com/business/technology/wwdc-2022-meet-indian-developers-creating-world-class-apps-games-1112427.html",
      "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2022/05/25/possessions-game-2-1112427-1653489611.jpg",
      "publishedAt": "2022-05-25T14:40:11Z",
      "content": "Since the early 1990s, the Indian technology sector has grown by leaps and bounds. While some such as Infosys, Wipro, and others have turned into big companies employing millions of people not only i… [+7174 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "PlayStation LifeStyle"
      },
      "author": "Rebecca Smith",
      "title": "Sony Confirms Discounted PS Plus Subs Need to Pay a Higher Upgrade Price - PlayStation LifeStyle",
      "description": "Sony confirms they will be charging players a higher price to upgrade to PS Plus Extra or Premium if they bought PS Plus at a discount.",
      "url": "https://www.playstationlifestyle.net/2022/05/25/ps-plus-subs-higher-upgrade-price/",
      "urlToImage": "https://www.playstationlifestyle.net/assets/uploads/2022/05/PS-Plus.jpg",
      "publishedAt": "2022-05-25T14:13:09Z",
      "content": "In what would normally have been a great decision, many players thought they would stack up on discounted PS Plus and PS Now codes when Sony first announced the PlayStation Plus upgrade prices. This … [+2995 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "GSMArena.com"
      },
      "author": "Peter",
      "title": "14\" and 15.6\" RedmiBook Pro 2022 Ryzen edition laptops unveiled with 6000H processors - GSMArena.com news - GSMArena.com",
      "description": "A couple of months ago Xiaomi refreshed the Intel edition as well. The 15.6\" model comes with an optional Nvidia RTX 2050 GPU.",
      "url": "https://www.gsmarena.com/14_and_156redmibook_pro_2022_ryzen_edition_laptops_unveiled_with_6000h_processors-news-54424.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/05/redmibook-pro-2022-ryzen-edition-announcement/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2022-05-25T13:54:01Z",
      "content": "Xiaomi upgraded the RedmiBook Pro 15 laptop to 12th gen Intel processors back in March, now its time for the Ryzen version of the laptop to get a new CPU. The selection is the same as last year just … [+3838 chars]"
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "Instagram is changing: From updated logo to new typeface; here’s everything to know - The Financial Express",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMijgFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9pbmR1c3RyeS90ZWNobm9sb2d5L2luc3RhZ3JhbS1pcy1jaGFuZ2luZy1mcm9tLXVwZGF0ZWQtbG9nby10by1uZXctdHlwZWZhY2UtaGVyZXMtZXZlcnl0aGluZy10by1rbm93LzI1Mzc3MzEv0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-05-25T13:13:21Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "9to5Mac"
      },
      "author": null,
      "title": "Mac mini clone offered to developers as Microsoft embraces ARM chips - 9to5Mac",
      "description": "Microsoft has revealed what looks very much like an M1 Mac mini clone during its developer conference, Build 22. The device is known as Project Volterra. The resemblance is more than skin-deep: the machine is ARM-based, and effectively plays the same role as …",
      "url": "https://9to5mac.com/2022/05/25/mac-mini-clone/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/05/Mac-mini-clone.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-05-25T13:06:00Z",
      "content": "Microsoft has revealed what looks very much like an M1 Mac mini clone during its developer conference, Build 22. The device is known as Project Volterra.\r\nThe resemblance is more than skin-deep: the … [+3032 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "Motorola Razr 3 has NO chin and notch! New leak shows the phone in action - HT Tech",
      "description": "Motorola Razr 3  leak reveals new design with no chin and notch. You can even see the phone folding.",
      "url": "https://tech.hindustantimes.com/mobile/news/motorola-razr-3-has-no-chin-and-notch-new-leak-shows-the-phone-in-action-71653481547101.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/25/1600x900/IMG_7399_1601887838170_1653482827100.jpg",
      "publishedAt": "2022-05-25T12:51:20Z",
      "content": "Motorola Razr 3 is coming soon to a store near us and that is no secret! The leaks have revealed a lot about the phone in the past few weeks, and we expected more to come in the days leading to its l… [+1986 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNBCTV18"
      },
      "author": "StoryTailors",
      "title": "Apple Watch Pride Edition wrist bands launched in 2 variants to celebrate upcoming Pride month - CNBCTV18",
      "description": "Apple Watch Pride Edition: The Pride Edition Sport Loop will have a colour gradient with the word ‘pride’ woven in the band. The bands will come with dynamic Pride watch faces. They will be available at the Apple Store from May 26.",
      "url": "https://www.cnbctv18.com/technology/apple-launches-new-apple-watch-pride-edition-bands-to-celebrate-lgbtq-community-13612832.htm",
      "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2019/08/2019-08-29T213905Z_2_LYNXNPEF7S1VG_RTROPTP_4_SCIENCE-SEX-1019x573.jpg",
      "publishedAt": "2022-05-25T12:49:17Z",
      "content": "Cupertino-based tech giant Apple has released two new Pride Edition wrist bands for the Apple Watch in celebration of the upcoming Pride month this June.\r\nThe two new bands have been launched as part… [+1954 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Samsung Galaxy M53 5G Review: Enough of an Upgrade? - Gadgets 360",
      "description": null,
      "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dr_29oYUhzvU",
      "urlToImage": null,
      "publishedAt": "2022-05-25T12:30:26Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "Xiaomi Leica partnership first phone is NOT Xiaomi 12 Ultra! Astonishing info LEAKS! - HT Tech",
      "description": "Xiaomi Leica partnership will not see a Xiaomi 12 Ultra happen this time. Leak suggest a Xiaomi 12S coming to the markets soon.",
      "url": "https://tech.hindustantimes.com/mobile/news/xiaomi-leica-partnership-first-phone-is-not-xiaomi-12-ultra-astonishing-info-leaks-71653479712208.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/25/1600x900/IMG_3718_1652533492309_1653481123409.jpg",
      "publishedAt": "2022-05-25T12:19:32Z",
      "content": "Xiaomi and Leica announced earlier this week about their new joint venture, promising a new announcement in July. While both companies have kept mum on the product name, the world of leaks has given … [+2178 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Videocardz.com"
      },
      "author": null,
      "title": "MSI confirms TITAN GT77 gaming laptop will feature Intel Alder Lake-HX CPU - VideoCardz.com",
      "description": "MSI confirms updated TITAN gaming laptop is coming Following the leaks on TITAN GT77, MSI has officially confirmed that this system is indeed launching soon.  This new laptop design received two awards: 2022 Computex Best Choice and reddot 2022. It goes witho…",
      "url": "https://videocardz.com/newz/msi-confirms-titan-gt77-gaming-laptop-will-feature-intel-alder-lake-hx-cpu",
      "urlToImage": "https://cdn.videocardz.com/1/2022/05/MSI-GT77-TITAN.jpg",
      "publishedAt": "2022-05-25T12:15:00Z",
      "content": "Following the leaks on TITAN GT77, MSI has officially confirmed that this system is indeed launching soon. \r\nThis new laptop design received two awards: 2022 Computex Best Choice and reddot 2022. It … [+1114 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "Oppo Reno 8 Pro tipped to launch in India in June - Times of India",
      "description": "Oppo recently launched the Oppo Reno 8 series of smartphones in China. The Oppo Reno 8 series comprises three smartphones -- Reno 8, Reno 8 Pro and th",
      "url": "https://timesofindia.indiatimes.com/gadgets-news/oppo-reno-8-pro-tipped-to-launch-in-india-in-june/articleshow/91790912.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-91790900,width-1070,height-580,imgsize-11844,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-05-25T11:57:00Z",
      "content": null
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": "Shaurya Shubham",
      "title": "Explained: Why sub-6GHz 5G network is more important than the mmWave - Times of India",
      "description": "5G connectivity is probably the next big thing for connectivity and smartphones However, there’s a lot of confusion that has surrounded the entire con",
      "url": "https://timesofindia.indiatimes.com/gadgets-news/explained-why-sub-6ghz-5g-network-is-more-important-than-the-mmwave/articleshow/91790794.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-91790794,width-1070,height-580,imgsize-60070,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2022-05-25T11:51:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Sportskeeda"
      },
      "author": "Sidhartha Deka",
      "title": "5 video games like Red Dead Redemption that'll make you feel like a true Western gunslinger - Sportskeeda",
      "description": "The Red Dead Redemption video games have set the bar for a great Wild West experience of being the gunslinging cowboy that players have always wished for.",
      "url": "https://www.sportskeeda.com/esports/5-video-games-like-red-dead-redemption-that-ll-make-feel-like-true-western-gunslinger",
      "urlToImage": "https://staticg.sportskeeda.com/editor/2022/05/8bd36-16534740943930-1920.jpg",
      "publishedAt": "2022-05-25T11:40:05Z",
      "content": "The Red Dead Redemption video games have set the bar for a great Wild West experience of being the gunslinging cowboy that players have always wished for. With RDR's engaging combat mechanics, gun fi… [+5809 chars]"
      }
  ]);
  return (
    <div>
      <tech.Provider value={[dataTech, setDataTech]}>
        {props.children}
      </tech.Provider>
    </div>
  );
};
export default ApiTech;
