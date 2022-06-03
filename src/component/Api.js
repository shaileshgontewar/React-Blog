import React, { createContext, useState } from "react";
export const one = createContext();

const Api = (props) => {
  // let articleData = [
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/collage-2_(2)_1.jpg?ma5hl9CcoVAzaFybhCyZsn7UR6OqTmHt&size=770:433",
  //     alt: "valley",
  //     title: "Free Donald Trump: Republicans tell Musk after he buys Twitter",
  //     details:
  //       "Republicans have asked Elon Musk to restore the account of former US President Donald Trump after Musk bought Twitter.",
  //     info: "World / April 22 2022",
  //     date: "April 22 2022",
  //     tags: "Politics",
  //     author: "Ramesh",
  //     readTime: "5 min read",
  //     description: ` After Elon Musk's Twitter takeover, Republicans asked him to 'free' the suspended account of former US President Donald Trump. In a tweet, Republicans said, "Hey, @elonmusk it's a great week to free @realDonaldTrump.
  //       Republicans have been critical of Twitter for banning former President Donald Trump and other notable conservatives.

  //       Trump's account, which had more than 88 million followers, was his primary communication tool during his presidency. He repeatedly used Twitter to claim his defeat in the November 2020 election was due to widespread voter fraud, and he urged supporters to come to Washington on Jan. 6, 2021, and march on the US Capitol to protest the election result.

  //       Days after the storming of the Capitol, Twitter said it was permanently suspending Trump’s account due to the risk of further incitement of violence.

  //       Political activists expect Trump could get his account restored after Musk's takeover of Twitter.`,
  //     id: 1,
  //     clap: 10,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/xi_modi.jpg?UEFtlK8HgkWEG_rBNPopYBYgPEcajZUG&size=770:433",
  //     alt: "valley",
  //     title: "Modi-Johnson talks",
  //     details:
  //       "China has accelerated efforts to extend its strategic and economic clout over India's neighbours. Here's how New Delhi is trying to contain Beijing.",
  //     info: "India / April 22 2022",
  //     date: "April 22 2022",
  //     tags: "Politics",
  //     author: "John doe",
  //     readTime: "5 min read",
  //     description: `On Friday, Prime Minister Narendra Modi said that trade, commerce, defence, and clean energy figured prominently in his talks with UK Prime Minister Boris Johnson. Both countries also launched their Global Innovation Partnership (GIP) as the two leaders discussed bolstering the innovation ecosystem to benefit start-ups.

  //       GIP is expected to lend a template to use the Trilateral Development Corporation (TDC) Fund for projects with other countries like Japan, Germany, France, and the European Union willing to work with India on innovation and development. India and the UK have agreed to co-finance GIP to implement its various components.

  //       Let's first understand the TDC Fund and GIP, and why they are crucial.

  //       India recently launched the TDC Fund designed to involve private sectors with state support for investment in the Indo-Pacific region (comprising the tropical waters of the Indian Ocean, the western and central Pacific Ocean, and the seas connecting the two in the general area of Indonesia) and beyond.

  //       India aims to use the TDC Fund to contribute to GIP that will globalise Indian start-ups and innovations with help like grants, development capital investment and tech assistance.

  //       GIC comes against the backdrop of the UK offering 5G, nuclear and high-speed rail technologies for China's Belt-Road Initiative (BRI), a global infrastructure development strategy adopted by Chinese leader Xi Jinping as his foreign policy centrepiece.

  //       While in India, PM Johnson said, "The world faces growing threats from autocratic states which seek to undermine democracy, choke off free and fair trade and trample on sovereignty." TDC may provide an alternative to China's development partnership model that has deepened Chinese influence over some of India's neighbours and pushed them into debt traps.

  //       CHINA'S DEBT TRAP
  //       But what's China's debt trap? Through investments in infrastructure development, China has been scrambling to deepen its influence and economic clout over India's neighbours, such as Nepal, Bangladesh, Mauritius, Myanmar, and Sri Lanka.

  //       China saw the Sri Lankan civil war as an opportunity to outcompete India. Several geopolitical experts cite Sri Lanka as an example of China's "strategic or debt-trap" diplomacy. A significant part of China's lending is linked to BRI. The Chinese loan model is simple. That's how it generally works.`,
  //     id: 2,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Sensex_reuters_15_1200x768.jpeg?GbklXhlliIOr6JWrOc_y6gmbeOE9YirW&size=770:433",
  //     alt: "valley",
  //     title: "Sensex rises 700 points",
  //     details:
  //       "The Sensex rose 1.24 per cent or 702.54 points to 57,282.43 and NSE Nifty 50 index was up 1.25 per cent or 211.55 points at 17,165.50.",
  //     info: "Business / April 22 2022",
  //     date: "April 22 2022",
  //     tags: "Business",
  //     author: "Ram",
  //     readTime: "5 min read",
  //     description: `The Sensex and Nifty rose in early morning trade on Tuesday after sharp losses in the last two sessions, tracking the broader Asian market and as investors bet on strong domestic earnings.

  //      The NSE Nifty 50 index was up 1.25 per cent or 211.55 points at 17,165.50, while the S&P BSE Sensex rose 1.24 per cent or 702.54 points to 57,282.43. Both the indexes fell over 1 per cent in the last two sessions.

  //      Meanwhile, Asian shares were cautiously higher with MSCI's broadest index of Asia-Pacific shares outside Japan inching up 0.8 per cent, though global growth fears stoked by China's stringent Covid-19 curbs and an expected streak of aggressive Federal Reserve tightening hurt risk appetite.`,
  //     id: 3,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/olaa.jpg?ikxK_8nil6CxMVSrgvE5I_lRm1MGLIdr&size=770:433",
  //     alt: "valley",
  //     title: "Ola recalls 1,441 e-scooters",
  //     details:
  //       "Ola Electric announced that the company is recalling 1,441 electric scooters in the wake of repeated fire incidents.",
  //     info: "Travel / April 22 2022",
  //     date: "April 22 2022",
  //     tags: "Travel",
  //     author: "John doe",
  //     readTime: "5 min read",
  //     description: `Ola Electric announced on Sunday that the company is recalling 1,441 units of its electric two-wheelers in the wake of incidents of e-bikes catching fire. These scooters will be inspected by engineers and will go through diagnostics across all systems.

  //       In a statement, Ola said it is investigating a fire incident that happened in Pune on March 26. According to Ola's preliminary assessment, it was found that the incident was an isolated one.

  //       "As a pre-emptive measure, we will be conducting a detailed diagnostic and health check of the scooters in that specific batch and therefore are issuing a voluntary recall of 1,441 vehicles," Ola Electric said in its statement.

  //       "These scooters will be inspected by our service engineers and will go through diagnostics across all battery systems, thermal systems as well as safety systems," the company said.

  //       Ola Electric said its battery systems already comply with and is tested for AIS 156, the latest proposed standard for India, in addition to being compliant with the European standard ECE 136.

  //       Recently, there have been widespread incidents of electric two-wheelers catching fire in various parts of the country, especially in Tamil Nadu, forcing manufacturers to recall their vehicles.

  //       An electric bike emitted smoke in Tamil Nadu's Thiruppur on April 11. That was the fourth such incident of e-bikes catching fire or emitting smoke in three weeks in the state since a father-daughter duo died after an electric bike exploded while charging.

  //       The incidents also prompted Centre to form a panel to examine and warn companies of penalties if they were found to be negligent.`,
  //     id: 4,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1508025522233-ed33103769f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80",
  //     alt: "valley",
  //     title: "Joshua Tree Overnight Adventure3",
  //     details:
  //       "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",
  //     info: "Travel / April 22 2022",
  //     date: "April 22 2022",
  //     tags: "Travel",
  //     author: "John doe",
  //     readTime: "10 min read",
  //     description:
  //       "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem hic reprehenderit iste magnam tenetur dicta, iusto accusamus ratione! Mollitia quos saepe itaque facilis blanditiis facere minima. Deserunt repellat architecto tempore? Nihil animi explicabo dolorum quo totam consequatur culpa a fugit vel maiores officia ipsa eaque illo, molestias adipisci voluptatem fugiat nam facilis esse ut quam? Nam accusamus, beatae officiis necessitatibus distinctio recusandae culpa vero expedita dicta alias amet nihil corrupti voluptates dolorum error vel maxime obcaecati ipsa asperiores ducimus! Perferendis omnis quod enim , consequuntur in inventore voluptatem ab quo adipisci corporis iure iste laboriosam. Laborum, dignissimos? Voluptate ullam nam placeat. Expedita quidem illum rerum voluptates eum, sequi quibusdam tempora odit dolor architecto velit consequuntur voluptatibus dignissimos reiciendis. Aspernatur quos officiis similique eius fuga consequuntur nesciunt earum iure dolorem molestiae saepe suscipit eos ducimus animi ipsum, cumque odit ut corrupti soluta. Fuga sit praesentium, autem tempore accusamus dolor placeat ex ab aut cum cumque soluta accusantium pariatur quam veritatis quae, maiores perspiciatis natus modi iure qui? Labore maxime optio illo, quas error impedit vitae ducimus voluptate dolore architecto harum excepturi deleniti nihil, saepe, dolores commodi maiores. Nihil, magni eius voluptatibus cum impedit sit nostrum dignissimos est corrupti modi quasi illum iure, explicabo eum veniam fugiat earum  ",
  //     id: 5,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://www.filmibeat.com/img/2022/04/xb1-1650869738.jpg.pagespeed.ic.sU3Nw2sCwI.jpg",
  //     alt: "poster",
  //     title: "RRR 31 Days Box Office Collections",
  //     details:
  //       "Jr NTR and Ram Charan starrer, RRR is refusing to slow down at the box office. The film is holding particularly well in its strong forte - the twin Telugu states Andhra Pradesh and Telangana.",
  //     info: "Bollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "Vijay SPR",
  //     readTime: "5 min read",
  //     description: `Jr NTR and Ram Charan starrer, RRR is refusing to slow down at the box office. The film is holding particularly well in its strong forte - the twin Telugu states Andhra Pradesh and Telangana. Despite the KGF 2 wave, RRR is posting decent theatrical returns even four weeks post its theatrical release. She is a look into RRR's 31 days collections.

  //     Total AP TG:- 265.97CR(402.10CR~ Gross).

  //     RRR is already the highest-grossing film even in Andhra Pradesh and Telangana and even in its fourth 3-day weekend, the film could collect over Rs 1 crore which clearly indicates that the film has struck a chord with the family audience and hence the long run.RRR has collected Rs 265.97 crores share in Andhra Pradesh and Telangana till now while the gross collections tally stands at an impressive Rs 402 crores. RRR is a mega budget action drama featuring Jr NTR and Ram Charan in the lead roles. The action epic is directed by SS Rajamouli and it has Ajay Devgan and Alia Bhatt in other important roles. RRR is the highest grossing Indian film of 2022 in Indian cinema and it is followed by KGF 2 which is getting closer and closer to the Rs 1000 crores worldwide gross mark.`,
  //     id: 6,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://www.filmibeat.com/img/2022/04/xkgf2-1649664764.jpg.pagespeed.ic.8hFQnyy1J6.jpg",
  //     alt: "poster",
  //     title: "Yash Starrer Sails Smooth On Sunday!",
  //     details:
  //       "KGF 2 Day 11 Box Office Collection: Yash Starrer Sails Smooth On Sunday!",
  //     info: "Bollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "Sruthi Hemachandran",
  //     readTime: "5 min read",
  //     description: `Yash's latest film KGF 2 has surely been released after a long delay, but it indeed was worth all the wait and hype, and its super success serves as a testament. The action flick, which is a sequel to his 2018 film KGF, went on to become yet another successful hit from the south belt.

  //     Within a time span of 7 days, the film crossed the humongous Rs 700 Crore mark at the global box office. For now, the film has crossed yet another Sunday with flying colours. As per early estimates, the Yash-starrer has grossed nearly Rs 45 Crore on day 11. After its 11-day theatrical run, the total collection of KGF 2 now stands at Rs 862.25 Crore.

  //     Well, with no major releases to clash with apart from Beast and Jersey, KGF 2 is expected to do well in the days to come. Notably, south biggie Acharya is releasing on April 29, and one will have to wait and watch to see if the Yash-starrer surpasses Chiranjeevi-Ram Charan's most awaited film when it finally sees the light of day. Written and directed by Prashanth Neel, KGF 2 follows Rocky (Yash), an assassin who after establishing himself as the kingpin of the Kolar Gold Fields is on a mission to retain his supremacy over adversaries. Featuring Srinidhi Shetty, Sanjay Dutt, Malavika Avinash, Prakash Raj and Saran, the film has cinematography by Bhuvan Gowda, music composed by Ravi Basrur and editing carried out by Ujwal Kulkarni.`,
  //     id: 7,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://www.filmibeat.com/img/2022/04/xajay-devg-1650891027.jpg.pagespeed.ic.OzZUH0FLPj.jpg",
  //     alt: "poster",
  //     title: "Ajay Devgn On How Bollywood Needs To Up Its Game",
  //     details:
  //       "Ajay Devgn On How Bollywood Needs To Up Its Game: The Numbers In The South Are Really Huge",
  //     info: "Bollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "Swikriti Srivastava",
  //     readTime: "5 min read",
  //     description: `Ever since films like Pushpa: The Rise, RRR and KGF: Chapter 2 set the box office on fire, many netizens took to Twitter to laud the directors from the South belt of the country. While some lauded them, others criticised Bollywood filmmakers for not bringing anything new to the table.
  //     In his recent tete-a-tete with a leading daily, when actor Ajay Devgn was asked to share his opinion on the ongoing north vs south debate, here's what the actor said...

  //     He said that it boils down to the numbers, and the numbers in the south are really huge. "If you were to analyse it - look at the number of theatres across north centres as compared to the South markets. Their reach (South) is a lot more. We know of probably four films from the South which have worked, but there are several that have also not done as well. What also works for them is that they manage to promote their films better as there is a lot of unity there, and unity in every way," added Devgn. He went on to add, "Even the stars there are unified, from what I have seen as an outsider and my interactions with them. They are united, and they work as one force, not for a particular film, but for the industry."

  //     Recently, Ajay Devgn featured in SS Rajamouli's blockbuster RRR, which also starred Ram Charan and Jr NTR in the lead roles. Even though Ajay and Alia Bhatt had special appearances in the film, they were praised immensely for their screen presence. With respect to work, Ajay is currently gearing up for the release of Runway 34, which is slated to be released on April 29, 2022.
  //    `,
  //     id: 8,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://images.indianexpress.com/2022/04/Nawazuddin-Siddiqui-1200by667.jpg",
  //     alt: "poster",
  //     title:
  //       "My downfall will begin the day I start taking audience for granted",
  //     details: `Nawazuddin Siddiqui said commercial films are a great tool to "break the pattern" that one might fall into as an actor and credited them for always opening up a newer world for him.`,
  //     info: "Bollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "PTI",
  //     readTime: "5 min read",
  //     description: `Actor Nawazuddin Siddiqui believes reinventing as a performer is the only way to not become “jaded” in the film industry. In his career of more than two decades, Siddiqui has received acclaim in almost every film — from his early breakout roles in Black Friday, and Kahaani to films which were riding on his shoulder like Gangs of Wasseypur, Badlapur and Photograph.

  //     The actor said he never takes his audience for granted and hence his attempt is always to look for “something more” when a character comes his way.

  //     “It is on you if you’re making your character challenging enough. If you’re doing that, means you’re still curious. It is an ongoing process. The day I stop the process thinking that the audience will love me anyway as I am a great actor, my downfall will begin.
  //     “Here, you can get too comfortable with the praise that comes your way, it can make you feel jaded. If I take that love, the audience for granted, I am finished,” the 47-year-old told PTI.

  //     Citing a cricket analogy, Siddiqui said just because a cricketer has hit a century in his last match, doesn’t mean he gets to start his next from 100. “He also starts from zero. That’s how acting is. Every film of mine, be it the big screen masala entertainers or so-called artistic films, my process remains the same: I always start from the scratch. I unlearn and then go into any project. That’s what keeps me on my toes and makes me be more receptive to challenges.”

  //     The actor is currently awaiting the release of his next, Heropanti 2. The actioner, headlined by Tiger Shroff, is among those projects that feels like a departure from the Siddiqui brand of movies, which are often mounted on a smaller scale but almost always guarantee a thought provoking cinematic experience.`,
  //     id: 9,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://images.indianexpress.com/2022/04/khan1200-2.jpg",
  //     alt: "poster",
  //     title: "Aamir Khan sports a ‘Release Gogo’ t-shirt’",
  //     details:
  //       "Fans are excited to see Aamir Khan return to the big screen with the upcoming Advait Chandan directorial Laal Singh Chaddha.",
  //     info: "Bollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "Sruthi Hemachandran",
  //     readTime: "5 min read",
  //     description: `Even as Bollywood superstar Aamir Khan awaits the release of Laal Singh Chaddha, the actor has shared an exciting announcement on what seems like his next project.

  //     The actor’s production house Aamir Khan Productions recently shared a video on social media. In the video, a casually dressed Aamir, who is seen playing table football, turns to the camera at one point and says in Hindi, “I have decided where I will narrate the kahani on 28th. I will narrate it on a radio station. It is a good place to share stories.”

  //     While no further details have been shared about the upcoming film, fans are excited to see Aamir Khan return to the big screen with the upcoming Advait Chandan directorial Laal Singh Chaddha. The film also stars Kareena Kapoor Khan, Mona Singh and Nag Chaitanya in pivotal roles.`,
  //     id: 10,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/D794/production/_124288155_tv064602693.jpg",
  //     alt: "poster",
  //     title: "Elon Musk strikes deal to buy Twitter for $44bn",
  //     details:
  //       "The board of Twitter has agreed to a $44bn (£34.5bn) takeover offer from the billionaire Elon Musk.",
  //     info: "Technology / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Technology",
  //     author: "Natalie Sherman & Daniel Thomas",
  //     readTime: "5 min read",
  //     description: `Mr Musk, who made the shock bid less than two weeks ago, said Twitter had "tremendous potential" that he would unlock.

  //     He also called for a series of changes from relaxing its content restrictions to eradicating fake accounts.

  //   The firm initially rebuffed Mr Musk's bid, but it will now ask shareholders to vote to approve the deal.

  //   Mr Musk is the world's richest person, according to Forbes magazine, with an estimated net worth of $273.6bn mostly due to his shareholding in electric vehicle maker Tesla which he runs. He also leads the aerospace firm SpaceX.

  //   "Free speech is the bedrock of a functioning democracy, and Twitter is the digital town square where matters vital to the future of humanity are debated," Mr Musk said in a statement announcing the deal.
  //   "I also want to make Twitter better than ever by enhancing the product with new features, making the algorithms open source to increase trust, defeating the spam bots, and authenticating all humans," he added.

  //   "Twitter has tremendous potential - I look forward to working with the company and the community of users to unlock it."
  //   `,
  //     id: 11,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/trump_0_1200x768.jpeg?vBfRbiD5RjHeJm02rt57g7PiaUhSszMD&size=770:433",
  //     alt: "poster",
  //     title:
  //       "Elon Musk has bought Twitter, chances are Donald Trump will be back on it soon",
  //     details:
  //       "Former US President Donald Trump who may return to Twitter soon although at the moment he seems to be demurring.",
  //     info: "Technology / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Technology",
  //     author: "Hemachandran",
  //     readTime: "5 min read",
  //     description: `Elon Musk is buying Twitter in a $44 billion deal. Once the deal is complete, Twitter will again be a private company, wholly owned by Musk. And with Musk insisting on making the site a haven for absolute free speech, chances are that former US President Donald Trump will be back on it soon. This despite the reports that claim Trump has no intention of returning to Twitter.

  //   Less than an hour after Twitter announced the deal with Musk, Trump told Fox News that this would change nothing. "I am not going on Twitter, I am going to stay on TRUTH," said Trump. "I hope Elon buys Twitter because he’ll make improvements to it and he is a good man, but I am going to be staying on TRUTH.”

  //   But that seems more like Trump demurring. There is a buzz that Twitter under Musk will be kinder to Trump than it was under Dorsey and Parag Agarwal. The reason is that Musk seems to be taking a line that all free speech is free speech irrespective of what is said. In fact, in the announcement made by Twitter on the deal on Monday night itself contains clues that Musk will be more tolerant of all that Twitter users say in their tweets.

  //   In the press note by Twitter, there was a statement from Musk. He said, “Free speech is the bedrock of a functioning democracy, and Twitter is the digital town square where matters vital to the future of humanity are debated.”

  //   In the name of free speech, chances are that as soon as the deal is complete and Musk owns Twitter, he is likely to lift the ban on Donald Trump. The former US President was banned by Twitter to stop him from tweeting in the wake of his loss in the US polls in 2020.

  //   Although Musk hasn’t commented on the Trump vs Twitter issue, recently when he spoke at a TED event he said that he wasn’t in favour of lifetime bans. That statement can be interpreted as a sign that Musk is likely to lift the ban that Twitter imposed on Trump.

  //   Although, is not clear if Musk supports Trump’s politics or not, chances are that he also doesn’t mind Trump as much as some other Silicon Valley executives do. Musk and Trump apparently share similar scepticism about covid vaccines and mask mandates. And as the statement that Trump gave to Fox News — Musk is a good man — shows, Trump too likes Musk.`,
  //     id: 12,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Youtube_pixabay_1.jpg?atJVBA99t1WXuNLjmrpVcfSxD.ohj64i&size=770:433",
  //     alt: "poster",
  //     title:
  //       "India bans 16 YouTube channels for spreading fake news: Check full list",
  //     details:
  //       "The Indian government has banned more YouTube channels for spreading false information. The list includes 10 Indian and 6 Pakistani YouTube channels.",
  //     info: "Technology / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Technology",
  //     author: "Sruthi",
  //     readTime: "5 min read",
  //     description: `The Indian government has banned more YouTube channels for spreading false information. The list includes 10 Indian and 6 Pakistani YouTube channels. Earlier this month, the Ministry of Information & Broadcasting banned 22 channels on YouTube, 18 were based in India and 4 in Pakistan.

  //   Stating the reason for the blocking, PIB said it “observed that these channels were used to spread fake news over social media on matters related to national security, India’s foreign relations, communal harmony in the country, and public order. None of the digital news publishers had furnished information to the Ministry as required under rule 18 of the IT Rules, 2021.”

  //   The government of India said that the “content published by some of the India-based YouTube channels referred to a community as terrorists, and incited hatred among the members of various religious communities. Such content was found to have the potential to create communal disharmony, and disturb public order.” In addition, PIB also said that it found multiple India-based YouTube channels publishing “unverified news and videos having the potential to create panic among various sections of society.”

  //   YouTube channels based in Pakistan were found posting fake news about the Indian Army, Jammu and Kashmir, and India’s foreign relations in the light of the situation in Ukraine, etc. “The content of these channels was observed to be completely false, and sensitive from the perspective of national security, sovereignty and integrity of India, and India’s friendly relations with foreign States,’ PIB noted.`,
  //     id: 13,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Screenshot_2022-02-11_at_9.45._1200x768.png?mWrM4G1hNUdJnZfPUDH.rvragOeVrk1z&size=770:433",
  //     alt: "poster",
  //     title:
  //       "Man tracks his lost luggage using AirTag, prepares PowerPoint presentation to ask airline for his bags ",
  //     details:
  //       "The AirTag has proved to be an extremely useful tool as it has helped several people with locating their lost goods and even pets.",
  //     info: "Technology / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Technology",
  //     author: "Sruthi Hemachandran",
  //     readTime: "5 min read",
  //     description: `Losing your luggage on a trip can be daunting and things get worse when the airline you were travelling with refuses to acknowledge your request. However, things won’t be as hard if you attach an AirTag to your luggage so that you can locate it even if the airline employees refuse to help you. The AirTag has proved to be an extremely useful tool of late, as it has helped several people with locating their lost goods and even pets. This time, AirTag helped in locating the bags of a man who was on his wedding trip. He even prepared a powerpoint presentation using the information from the AirTag to ask the airline for his bags

  //   As per CNN, Elliot Sharod and his wife Helen, were flying to UK from South Africa, where they got married on April 17. They had booked flights with stopovers in Abu Dhabi and Frankfurt but due to the raging pandemic, they rescheduled their flight and headed straight to the UK. However, upon reaching the UK, they realised that their luggage has not arrived. Interestingly, Sharod had placed an AirTag inside each bag to locate them easily. Using the Find My App, they discovered that their bags had reached Frankfurt but they were not put on a London-bound plane. The couple were travelling in Are Lingus airline.

  //   The airline informed them that the bags would be delivered to their home address. However, only two of the three bags arrived. Sharod reached out to the airline multiple times informing them about the missing bag on various platforms but go no response from the airline. He even shared his ordeal on Twitter but nothing helped. Soon he posted videos and shared a PowerPoint with screenshots from the Find My app showing the exact location of his bag.

  //   Sharod told CNN that the bag had not moved since April 21. The airline was unable to find the bag, so then he complained to the police. He said that the bag contained his wife’s wedding dress."Helen's gutted," he said. "It's her bag, her clothes, and she has that very uneasy feeling about where her property is.”`,
  //     id: 14,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/RTS2SJBD_1200x768.png?lZI4.5Foak_d8dU6DD7Ry84m.nSE.Dnq&size=770:433",
  //     alt: "poster",
  //     title:
  //       "Mark Zuckerberg, LinkedIn CEO, others banned from entering Russia",
  //     details:
  //       "People who are banned from entering Russia also include the CEO of Linkedin Ryan Roslansky along with journalists with profiles who the country claims are promoting a “Russiaphobic” agenda.",
  //     info: "Technology / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Technology",
  //     author: "Ankita Chakravarti",
  //     readTime: "5 min read",
  //     description: `Meta CEO Mark Zuckerberg has been barred by the Russian foreign ministry from entering the country. Along with Zuckerberg, US Vice President Kamala Harris has also been barred from entering the country. The Russian Foreign Ministry has noted in a statement that Zuckerberg, Harris and others will be banned indefinitely.

  //     The people who are banned from entering Russia also include the CEO of Linkedin Ryan Roslansky along with journalists with profiles who the country claims are promoting a “Russiaphobic” agenda. Interestingly, Parag Agrawal, who is the CEO of Twitter, was not banned by the ministry. Twitter has been removing misinformation posted by the Russian authorities.

  //     It does not come as a shocker that Russia has barred Zuckerberg from entering the country because Russia had previously banned Facebook and Instagram under extremism law. Facebook and Instagram, the widely used apps in Russia, were accused of “carrying out extremist activities”. However, Russia did not ban WhatsApp, which is another Facebook entity, stating that the app is used for communication and it is not a source of miscommunication.

  //     “The activities of the Meta organisation are directed against Russia and its armed forces,” FSB representative Igor Kovalevsky told the court, the Russian state news agency TASS reported.

  //     “The activities of the Meta organisation are directed against Russia and its armed forces.The use of Meta’s products by individuals and legal entities should not be considered as participation in extremist activitiesIndividuals will not be held liable for using Meta’s services,” FSB representative Igor Kovalevsky told the court.

  //     Meta had briefly allowed users to call for Putin's death on Instagram as well as Facebook. However, decision was revoked soon after Facebook and Instagram were banned.`,
  //     id: 15,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/climate_changez.jpeg?9FyPzVat05baswW3I59W9bfwPYyt0kZ9&size=770:433",
  //     alt: "poster",
  //     title: "Hollywood missing the drama in climate change, group says",
  //     details:
  //       "Waves of celebrities have been sounding the climate alarm, including Leonardo DiCaprio, Jane Fonda, Don Cheadle and Shailene Woodley.",
  //     info: "Hollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "chandran",
  //     readTime: "5 min read",
  //     description: `Hollywood’s response to climate change includes donations, protests and other activism. but it’s apparently missing out on an approach close to home.

  //     Only a sliver of screen fiction, 2.8%, refers to climate change-related words, according to a new study of 37,453 film and TV scripts from 2016-20. A blueprint for ways to turn that around was released Tuesday.

  //     “Good Energy: A Playbook for Screenwriting in the Age of Climate Change” was created with feedback from more than 100 film and TV writers, said Anna Jane Joyner, editor-in-chief of the playbook and founder of Good Energy, a nonprofit consultancy.

  //     “A big hurdle that we encountered was that writers were associating climate stories with apocalypse stories,” she said in an interview. “The main purpose of the playbook is to expand that menu of possibilities....to a larger array of how it would be showing up in our real life.”

  //     Among those who provided funding for the playbook project are Bloomberg Philanthropies, Sierra Club and the Walton Family Foundation.

  //     Waves of celebrities have been sounding the climate alarm, including Leonardo DiCaprio, Jane Fonda, Don Cheadle and Shailene Woodley. DiCaprio also starred in “Don’t Look Up,” the 2021 Oscar-nominated film in which a comet hurtling toward an indifferent Earth is a metaphor for the peril of climate-change apathy.

  //     But the playbook is asking writers and industry executives to consider a variety of less-dire approaches, Joyner said, with examples and resources included.`,
  //     id: 16,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/geroge_julia_1200x768.png?6XXrNi1x6k3A1ZOR1gkan0C2Cmcl6FG4&size=770:433",
  //     alt: "poster",
  //     title: `Julia Roberts reunites with George Clooney for Ticket To Paradise, says he's "everything and more"`,
  //     details:
  //       "On a recent episode of The Late Show with Stephen Colbert, she shared her shooting experience with her Oceans Eleven co-star.",
  //     info: "Hollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "chandran",
  //     readTime: "5 min read",
  //     description: `Julia Roberts and George Clooney will be seen in the upcoming rom-com Ticket To Paradise. The film was shot in Australia last year and it is scheduled to release in October 2022. On The Late Show with Stephen Colbert, Julia Roberts opened up on working with George Clooney in a bio bubble.

  //     JULIA ROBERTS SAYS GEORGE CLOONEY IS EVERTHING AND MORE
  //     Ticket To Paradise is Julia Roberts' fifth film with George Clooney. They have earlier worked in Ocean's Eleven (2001), Confessions of a Dangerous Mind (2002), Ocean's Twelve (2004), and Money Monster (2016). When Stephen Colbert asked Julia, "Is George a fun guy to bubble with, as Australia has tight Covid protocol?" She said, "He is everything that you think he is, he is more than that."

  //     WHEN OCEAN'S TWELVE TEAM TOOK CARE OF A PREGNANT JULIA
  //     When the late night show host asked the actress if she had been to his place in Lake Como, Julia Roberts first said she hadn't and then quipped, "No, I am kidding. Of course, I have." For the unaware, George Clooney purchased an Italian villa, located in Italy, on Lake Como, in 2002. It was constructed in the 18th Century.

  //     Julia revealed that the Ocean's Twelve cast lived at George Clooney's villa while shooting for the film and how the team took care of her as she was pregnant. She said, "We all lived there when we were doing Ocean's Twelve. We all lived at George's house. Can you imagine? I was pregnant and you would have thought I was made of glass. My bedroom was on the first floor because they didn't want me to take the stairs. They just wanted to dress me in cotton balls and usher me and it was really, really charming."`,
  //     id: 17,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/ezgif-4-3761ececd7.jpg?tfz7aHQhPIU9CXG4CTfNohGMRCip8oBo&size=770:433",
  //     alt: "poster",
  //     title: "Flash actor Ezra Miller arrested for hitting a woman with chair",
  //     details:
  //       "Flash actor Ezra Miller was arrested again after he hit a woman with chair at an event. He was later released pending further investigation",
  //     info: "Hollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "chandran",
  //     readTime: "5 min read",
  //     description: `Ezra Miller, who is known for his performances as The Flash in Justice League and other superhero films, was arrested in Hawaii recently. According to a news release from the Hawaii Police Department, Ezra became irate after being asked to leave a get-together at a Big Island home. In anger, he threw a chair and hit a woman in the forehead. The woman refused treatment for the half-inch cut on her forehead. Ezra Miller was arrested during a traffic stop and released after pending further investigation.

  //     This is his second arrest in recent weeks. He was arrested in Hawaii on March 28 following an incident in a karaoke bar. He was charged with disorderly conduct and harassment. According to the police, Ezra was partying at a karaoke bar in Silva Street in Hawaii. He became agitated and yelled obscenities at the patrons there. He also lunged at a man who was playing darts at the bar.

  //     About twelve hours after his arrest, the actor appeared via Zoom for a court hearing. He pleaded no contest to disorderly conduct and was ordered to pay a 500 dollar fine and stay away from Margarita Village in Hilo. He was also charged with harassment after police said the actor grabbed a mic from a singing woman.

  //     On the professional front, Ezra Miller will be seen next in The Flash, which will hit the theatres in June 2023. Earlier, it was slated to release in November 2022. Due to the Covid-19 pandemic, the makers postponed the film's release. The film also features Michael Keaton, Ron Livingston, Kiersey Clemons, Michael Shannon and Sasha Calle. The Flash is directed by Andy Muschietti.Live TV`,
  //     id: 18,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/pjimage_(80).jpg?IKMbjwbffgBFhqWbzsPGacncwTrLX46r&size=770:433",
  //     alt: "poster",
  //     title:
  //       "Thor Love and Thunder teaser out. Chris Hemsworth, Natalie’s Lady Thor to take over theatres on July 8",
  //     details:
  //       "The much-anticipated teaser of Thor: Love and Thunder has been released. Starring Chris Hemsworth, Natalie Portman, Tessa Thompson and Christian Bale, the film will hit the cinemas on July 8.",
  //     info: "Hollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "chandran",
  //     readTime: "5 min read",
  //     description: `Thor: Love and Thunder teaser is finally here and it’s everything we had been waiting for. Directed by Taika Waititi, the much-awaited Marvel film will release in theatres on July 8. In the teaser, Chris Hemsworth’s Thor declares his “superhero-ing’ days are over”, and he tries to discover himself in New Asgard. Natalie Portman as Goddess of Thunder also makes an entry.

  //     THOR: LOVE AND THUNDER’S IMPRESSIVE TEASER
  //     Thor: Love and Thunder is the fourth Thor film, after Thor (2011), Thor: The Dark World (2013) and Thor: Ragnarok (2017). Marvel Studios shared the latest film’s teaser today, April 18. It’s already going viral. In the teaser, we see Thor trying to find himself and discovering peace, while Tessa Thompson leads Asgardians as Valkyrie. Chris Pratt from Guardians of the Galaxy is also seen in the teaser. Towards the end, we see Jane Foster becoming The Mighty Thor and wielding the magical hammer, Mjolnir.`,
  //     id: 19,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Johnny-Depp-and-Amber-Heard.-P_0_1200x768.jpeg?5QlW3owfPP7pdE_yvwzx1VVCgU.Ut1y5&size=770:433",
  //     alt: "poster",
  //     title:
  //       "Johnny Depp's defamation case trial against Amber Heard begins. Details inside",
  //     details:
  //       "Johnny Depp filed a $50 million lawsuit against his ex-wife and actress Amber Heard. The trial has begun and will involve witnesses like James Franco, Paul Bettany and Elon Musk.",
  //     info: "Hollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "chandran",
  //     readTime: "5 min read",
  //     description: `The trial of Johnny Depp’s $50 million lawsuit against his ex-wife and actress Amber Heard over an opinion piece she wrote in The Washington Post has begun. In the same, she had claimed to be a victim of domestic abuse. While she never mentioned Depp, the actor’s lawyers claim that it damaged his career and reputation.

  //     JOHNNY DEPP-AMBER HEARD'S LEGAL BATTLE

  //     After Johnny Depp filed a $50 million lawsuit against Amber Heard for her op-ed, she sued him back. A part of the defamation complaint filed by Depp’s lawyer read, "The op-ed's clear implication that Mr Depp is a domestic abuser is categorically and demonstrably false. Her allegations are part of an elaborate hoax to generate positive publicity for Ms Heard and advance her career."

  //     The defamation trial will be broadcast live and there are around 120 people on the potential list of witnesses. It will feature testimony from witnesses like James Franco, whom Heard claims to have confided in about the bruises she got due to her fight with Depp. Other high-profile witnesses are Depp’s friend Paul Bettany and Tesla CEO Elon Musk, who reportedly had knowledge of the abuse during his and Amber’s 2016-2018 relationship.

  //     ABOUT THE CASE
  //     In 2018, Johnny Depp had sued a British tabloid for an article that referred to him as a "wife beater". He lost the case. Now, he is riled up in the defamation case against Amber Heard.

  //     Johnny Depp and Amber Heard had met on the sets of The Rum Diary in 2009 and started dating a few years later. In 2015, they got married. In 2016, Heard filed for divorce and alleged that Depp had physically abused her during their marriage under the influence of drugs or alcohol. Depp denied the accusations and stated that Heard was "attempting to secure a premature financial resolution by alleging abuse."

  //     Their divorce was finalised in 2017. Since 2018, Depp filed the defamation case against Heard for her opinion piece on domestic abuse.`,
  //     id: 20,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/carl-barcelo-nqUHQkuVj3c-unspl_1200x768.jpeg?mJGDg0e.iMplWP0jocBEciXCWhwOOqmy&size=770:433",
  //     alt: "poster",
  //     title: "4 yoga asanas to get relief from lower back pain",
  //     details:
  //       "Appropriate yoga poses suggested by an expert can relax and strengthen your back and body.",
  //     info: "Fitness / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Fitness",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `Do you have an aching back? Try yoga if you haven't already. Even a few minutes of yoga practice per day might help you become more aware of your body. This can help you discover where you're tense and where you're out of balance. You can utilise this knowledge to re-establish balance and alignment in your life. Back pain is very common these days and we see every other person complaining about the same. Yoga might be a medicine for it.

  //   India Today talked to advanced yoga trainer, Manali Sharma for her expert advice on this matter.

  //   While yoga isn't recommended if you have severe pain, people who have periodic soreness or chronic aches may find that some particular poses can help extend your spine, stretch and strengthen your muscles, and realign your back, says Manali Sharma, a yoga trainer based in Seattle, US.

  //   She also says that the main reason such pain happens is because of the long sitting hours or long-standing hours we spend.

  //   “Any beginner can start doing these asanas for back pain relief. Any posture that you are in for a long time can create such problems. So the advice would be to keep moving after every hour, stand up and stretch your body.” Says Manali Sharma.`,
  //     id: 21,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/belly_fat.jpg?.4qxGCVMfNDIO72rTtY7PTYt3QdPBzvo&size=770:433",
  //     alt: "poster",
  //     title: "5 easy tips to lose belly fat, you should try it",
  //     details:
  //       "Want to reduce belly fat? Here are some easy tips that will help you bid bye to those extra inches.",
  //     info: "Fitness / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Fitness",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `Have you been trying to reduce belly fat lately? It is quite a task, we all know. It takes a lot of effort and determination to reduce belly fat and fit back into your old pair of jeans. But nothing is impossible if your spirits are high. If you exercise regularly and maintain a healthy lifestyle, those extra bulges will definitely subside.

  //     Yoga is utterly beneficial for your mental and physical well-being. Among an array of health benefits, yoga also helps reduce belly fat. There are several yoga asanas that are known to aid weight loss and belly fat reduction.

  //     Naukasana, Bhujangasana, Kumbhakasana, Ustrasana and Dhanurasana are a few asanas that you can pratise regularly to bid bye to those extra inches.
  //     PRACTISE YOGA
  //     AVOID SUGAR
  //     TAKE PROTEIN-RICH DIET
  //     MORNING DRINKS
  //     EAT LESSER CARBS
  //     `,
  //     id: 22,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/health_tips.png?huW64SShGPQ0UrKdnvf0X_u9dgDIP3sZ&size=770:433",
  //     alt: "poster",
  //     title: "World Health Day 2022",
  //     details:
  //       "On World Health Day, IndiaToday.in spoke to a few doctors who listed a few tips you must follow to maintain good health and lifestyle.",
  //     info: "Fitness / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Fitness",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `Our health is truly the biggest asset we own. On the occasion of World Health Day, allow us to drift your attention towards your lifestyle and daily habits that directly or indirectly impact your health. Declared by the World Health Organization (WHO), World Health Day is celebrated on April 7 every year.

  //   IndiaToday.in spoke to a few doctors who listed a few tips you must follow to maintain good health and lifestyle.

  //   “Exercise daily, eat healthy and sleep well these three things are a must-do for good health,” Dr Siddharth Sehgal said. He added that ensuring these three things will keep an array of health issues, including obesity and diabetes, in control. “Exercise for at least 20 to 40 minutes daily,” he suggested.
  //   Dr Rajeev Agarwal also stressed the importance of good sleep. “Restful sleep helps you repair and rejuvenate. It also helps you switch off from digital distractions and sleep peacefully,” he said.`,
  //     id: 23,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/pixabay_water.jpg?8Q3NDEf0rX4B1GIb80G7oXrmySCBH53E&size=770:433",
  //     alt: "poster",
  //     title: "6 things to keep in mind to protect yourself from the heatwave",
  //     details:
  //       "Not taking proper measures during the heatwave may lead to dehydration, heat cramps, dizziness, vomiting, headache, sunburn or heat stroke.",
  //     info: "Fitness / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Fitness",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `With the temperature soaring high in Delhi and other northern parts of the country, it is important for you to drift your attention towards health. The India Meteorological Department (IMD) has said that Delhi will record a heatwave on Wednesday and Thursday, with temperature likely to hit the 40-degree mark.

  //   Amid this scenario, it is imperative to take certain measures to ensure the high temperature doesn’t affect your health. A person can otherwise witness dehydration, heat cramps, dizziness, vomiting, headache, sunburn or even heat stroke. Read on as we tell you the best measures you must take during the heatwave. The below-mentioned measures and precautions are suggested by the National Disaster Management Authority.

  //   STAY HYDRATED

  //   First things first, stay hydrated! Drink sufficient water as often as possible, even if you are not thirsty. If your day involves travelling, do not forget to carry a water bottle. Avoid drinks and beverages like tea, coffee and carbonated drinks which dehydrate the body.
  //   WEAR YOUR SUNSCREEN
  //   WEAR LIGHT AND BREEZY CLOTHES
  //   UMBRELLAS AND SUNNIES TO THE RESCUE
  //   EAT FRESH AND LIGHT FOOD
  //   INDULGE IN REFRESHING DRINKS`,
  //     id: 24,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/thought-catalog-9aOswReDKPo-un_1200x768.jpeg?7su7fqeoabp7aB4L0ddnGTEAWD2TIH6J&size=770:433",
  //     alt: "poster",
  //     title:
  //       "Eating avocado can reduce the risk of cardiovascular disease. Experts point to the benefits of this superfood.",
  //     details:
  //       "Study finds eating avocado twice a week lowers the risk of heart disease",
  //     info: "Fitness / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Fitness",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `Heart disease has emerged as one of the biggest threats in the world even as people suffer the aftermath of the Covid-19 pandemic. A new study now hints that consuming avocado could help in reducing the risk of cardiovascular disease.

  //   The study published in the journal American Heart Association found that eating plant-based unsaturated fats can enhance diet quality and is an important component in preventing cardiovascular disease.

  //   Researchers conducted the study on 68,786 women and 41,701 men to conclude that "higher avocado intake was associated with lower risk of cardiovascular disease and coronary heart disease."

  //   Avocados are rich, creamy, and single-seeded fruit with a mild flavour that is said to have originated in Mexico. They can be used as a fruit or a vegetable in the kitchen, and are frequently sliced and tossed into salads, pureed into soups or smoothies, or mashed into guacamole.

  //   It can be used in many forms, such as oil for cooking, or moisturizer for hair or skin. An avocado also offers numerous health benefits and can be consumed on a daily basis.

  //   However, it is very important to have a balanced diet with plenty of variety rather than to concentrate on the benefits of individual foods.

  //   FACTORS LEADING TO HEART DISEASE
  //   Dr Pallavi Aga, MD Doctor, and lifestyle consultant told India Today that the important factor behind heart diseases is a rise in the intake of processed food.
  //   "Intake of too much sugar in the form of sweet dishes, soft drinks and fruit juices, refined oil and a sedentary lifestyle can lead to insulin resistance is a factor behind inflammation and heart issues," says Dr Aga.

  //   Talking about the study, she said that avocados are a rich source of mono-unsaturated fatty acids which are very beneficial and rich in potassium, fibre, and folate. Hence, they are a superfood.`,
  //     id: 25,
  //     clap: 1,
  //   },

  //   {
  //     src: "https://images.unsplash.com/photo-1468901184895-0cec1ee34ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     alt: "poster",
  //     title: "Mittelberg, Austria",
  //     details:
  //       "Mittelberg, one of the best villages in Austria to explore Kleinwalsertal",
  //     info: "Travel / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Travel",
  //     author: "Raghavender",
  //     readTime: "5 min read",
  //     description: `If you cross the Walserschanze, which represents the German-Austrian border, holidaymakers can enjoy a view of one of the most beautiful high mountain valleys in the Austrian Alps: the Kleinwalsertal.

  //     The Austrian Kleinwalsertal, which can only be reached from Germany, with its four towns of Riezlern, Hirschegg, Mittelberg, and Baad lies at an altitude of between 1,086 m – 1,244 m and promises a great holiday for every taste.

  //     The valley was settled around 1270 by Walsern, an ethnic group that migrated from the upper Valais (Switzerland). The dialect has been preserved quite well and differs significantly from the neighbors in Vorarlberg or Allgäu.With around 5,000 inhabitants, the valley is divided into 4 villages: Riezlern, Hirschegg, Mittelberg and Baad. The Kleinwalsertal covers an area of ​​97 km². It is about 15 km long and about 6.5 km wide. The municipality is named after Mittelberg. At the highest point of the village in Austria is the parish church of St. Jodok with the oldest church tower in the Kleinwalsertal, immediately behind is the Lourdes Chapel from 1897.

  //     Mittelberg and the surrounding nature are perfect for everyone who wants to switch off from everyday stress and instead want to immerse themselves in nature. Whether for hiking, cycling or eating out with a view, Mittelberg is the perfect starting point. The best time to visit this region of Austria is certainly summer, preferably in May and June, when the meadows are in bloom. We would recommend to stay four to seven days to discover Mittelberg.`,
  //     id: 26,
  //     clap: Math.floor(Math.random() * 50),
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1545424436-3cc26c0ac5a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  //     alt: "poster",
  //     title: "Oia, Santorini, Greece",
  //     details: " Most Beautiful Places in the World this Weekend with Friends",
  //     info: "Travel / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Travel",
  //     author: "Raghavender",
  //     readTime: "5 min read",
  //     description: `Located on top of a cliff with a spectacular view of the Palea volcano, Nea Kameni, and the island of Thirassia, Oia is the most popular and arguably the most beautiful of all the picturesque villages of the Greek island of Santorini. Only about 11 km from Fira, on the north of the island, Oia will charm you with its traditional stone houses lining the narrow streets, breathtaking blue-domed churches, and sunbaked verandas.

  //   While the village has its share of taverns, souvenir shops, and cafes, Oia is more quiet and laid-back than busy Fira and most people enjoy its quaint beauty by slowly exploring its narrow streets. Stroll through the village’s small port of Ammoudi by descending 300 steps down the cliff, or visit colorful galleries showcasing art from the many artists who fell in love with the village and made it their home. Oia, Santorini is considered by many one of the prettiest places in the world. Best Beaches in Greece

  //   Nearest romantic getaways today at night, places near me, local wedding venues, best small beach town, restaurants, outside, things to do with kids near me, staycation, beaches, resorts near me, how do I plan: NC beaches, Ft Lauderdale, Day trips from NYC, From Chicago, PA, CT, CA, Hilton Head, Castles in Texas, GA beaches`,
  //     id: 27,
  //     clap: Math.floor(Math.random() * 20),
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1629985692757-48648f4f1fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //     alt: "poster",
  //     title: "Yellowstone National Park",
  //     details:
  //       "And among all that beauty there is a whole world that calls it home",
  //     info: "Travel / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Travel",
  //     author: "Raghavender",
  //     readTime: "5 min read",
  //     description: `Yellowstone National Park is the oldest national park in the world, consisting of 3,500 square miles of wild, untamed beauty left aside for the enjoyment of humankind, but also for its own protection. It is a recreation area that is spread across several states, from Wyoming to Idaho and Montana, featuring spectacular and diverse natural features – fast alpine rivers, a simmering volcano displaying its power in gushing geysers and hot springs, deep canyons, dense ancient forests, snow-covered mountaintops, breathtaking vistas, and magnificent trails.

  //     And among all that beauty there is a whole world that calls it home – bears, elk, wolves, bison, and antelopes. The park is much more than a place to come and have fun, it is a precious national treasure.

  //     Places to eat near me, free points of interest, lakes near me, waterfalls, weekend getaways near me, 3-day foodie places to visit in September, October, November, December, RV, prettiest places, lodging, campground, hangout, where is, spas, holiday, museum, hiking near me, canoeing, hotels close to me, sushi, hikes, scenic spots: Fire Island NY, Italy beaches, Delaware beaches, Claremont, Pigeon Forge, Bluffton`,
  //     id: 28,
  //     clap: Math.floor(Math.random() * 10),
  //   },

  //   {
  //     src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/D794/production/_124288155_tv064602693.jpg",
  //     alt: "poster",
  //     title: "Elon Musk strikes deal to buy Twitter for $44bn",
  //     details:
  //       "The board of Twitter has agreed to a $44bn (£34.5bn) takeover offer from the billionaire Elon Musk.",
  //     info: "Technology / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Technology",
  //     author: "Natalie Sherman & Daniel Thomas",
  //     readTime: "5 min read",
  //     description: `Mr Musk, who made the shock bid less than two weeks ago, said Twitter had "tremendous potential" that he would unlock.

  //   He also called for a series of changes from relaxing its content restrictions to eradicating fake accounts.

  //   The firm initially rebuffed Mr Musk's bid, but it will now ask shareholders to vote to approve the deal.

  //   Mr Musk is the world's richest person, according to Forbes magazine, with an estimated net worth of $273.6bn mostly due to his shareholding in electric vehicle maker Tesla which he runs. He also leads the aerospace firm SpaceX.

  //   "Free speech is the bedrock of a functioning democracy, and Twitter is the digital town square where matters vital to the future of humanity are debated," Mr Musk said in a statement announcing the deal.
  //   "I also want to make Twitter better than ever by enhancing the product with new features, making the algorithms open source to increase trust, defeating the spam bots, and authenticating all humans," he added.

  //   "Twitter has tremendous potential - I look forward to working with the company and the community of users to unlock it."
  //   `,
  //     id: 29,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/climate_changez.jpeg?9FyPzVat05baswW3I59W9bfwPYyt0kZ9&size=770:433",
  //     alt: "poster",
  //     title: "Hollywood missing the drama in climate change, group says",
  //     details:
  //       "Waves of celebrities have been sounding the climate alarm, including Leonardo DiCaprio, Jane Fonda, Don Cheadle and Shailene Woodley.",
  //     info: "Hollywood / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Cinema",
  //     author: "chandran",
  //     readTime: "5 min read",
  //     description: `Hollywood’s response to climate change includes donations, protests and other activism.but it’s apparently missing out on an approach close to home.
  //     Only a sliver of screen fiction, 2.8%, refers to climate change-related words, according to a new study of 37,453 film and TV scripts from 2016-20. A blueprint for ways to turn that around was released Tuesday.

  //     “Good Energy: A Playbook for Screenwriting in the Age of Climate Change” was created with feedback from more than 100 film and TV writers, said Anna Jane Joyner, editor-in-chief of the playbook and founder of Good Energy, a nonprofit consultancy.

  //     “A big hurdle that we encountered was that writers were associating climate stories with apocalypse stories,” she said in an interview. “The main purpose of the playbook is to expand that menu of possibilities....to a larger array of how it would be showing up in our real life.”

  //     Among those who provided funding for the playbook project are Bloomberg Philanthropies, Sierra Club and the Walton Family Foundation.

  //     Waves of celebrities have been sounding the climate alarm, including Leonardo DiCaprio, Jane Fonda, Don Cheadle and Shailene Woodley. DiCaprio also starred in “Don’t Look Up,” the 2021 Oscar-nominated film in which a comet hurtling toward an indifferent Earth is a metaphor for the peril of climate-change apathy.

  //     But the playbook is asking writers and industry executives to consider a variety of less-dire approaches, Joyner said, with examples and resources included.`,
  //     id: 30,
  //     clap: 1,
  //   },

  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Palm_oil_price_India_1200x768.jpeg?p39KetDgUZqOMT10GiGNOUCdKdgCZVAW&size=770:433",
  //     alt: "poster",
  //     title: "Palm oil price to go up? Impact of export ban.",
  //     details:
  //       "Indonesia is not only the world's largest producer of palm oil but also meets nearly 50 per cent of the total palm oil requirement in India annually.",
  //     info: "Food / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Food",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `Indonesia has decided to ban exports of cooking oil and its raw materials to reduce domestic shortages and hold down skyrocketing prices. President Joko Widodo made the announcement amid protests in the country's capital against rising food costs.

  //   The ban will come into force on Thursday (April 28) and is set to continue for an undetermined length of time, the President said. "I will continue to monitor and evaluate the implementation of this policy so that the availability of cooking oil in the country is abundant and at an affordable price," Widodo said in a statement.

  //   LARGEST PALM OIL EXPORTERS
  //   Indonesia and Malaysia are the world's largest exporters of palm oil, which plays an important role in their economies. They account for 85 per cent of global palm oil production, according to an Associated Press (AP) report.

  //   WORRY FOR INDIA
  //   Indonesia is not only the world's largest producer of palm oil but also meets nearly 50 per cent of the total palm oil requirement in India annually.

  //   The cooking oil industry was prepared for a tweak in export duty, at worst by Indonesia, which is grappling with its cooking oil price spike in their domestic market by about 40-50 per cent.

  //   Indonesia was levying $575 per tonne export duty.

  //   PRICES TO GO UP?
  //   The cooking oil national industry body -- Solvent Extractors' Association (SEA) of India has suggested immediate initiation of government to government (G2G) dialogue with Indonesia on the proposed palm oil export ban from April 28 by them as it would have adverse repercussions in India.`,
  //     id: 31,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/super_market_1200x768.jpeg?vXjVnU_xLMjtEYN7vn8fwooInOCCa9uj&size=770:433",
  //     alt: "poster",
  //     title: "Indian businesses hurt with Russia seen as war zone",
  //     details:
  //       "Many Indian businesses and entities are looking at capturing the Russian market, but have not succeeded yet due to several challenges including sanctions imposed by the West on the banking sector.",
  //     info: "Food / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Food",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `Scores of multinational companies have withdrawn or halted operations in Russia since the February 24 invasion of Ukraine, and the process continues. With country-based sanctions in place, the harshest ones from the US, it is not just the companies based out of those countries, but also many others whose reputation is at risk, have pulled out.

  //   But, there are countries like India which have decided to engage Moscow and not snap ties. In that, many Indian businesses and entities are looking at capturing the Russian market. But, have they succeeded? Not yet, since there are many challenges in doing business in a complex, integrated and interconnected global economy.

  //   India Today spoke with a few Indian business houses and financial experts in Russia and learnt that apart from payment hassles, with banking infrastructure having come under heavy sanctions, it is global logistics that has become a huge problem. But, many are looking at it as an opportunity.
  //   Co-owner of Imperial Tailoring Company in Russia, Indian businessman Andy Katwani said, “Russia is trying to rebuild itself. They were never very strong in manufacturing. This is a chance for Russia to invite a lot of Indian businessmen to come and work in Russia. Russia is willing to work with India in any given business where the Indians are willing to support them.”

  //   The Russian Chamber of Commerce is looking at building relations in pharmaceutical, medicines which Russians do not produce. But, these opportunities are laden with difficulties.`,
  //     id: 32,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/oral_health.jpg?pp6vqhSmRyVyTaW_7tU9y3hrXwBA9xxG&size=770:433",
  //     alt: "poster",
  //     title: "Oral health essentials: 5 things you should not miss",
  //     details:
  //       "Read on as we list basic yet significant things you must add to your oral hygiene routine in order to keep an array of issues such as tooth decay and bad breath at bay",
  //     info: "Food / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Food",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `Maintaining oral health is an indispensable part of leading a healthy lifestyle. Having strong teeth, healthy gums and a clean tongue are signs of good health and important aspects of oral hygiene.

  //   While brushing every day without fail is a must, there are several other things you can do to up your oral hygiene game. Here, we list basic yet significant things you must add to your oral hygiene routine in order to keep an array of issues such as tooth decay and bad breath at bay.

  //   Do not go to bed without brushing your teeth. Doing so not only prevents plaque build-up but also helps clear out bacteria from your mouth. It also helps you deal with bad breath.`,
  //     id: 33,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Untitled_design_-_2022-04-25T1.jpg?711jsZlI8rw_933Gft0JlMOQR7Sj_cAA&size=770:433",
  //     alt: "poster",
  //     title: "Her reaction is now a viral video",
  //     details:
  //       "Little girl living in Australia tried Indian food for the first time. She ate kadhai chicken with rice and some delectable mango kulfi.",
  //     info: "Food / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Food",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `If you are an Indian residing abroad, you will know that the country’s cuisine is popular in almost all parts of the world. The aromatic spices and their flavours are something people can’t stop talking about. One of the most loved Indian foods definitely has to be Chicken Tikka Masala and it is found at almost every Indian food joint abroad. Now, this little girl tried Indian food for the first time at a restaurant in Australia. The little one tried kadhai chicken with rice and also some mango kulfi. The video was posted on Instagram by Rachel. It has over 1 lakh views.

  //   In the now-viral video, the girl can be seen dining at an Indian restaurant and she can be seen gorging on some rice and kadhai chicken. She followed it up with some delicious mango kulfi. While it appears that she liked her main course, she had a hilarious reaction after tasting the fennel seeds, a mouth freshener offered at every Indian restaurant after a meal.`,
  //     id: 35,
  //     clap: 1,
  //   },
  //   {
  //     src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Screenshot_2022-04-23_at_4.28._1200x768.png?mHfXTwfpHmk3yLYGVbRb8GJP7rLT5Ntc&size=770:433",
  //     alt: "poster",
  //     title: "Why wheat prices are skyrocketing despite bumper stocks",
  //     details:
  //       "Rising international prices of wheat and fuel are pushing wheat prices up at home. There is also a demand for India to export wheat",
  //     info: "Food / April 25 2022",
  //     date: "April 25 2022",
  //     tags: "Food",
  //     author: "Hari",
  //     readTime: "5 min read",
  //     description: `India’s CPI (Consumer Price Index) inflation rose to a 17-month high of 6.95 per cent in March 2022, exceeding the Reserve Bank of India’s inflation target for three consecutive months. The prices of wheat and wheat products in the country have gone up by 15-20 per cent while global wheat prices are at a 14-year high. The escalation in global wheat prices is driven by the ongoing geopolitical turmoil—Russia’s war on Ukraine, which has led to massive supply disruptions.

  //   However, back home, the increase in prices comes on the back of five consecutive bumper harvests. Godowns are overflowing with wheat, which, amongst food items, forms a major component of CPI. Wheat/ wheat flour is lower than only rice in its weightage in CPI. India’s wheat output has been consistently high for the past five years. The country’s wheat inventory was reported at 23 million tonnes at the end of February 2022. Stocks of wheat with the Food Corporation of India (FCI) touched a record high of 60 million tonnes, much higher than the buffer norms for July.

  //   Several factors are pushing wheat prices up at home. These include international prices of wheat and rising fuel costs, which have a spillover effect on commodities used for ethanol production, such as corn and wheat. With rising global wheat prices, there is a growing demand for wheat to be exported. Himanshu, an agricultural economist from the Jawaharlal Nehru University, New Delhi, says the rising prices make for a strong case for the government to continue with the free ration scheme to the poor till at least March 2023. The government had stated that the scheme will be offered till September this year.

  //   Meanwhile, companies like ITC, Adani Wilmar and Hindustan Unilever are building their wheat stocks by buying in record quantities at a time when the Centre’s wheat procurement has declined by about 32 per cent to 69.24 lakh tonnes till April 17 of the ongoing rabi marketing year, as against 102 lakh tonnes in the year-ago period. The Centre had set a target of purchasing 444 lakh tonnes of wheat in the 2022-23 marketing year as against 433.44 lakh tonnes in the previous year.

  //   The government’s procurement of wheat in Haryana was at 28 lakh tonnes till April 17 of the current marketing year, as against 44 lakh tonnes last year. In Madhya Pradesh, 9 lakh tonnes of wheat have been purchased so far as compared to 17 lakh tonnes during the same period last year. Farmers are selling to corporates, who are paying them more than the MSP (minimum support price). But as Himanshu warns, “The private sector is crowding out the public sector. Large corporates are stocking up wheat; they will hold it until the prices are higher and create an artificial scarcity in the market. It could spiral.”

  //   Should the government sell its stocks in the open market? Opinion varies. Nilesh Shah, MD, Kotak Mahindra Asset Management Co. Ltd, says selling in the open market could bring down inflation while Himanshu believes the government needs to build reserves. With the Ukraine war on, the world could be staring at a food crisis, considering that Russia and Ukraine are Europe’s bread basket. For India, it makes all the more sense to have its coffers full.`,
  //     id: 36,
  //     clap: 1,
  //   },
  // ];

  let myData = [
    {
      Title:
        "Thor Love and Thunder teaser out. Chris Hemsworth, Natalie’s Lady Thor to take over theatres on July 8",
      CategoryName: "Bollywood",
      PublishedDate: "April 25 2022",
      ImageAsset:
        "https://img.koreatimes.co.kr/upload/newsV2/images/202204/068804283d81416aa82a2daa3ba2d832.jpg/dims/resize/740/optimize",
      BlogContent:
        "The much-anticipated teaser of Thor: Love and Thunder has been released. Starring Chris Hemsworth, Natalie Portman, Tessa Thompson and Christian Bale, the film will hit the cinemas on July 8.",
      Likes: "1M",
    },
    {
      Title:
        " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
      CategoryName: "Bollywood",
      PublishedDate: "January 15 2022",
      ImageAsset:
        "https://imagevars.gulfnews.com/2020/02/25/Vicky-Kaushal-and-Katrina-Kaif_1707c43eba1_original-ratio.jpg",
      BlogContent:
        "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
      Likes: "1000K",
    },
    {
      Title:
        " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
      BlogContent:
        "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg",
      Likes: "100K",
    },
    {
      Title:
        "Golden Globe Awards are accolades bestowed by the 87 members of the Hollywood Foreign Press Association beginning in January 1944",
      ImageAsset:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/golden-globes-1483816829.jpg?crop=1.00xw:0.752xh;0,0.0414xh&resize=1200:*",
      CategoryName: "Hollywood",
      PublishedDate: "Jan 10 2022",
      Likes: "10k",
      BlogContent:
        "The Golden Globes awards ceremony began in 1944. Members of the Hollywood Foreign Press Association present awards for achievement in film and television.The Power of the Dog is a 2021 Western psychological drama film[6][7][8] written and directed by Jane Campion, based on the 1967 novel of the same name by Thomas Savage. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Shot mostly across rural Otago, New Zealand",
    },
    {
      ImageAsset:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShoWb4WDDvS4t6tZ13tOJ-zdnrJiIoB4yTswLx8gLjZTuYwPte",
      Title:
        "Brahmāstra, is an upcoming Indian Hindi-language superhero film written and directed by Ayan Mukerji, and produced by Karan Johar. It stars Amitabh Bachchan,Ranbir Alia,Mouni & Nagarjuna",
      CategoryName: "Bollywood",
      PublishedDate: "December 16 2021",
      Likes: "1000k",
      BlogContent:
        "BRAHMASTRA - the Trilogy, is a 3-part film franchise and the beginning of India's first original universe - the Astraverse. It is a new original cinematic universe inspired by deeply rooted concepts and tales in Indian mythology ",
      detailsimage:
        "https://imageory.clapnumber.com/albums/large/aaadum_157038631",
    },

    {
      Title: "JAVASCRIPT",
      BlogContent: `JavaScript is the world most popular  lightweight, interpreted compiled programming 
        language. It is also known as scripting language for web pages. It is well-known for 
        the development of web pages, many non-browser environments also use it. JavaScript can be 
        used for Client-side developments as well as  Server-side developments`,
      author: "Nishant Singh ",
      Likes: "100K",
      PublishedDate: "Januaury 14 2020",
      ImageAsset:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      Title: "Data Structure ",
      BlogContent: `There are many real-life examples of  a stack. Consider an example of plates stacked 
        over one another in the canteen. The plate  which is at the top is the first one to be 
        removed, i.e. the plate which has been placed at the bottommost position remains in the 
        stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In 
        First Out)/FILO(First In Last Out) order.`,
      " author": "Suresh Kr",
      Likes: "10K",
      PublishedDate: "Febraury 10 2022",
      ImageAsset:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      Title: "Computer Network",
      BlogContent: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      Likes: "10k",
      PublishedDate: "Januaury 31 2015",
      ImageAsset:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      Title: "Algorithm",
      BlogContent: `The word Algorithm means “a process 
        or set of rules to be followed in calculations 
        or other problem-solving operations”. Therefore 
        Algorithm refers to a set of rules/instructions 
        that step-by-step define how a work is to be 
        executed upon in order to get the expected 
        results. `,
      author: "Monu Kr",
      Likes: "1000k",
      PublishedDate: "April 9 2020",
      ImageAsset:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      Title: "Computer Network",
      BlogContent: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
      author: "Sonu Kr",
      PublishedDate: "Januaury 14 2022",
      Likes: "10k",
      ImageAsset:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },

    {
      Title: "active stretching",
      Likes: "1000k",
      PublishedDate: "April 31 2020",
      BlogContent:
        "Active stretching is also often referred to as static active stretching — which means nonmoving — because the end position of the stretch is held for a set amount of time.",
      ImageAsset:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/03/active-open-chest-stretch-1296x728-header.jpg?w=1575",
    },
    {
      Title: "Rowing or paddling after age 60",
      Likes: "1000k",
      PublishedDate: "April 9 2020",
      BlogContent:
        "Water sports that use oars or paddles are effective forms of exercise with many health benefits. However, the sports may pose health risks, especially after age 60. The sports have a repetitive component to them.",
      ImageAsset:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/12710/42e65305-f94e-4be0-988c-bd294e1bb9aa.jpg",
    },
    {
      Title: "Warming up to the cold: Staying active in any weather",
      Likes: "1000k",
      PublishedDate: "September 11 2022",
      BlogContent:
        "Its difficult to get motivated to be active outside during cold-weather months, but it’s important to your health and can help you meet any fitness goals you’re trying to reach. There are ways to get outside and moving in cold temperatures.",
      ImageAsset:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/12432/3957075c-0fd1-45e2-a39f-71d280a958d7.png",
    },
    {
      Title: "Pizza...",
      Likes: "1M",
      PublishedDate: "August 9 2020",
      BlogContent:
        "Marinara pizza is made using 100% all-vegan ingredients, combining tomato sauce with olive oil, garlic, basil and oregano on a fluffy Neapolitan base. It’s low on calories too, so you can gobble without the guilt.",
      ImageAsset:
        "https://www.fashionbeans.com/wp-content/uploads/2019/05/foodtrends-12.jpg",
    },
    {
      Title: "BBQ Dreamz...",
      Likes: "3M",
      PublishedDate: "October 16 2022",
      BlogContent:
        "BBQ Dreamz, which rose to fame on the BBC’s Million Pound Menu, can be found at John Lewis Oxford Street throughout the summer of 2019, while Sarap, under the guidance of chef Budgie Montoya, has recently spun its acclaimed Soho pop-up into a longer summer gig in Brixton Village. Kain tayo!",
      ImageAsset:
        "https://www.fashionbeans.com/wp-content/uploads/2019/05/foodtrends-1.jpg",
    },
    {
      Title: "Fruit and Vegetable Juice",
      Likes: "2M",
      PublishedDate: "June 9 2020",
      BlogContent:
        "Fruit juice is a highly concentrated source of fruit sugar. This can raise your blood sugar quickly, and that’s why juice is not recommended for people with type 2 diabetes.",
      ImageAsset:
        "https://joybauer.com/wp-content/uploads/2016/02/thumb_2021_content_big_wide-150x150.jpg",
    },
    {
      Title: "Grilled Pineapple for Dinner and Dessert",
      Likes: "1M",
      PublishedDate: "December 16 2021",
      BlogContent:
        "Pineapple is one of those fabulous fruits that takes my taste buds on a tropical vacation! I can eat pineapple plain, no problem, but lately I’ve been grilling it to get that hint of smoky summer flavor and adding to sandwiches and desserts.",
      ImageAsset:
        "https://food.fnr.sndimg.com/content/dam/images/food/editorial/blog/legacy/healthyeats/2009/7/pineappletempeh2_lead.jpg.rend.hgtvcom.231.174.suffix/1505155524571.jpeg",
    },
    {
      ImageAsset:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/pjimage_(80).jpg?IKMbjwbffgBFhqWbzsPGacncwTrLX46r&size=770:433",
      alt: "poster",
      Title:
        "Thor Love and Thunder teaser out. Chris Hemsworth, Natalie’s Lady Thor to take over theatres on July 8",
      details:
        "The much-anticipated teaser of Thor: Love and Thunder has been released. Starring Chris Hemsworth, Natalie Portman, Tessa Thompson and Christian Bale, the film will hit the cinemas on July 8.",
      info: "Hollywood / April 25 2022",
      PublishedDate: "April 25 2022",
      tags: "Cinema",
      author: "chandran",
      readTime: "5 min read",
      BlogContent: `Thor: Love and Thunder teaser is finally here and it’s everything we had been waiting for. Directed by Taika Waititi, the much-awaited Marvel film will release in theatres on July 8. In the teaser, Chris Hemsworth’s Thor declares his “superhero-ing’ days are over”, and he tries to discover himself in New Asgard. Natalie Portman as Goddess of Thunder also makes an entry.

      THOR: LOVE AND THUNDER’S IMPRESSIVE TEASER
      Thor: Love and Thunder is the fourth Thor film, after Thor (2011), Thor: The Dark World (2013) and Thor: Ragnarok (2017). Marvel Studios shared the latest film’s teaser today, April 18. It’s already going viral. In the teaser, we see Thor trying to find himself and discovering peace, while Tessa Thompson leads Asgardians as Valkyrie. Chris Pratt from Guardians of the Galaxy is also seen in the teaser. Towards the end, we see Jane Foster becoming The Mighty Thor and wielding the magical hammer, Mjolnir.`,
      id: 19,
      clap: 1,
    },
  ];

  const [data, setData] = useState(myData);

  return (
    <>
      <div>
        <one.Provider value={[data, setData]}>{props.children}</one.Provider>
      </div>
    </>
  );
};
export default Api;
