import React, { createContext, useState } from "react";
export const fit = createContext();
const ApiFit = (props) => {
  const [dataFit, setDataFit] = useState([
   {
            "source": {
            "id": null,
            "name": "New York Post"
            },
            "author": "The Sun",
            "title": "Woman's life is saved after she spotted something unusual in mirror - New York Post ",
            "description": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life.",
            "url": "https://nypost.com/2022/05/24/womans-life-is-saved-after-she-spotted-something-unusual-in-mirror/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/susan-cycles-314.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-05-24T23:57:00Z",
            "content": "A woman has recalled the moment she spotted something unusual in the mirror which ended up saving her life. \r\nSusan Hunter-Dabson was blowdrying her hair and noticed something odd when she lifted her… [+2971 chars]"
            },
           {
            "source": {
            "id": "buzzfeed",
            "name": "Buzzfeed"
            },
            "author": "Liz Richardson",
            "title": "People Who Accidentally Woke Up Mid-Surgery Are Sharing What Happened, And I Truly Have No Words - BuzzFeed",
            "description": "\"I woke up during a gastric bypass surgery in 2001. I couldn't hear anything and knew my eyes were taped shut. It was the worst pain of my life — nothing has ever come close to it.\"",
            "url": "https://www.buzzfeed.com/lizmrichardson/people-who-woke-up-mid-surgery-stories",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/20/19/enhanced/d7047feb97bd/original-6595-1653075859-13.jpg?crop=1250:654;0,149%26downsize=1250:*",
            "publishedAt": "2022-05-24T22:46:03Z",
            "content": "\"I didn't feel any pain, though, since my mouth was probably shot up full of Novocain. I kind of wanted to not be in that situation, so I mustered all of my strength and twitched my finger a bit. Eit… [+486 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Daily Mail"
            },
            "author": "John Ely Senior",
            "title": "One previous UK patient had monkeypox in body for 76 days - Daily Mail",
            "description": "British experts found one monkeypox patient suffered a post-sex relapse six weeks after being given the all clear, in a study of the UK's seven previous monkeypox cases.",
            "url": "https://www.dailymail.co.uk/news/article-10849249/One-previous-UK-patient-monkeypox-body-76-days.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/24/14/58222443-0-image-a-52_1653398128069.jpg",
            "publishedAt": "2022-05-24T22:30:46Z",
            "content": "Monkeypox may be able to linger in the body for 10 weeks even after the tell-tale rash has disappeared, scientists say. \r\nExperts don't believe patients can be contagious for that length of time but … [+9168 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Best Life"
            },
            "author": "Kali Coleman",
            "title": "Top Virus Expert Warns We Must Do These 3 Things to Stay \"Safe\" - Best Life",
            "description": "As COVID continues to rise and a potential fall surge looms, one virus expert is giving advice to Americans on how we can stay safe.",
            "url": "http://bestlifeonline.com/virus-expert-stay-safe-covid-news/",
            "urlToImage": "https://bestlifeonline.com/wp-content/uploads/sites/3/2021/05/woman-mask-face.jpg?quality=82&strip=all",
            "publishedAt": "2022-05-24T21:45:38Z",
            "content": "Many of us may have celebrated the end of the COVID pandemic a bit too early. Despite a two-month decline, the virus is back on the rise thanks to widely circulating subvariants of the Omicron varian… [+3749 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Neurosciencenews.com"
            },
            "author": "https://www.facebook.com/neurosciencenews",
            "title": "Mechanism Shared by Mutations in Different Genes Associated With Autism, Schizophrenia, and Other Conditions Discovered - Neuroscience News",
            "description": "Researchers have identified a mechanism shared by mutations in the SHANK3 and ADNP genes. The genes have been associated with the development of ASD and schizophrenia.",
            "url": "https://neurosciencenews.com/mechanism-asd-schizophrenia-genetics-20656/",
            "urlToImage": "https://neurosciencenews.com/files/2022/05/asd-schizophrenia-genetics-neurosinces-public.jpg",
            "publishedAt": "2022-05-24T21:36:23Z",
            "content": "Summary: Researchers have identified a mechanism shared by mutations in the SHANK3 and ADNP genes. The genes have been associated with the development of ASD and schizophrenia.\r\nSource: Tel Aviv Univ… [+7529 chars]"
            },
           {
            "source": {
            "id": "breitbart-news",
            "name": "Breitbart News"
            },
            "author": "John Hayward",
            "title": "China Ready to Cash In with Monkeypox Test Kits and Vaccines - Breitbart",
            "description": "Chinese companies are already prepared to cash in on monkeypox panic with nucleic acid test kits and vaccines.",
            "url": "https://www.breitbart.com/asia/2022/05/24/china-ready-cash-in-monkeypox-test-kits-vaccines/",
            "urlToImage": "https://media.breitbart.com/media/2021/03/China-Virus-640x335.jpg",
            "publishedAt": "2022-05-24T21:17:22Z",
            "content": "Chinas state-run Global Timeson Monday boasted that Chinese companies are already prepared to cash in on monkeypox panic with nucleic acid test kits and vaccines.\r\nSeveral Chinese test kit makers rea… [+3572 chars]"
            },
           {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Shiv Sudhakar",
            "title": "Melanoma can be prevented with regular skin checks and the 'ABCDE' rule: American Academy of Dermatology - Fox News",
            "description": "More than 90% of melanoma skin cancer cases are from skin damage due to ultraviolent radiation as the American Academy of Dermatology recommends regular skin self examinations.",
            "url": "https://www.foxnews.com/health/melanoma-prevent-skin-checks-abcde-rule-american-academy-dermatology",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/07/sunscreen-prevent-skin-cancer.jpg",
            "publishedAt": "2022-05-24T21:16:00Z",
            "content": "Knowing your \"ABCs\" may save your life.\r\n\"The Real Housewives of Orange County\" star Tamra Judge recently took to Instagram to remind her followers about the dangers of melanoma.\r\n\"May is melanoma aw… [+4401 chars]"
            },
           {
            "source": {
            "id": null,
            "name": "Theepochtimes.com"
            },
            "author": null,
            "title": "COVID-19 Is Treatable and Preventable With Vitamin D: Dr. Robert Malone - The Epoch Times",
            "description": "COVID-19 can be treated and prevented with vitamin D, according to the pioneer of mRNA vaccine technology and ...",
            "url": "https://www.theepochtimes.com/covid-19-is-treatable-and-preventable-with-vitamin-d-dr-robert-malone_4484667.html",
            "urlToImage": "https://img.theepochtimes.com/assets/uploads/2022/02/02/Dr.-Robert-Malone-still-2400-e1641144014902-1200x731.jpeg",
            "publishedAt": "2022-05-24T20:40:51Z",
            "content": "COVID-19 can be treated and prevented with vitamin D, according to the pioneer of mRNA vaccine technology and president of the Global COVID Summit, Dr. Robert Malone.\r\nThere are virtually no deaths f… [+9733 chars]"
            }
  ]);
  return (
    <div>
      <fit.Provider value={[dataFit, setDataFit]}>
        {props.children}
      </fit.Provider>
    </div>
  );
};
export default ApiFit;











