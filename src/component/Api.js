import React, { createContext,useState } from 'react';
export const one =createContext()

const Api = (props) => {

    const [data, setData] = useState([
      {
        "Title" : "Alia Bhatt-Ranbir Kapoor Wedding Highlights",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "April 14 2022",
        "ImageAsset"    : "https://img.koreatimes.co.kr/upload/newsV2/images/202204/068804283d81416aa82a2daa3ba2d832.jpg/dims/resize/740/optimize",
        "BlogContent"   :  " Ranbir Kapoor and Alia Bhatt got married on April 14 in a private ceremony with family and close friends in attendance. The couple will be hosting a small, intimate reception party at their Vastu home in Mumbai, today, April 16" ,
        "Likes"         : "1M"
      },
      {
        "Title" : " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "January 15 2022",
        "ImageAsset"    : "https://imagevars.gulfnews.com/2020/02/25/Vicky-Kaushal-and-Katrina-Kaif_1707c43eba1_original-ratio.jpg",
        "BlogContent"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
        "Likes"         : "1000K"
      },
      {
        "Title" : " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
        "CategoryName"  : "Bollywood",
        "PublishedDate" : "Januaury 14 2022",
        "ImageAsset"    : "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
        "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg",
        "Likes"         : "100K"
      },
      {
        "Title":"Golden Globe Awards are accolades bestowed by the 87 members of the Hollywood Foreign Press Association beginning in January 1944",
          "ImageAsset":"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/golden-globes-1483816829.jpg?crop=1.00xw:0.752xh;0,0.0414xh&resize=1200:*",
          "CategoryName": "Hollywood",
          "PublishedDate":"Jan 10 2022",
          "Likes":"10k",
          "BlogContent":"The Golden Globes awards ceremony began in 1944. Members of the Hollywood Foreign Press Association present awards for achievement in film and television.The Power of the Dog is a 2021 Western psychological drama film[6][7][8] written and directed by Jane Campion, based on the 1967 novel of the same name by Thomas Savage. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Shot mostly across rural Otago, New Zealand"
  
      },
      {
        "ImageAsset":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShoWb4WDDvS4t6tZ13tOJ-zdnrJiIoB4yTswLx8gLjZTuYwPte",
        "Title":"Brahmāstra, is an upcoming Indian Hindi-language superhero film written and directed by Ayan Mukerji, and produced by Karan Johar. It stars Amitabh Bachchan,Ranbir Alia,Mouni & Nagarjuna",
        "CategoryName": "Bollywood",
        "PublishedDate":"December 16 2021",
        "Likes":"1000k",
        "BlogContent":"BRAHMASTRA - the Trilogy, is a 3-part film franchise and the beginning of India's first original universe - the Astraverse. It is a new original cinematic universe inspired by deeply rooted concepts and tales in Indian mythology ",
        "detailsimage":"https://imageory.clapnumber.com/albums/large/aaadum_157038631"

      },
    // ]) 
    // const [tech, setTech] = useState([
      {
        "Title": "JAVASCRIPT",
        "BlogContent": `JavaScript is the world most popular  lightweight, interpreted compiled programming 
        language. It is also known as scripting language for web pages. It is well-known for 
        the development of web pages, many non-browser environments also use it. JavaScript can be 
        used for Client-side developments as well as  Server-side developments`,
        "author": "Nishant Singh ",
        "Likes"         : "100K",
        "PublishedDate" : "Januaury 14 2020",
        "ImageAsset":"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
      },
      {
       "Title": "Data Structure ",
        "BlogContent": `There are many real-life examples of  a stack. Consider an example of plates stacked 
        over one another in the canteen. The plate  which is at the top is the first one to be 
        removed, i.e. the plate which has been placed at the bottommost position remains in the 
        stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In 
        First Out)/FILO(First In Last Out) order.`,
       " author": "Suresh Kr",
       "Likes"         : "10K",
       "PublishedDate" : "Febraury 10 2022",
       "ImageAsset": "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
      },
      {
       "Title": "Computer Network",
        "BlogContent": `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `, 
        "author": "Sonu Kr",
        "Likes":"10k",
        "PublishedDate" : "Januaury 31 2015",
        "ImageAsset": "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
      },
      {
       "Title": "Algorithm",
        "BlogContent": `The word Algorithm means “a process 
        or set of rules to be followed in calculations 
        or other problem-solving operations”. Therefore 
        Algorithm refers to a set of rules/instructions 
        that step-by-step define how a work is to be 
        executed upon in order to get the expected 
        results. `,
        "author": "Monu Kr",
        "Likes":"1000k",
        "PublishedDate" : "April 9 2020",
        "ImageAsset":
          "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
      },
      {
       "Title": "Computer Network",
        "BlogContent": `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `, 
        "author": "Sonu Kr",
        "PublishedDate" : "Januaury 14 2022",
        "Likes":"10k",
        "ImageAsset":
          "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
      },
    // ])
    // const [food, setFood] =useState([
      {
        "Title":"active stretching",
        "Likes":"1000k",
        "PublishedDate" : "April 31 2020",
        "BlogContent" :"Active stretching is also often referred to as static active stretching — which means nonmoving — because the end position of the stretch is held for a set amount of time.",
        "ImageAsset":"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/03/active-open-chest-stretch-1296x728-header.jpg?w=1575",
      },
      {
        "Title":"Rowing or paddling after age 60",
        "Likes":"1000k",
        "PublishedDate" : "April 9 2020",
        "BlogContent" :"Water sports that use oars or paddles are effective forms of exercise with many health benefits. However, the sports may pose health risks, especially after age 60. The sports have a repetitive component to them.",
        "ImageAsset": "https://domf5oio6qrcr.cloudfront.net/medialibrary/12710/42e65305-f94e-4be0-988c-bd294e1bb9aa.jpg",

      },
      {
        "Title":"Warming up to the cold: Staying active in any weather",
        "Likes":"1000k",
        "PublishedDate" : "September 11 2022",
        "BlogContent" :"Its difficult to get motivated to be active outside during cold-weather months, but it’s important to your health and can help you meet any fitness goals you’re trying to reach. There are ways to get outside and moving in cold temperatures.",
        "ImageAsset": "https://domf5oio6qrcr.cloudfront.net/medialibrary/12432/3957075c-0fd1-45e2-a39f-71d280a958d7.png",
      },
      {
       "Title": "Pizza...",
       "Likes":"1M",
       "PublishedDate" : "August 9 2020",
        "BlogContent" : "Marinara pizza is made using 100% all-vegan ingredients, combining tomato sauce with olive oil, garlic, basil and oregano on a fluffy Neapolitan base. It’s low on calories too, so you can gobble without the guilt.",
        "ImageAsset":"https://www.fashionbeans.com/wp-content/uploads/2019/05/foodtrends-12.jpg",
      },
      {
       "Title": "BBQ Dreamz...",
       "Likes":"3M",
       "PublishedDate":"October 16 2022",
        "BlogContent" : "BBQ Dreamz, which rose to fame on the BBC’s Million Pound Menu, can be found at John Lewis Oxford Street throughout the summer of 2019, while Sarap, under the guidance of chef Budgie Montoya, has recently spun its acclaimed Soho pop-up into a longer summer gig in Brixton Village. Kain tayo!",
        "ImageAsset":"https://www.fashionbeans.com/wp-content/uploads/2019/05/foodtrends-1.jpg",
      },
      {
        "Title": "Fruit and Vegetable Juice",
        "Likes":"2M",
        "PublishedDate" : "June 9 2020",
         "BlogContent" : "Fruit juice is a highly concentrated source of fruit sugar. This can raise your blood sugar quickly, and that’s why juice is not recommended for people with type 2 diabetes.",
         "ImageAsset":"https://joybauer.com/wp-content/uploads/2016/02/thumb_2021_content_big_wide-150x150.jpg",
       },
       {
        "Title": "Grilled Pineapple for Dinner and Dessert",
        "Likes":"1M",
        "PublishedDate":"December 16 2021",
         "BlogContent" : "Pineapple is one of those fabulous fruits that takes my taste buds on a tropical vacation! I can eat pineapple plain, no problem, but lately I’ve been grilling it to get that hint of smoky summer flavor and adding to sandwiches and desserts.",
         "ImageAsset":"https://food.fnr.sndimg.com/content/dam/images/food/editorial/blog/legacy/healthyeats/2009/7/pineappletempeh2_lead.jpg.rend.hgtvcom.231.174.suffix/1505155524571.jpeg",
       },
    ])
    // const pValue=useMemo(()=>({
    //   data , setData,
    //   tech , setTech,
    //   food , setFood,

    // }),[data,tech,food]);
    
  return (
     <>
     <div>
       <one.Provider value={[data , setData]} >
         { props.children }
       </one.Provider>
       {/* <one.Provider value={[tech,setTech]}>
       {value1 : [data,setData],value2 : [tech,setTech]}
         { props.children }
       </one.Provider> */}
       
     </div>
     </>
  )
}
export default Api