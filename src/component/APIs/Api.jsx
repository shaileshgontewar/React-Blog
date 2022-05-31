import React, { createContext, useState } from "react";
export const movie = createContext();
const Api = (props) => {
  const [data, setData] = useState([
    {
      Title:
        " Tejasswi Prakash beats Katrina Kaif, Deepika Padukone and other celebs to be the actress to achieve this rare Instagram feat",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 15 2022",
      ImageAsset:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Teaser-3.png?impolicy=Medium_Widthonly&w=303",
      BlogContent:
        "Tejasswi Prakash beat popular actresses such as Shehnaaz Gill, Katrina Kaif, Deepika Padukone and others to achieve a rare Instagram feat. Check out what is it all about below...",
    },
    {
      Title:
        " Nisha Rawal talks about raising son Kavish alone after separation with Karan Mehra; says 'I feel privileged'",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://st1.bollywoodlife.com/wp-content/uploads/2021/06/v-7.jpg?impolicy=Medium_Widthonly&w=303",
      BlogContent:
        "Lock Upp former contestant Nisha Rawal who is a single mother to a 5-year-old son Kavish spoke about her struggle and concerns of raising him alone post-separation from Karan Mehra.",
    },
    {
      Title:
        " Swaran Ghar: Actresses who REJECTED Sangita Ghosh’s role in the show",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Swaran-Ghar1-1.png?impolicy=Medium_Widthonly&w=303",
      BlogContent:
        "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg",
    },
    {
      Title:
        " Prithviraj: Akshay Kumar to show his historical epic not to Narendra Modi, but this famous politician – any guesses?",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Prithviraj_To_Be_Shown_To_Amit_Shah.jpg?impolicy=Medium_Widthonly&w=303",
      BlogContent:
        "Prithviraj stars Akshay Kumar as the eponymous warrior-king, along with Sanjay Dutt, Sonu Sood, Ashutosh Rana, Manav Vij and Sakshi Tanwar, and introduces ex-Miss World Manushi Chhillar. It's directed by Dr. Chandraprakash Dwivedi,.",
    },
    {
      Title:
        " Jug Jug Jeeyo trailer launch: Varun Dhawan silences journalist who questions Kiara Advani why she isn't married with this SAVAGE reply",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Varun_Dhawan_Schools_Journalist_For_Kiara_Advani_At_Jug_jugg_Jeeyo_Trailer_Launch.jpg?impolicy=Medium_Widthonly&w=400",
      BlogContent: "The Kiara Advani and Varun Dhawan starrer",
    },
    {
      Title:
        " Tiger Shroff, Nawazuddin Siddiqui and Tara Sutaria starrer Heropanti 2 to begin streaming on Amazon Prime Video on May 27, 2022",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Tiger-Shroff-Nawazuddin-Siddiqui-and-Tara-Sutaria-starrer-Heropanti-to-begin-streaming-on-Amazon-Prime-Video-on-May-27-2022-1-600x450.jpg",
      BlogContent:
        "Tiger Shroff, Nawazuddin Siddiqui and Tara Sutaria starrer Heropanti 2 to begin streaming on Amazon Prime Video on May 27, 2022",
    },
    {
      Title:
        " SCOOP: After Venkatesh and Pooja Hegde, Salman Khan gets Jagapathi Babu on board for Kabhi Eid Kabhi Diwali",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/05/SCOOP-After-Venkatesh-and-Pooja-Hegde-Salman-Khan-gets-Jagapathi-Babu-on-board-for-Kabhi-Eid-Kabhi-Diwali-346x260.jpg",
      BlogContent:
        "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg",
    },
    {
      Title:
        " Karan Johar hires renowned Marut Sikka and Harsha Kilachand to make food and desserts for his 50th birthday bash",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/05/Karan-Johar-hires-renowned-Marut-Sikka-and-Harsha-Kilachand-to-make-food-and-desserts-for-his-50th-birthday-bash--346x260.jpg",
      BlogContent:
        "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg",
    },
    {
      Title:
        " KAamir Khan to host IPL 2022 finale ahead of Laal Singh Chaddha trailer release on May 29",
      CategoryName: "Bollywood",
      PublishedDate: "Januaury 14 2022",
      ImageAsset:
        "https://media2.bollywoodhungama.in/wp-content/uploads/2022/05/Aamir-Khan-to-host-IPL-2022-finale-ahead-of-Laal-Singh-Chaddha-trailer-release-on-May-29-1-346x260.jpg",
      BlogContent:
        "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg",
    },
  ]);
  return (
    <div>
      <movie.Provider value={[data, setData]}>{props.children}</movie.Provider>
    </div>
  );
};

export default Api;
