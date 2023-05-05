# Project 2: Mom's Spaghetti

## Description 

This was a coding challenge in which we worked in pairs to build a React App which used a public API. We had a day and a half to complete this challenge. My partner, Tom Clegg and I chose to create a rhyming dictionary that included a random word generator in case the user was lacking in inspiration. 

## Deployment Link

The app is deployed [here](https://momsspaghetti.netlify.app/)

![2023-05-05 (13)](https://user-images.githubusercontent.com/80596226/236493381-12d2fd69-9e21-4739-b807-c87e41fb4616.png)

## Getting Started/Code Installaton

Use the clone button to download the source code and use npm run start or npm run dev to start the development server. To prevent the failed-to-compile issue for linter errors like no-unused-vars, rename the .env.example to .env and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile.

## Timeframe & Working Team (Solo/Pair/Group)

We were given a day and a half and worked in pairs. My partner for this project was Tom Clegg.

## Technologies Used


```
React
JSX
CSS
Axios
React-Router-Dom
Git
GitHub
Excalidraw
Bootstrap 
```

## Brief

Our second project required us to build a React application that consumed a public API. It had to include several components, be deployed online via Netlify and have a git repository hosted on GitHub. 

## Planning

After looking around the web for APIs, we decided to use two involving words as we didn’t see any examples of these being used in previous work shown to us. Our first bit of planning was to create a wireframe using Excalidraw. We identified that we first needed to tackle retrieving the data and working out the functionality of the search bar before working on the random word generator. We also shared ideas about the added features we could add if we had enough time such as storing the user’s history locally. 

![2023-05-05 (15)](https://user-images.githubusercontent.com/80596226/236497663-d37adf69-b7db-4653-9956-4f2d05f53996.png)

## Build/Code Process

My teammate and I decided that we would code together, as it was a relatively small project and it seemed to work really well.

We began by working on the frame of the site and retrieving the data from the API. We decided to use Bootstrap to help us with our CSS stylings and overall page structure. It had recently been introduced to us in class, so it seemed like a good opportunity to test it out.  It was a fun experience figuring out how to use an API key on our own for the first time.

![2023-05-05 (18)](https://user-images.githubusercontent.com/80596226/236501278-e6a14f5d-2cf9-4482-a48b-0339a1a51d37.png)

A must have feature for us on this project was to have a search function, so the user is able to type and retrieve the rhyming words results they are after. We used a map method and displayed them as list items. 

![2023-05-05 (19)](https://user-images.githubusercontent.com/80596226/236501888-a7294137-23f1-428d-ba29-c2a40590c15d.png)

We then moved onto implementing the use of the random word generator API. This API had a slightly different end point, but we were able to link it to the handleSubmit function. In the screenshot below you can see the difference in end points and how we managed to use the data taken from the random word API and set it to the input used in our handleSubmit function. 

![2023-05-05 (20)](https://user-images.githubusercontent.com/80596226/236502670-3db7b0fd-1de3-4ecc-bd6c-177bfd58f5fa.png)

Finally we split our App into components. We created a component for the results page (once a user has submitted their request for rhymes) and one for the Home page that contained the search bar and our random word generator. 

We also added two components to help with the issue of loading. We didn’t want the user to keep clicking buttons if there was a delay in retrieving the data, so we decided to implement Gifs to let the user know to wait. The components were added to the functions handling the button events.  In the screenshot above you can see that we set the state of these loading Gifs to true before getting the data from our APIs, so the loading is displayed before the results. 

We decided to use an Eminem theme for this project because we felt like most people think about rappers when they think about rhyming. We used the famous ‘Mom’s Spaghetti’ meme from his autobiographical movie ‘8 Mile’ to help sprinkle some levity into our project. The styling organically became a homage to the websites of the 90s as we were building it. 

## Challenges 

We encountered a few road bumps during our journey. The first major problem we met was not being able to display our results correctly. Perhaps it was the pressure of being on a tight deadline, but we initially chose to display our results inside a p tag, which delivered one enormous string. This confused us, but eventually we realised this error, corrected it so we were displaying individual words one at a time and got back on track with the project. 

The second issue that hampered us was not being able to set the random word to the input of the submit function. For a while, you had to press the button twice before the rhyming results of the random word were displayed. This was to do with the way in which we had ordered the setting of states within our functions. I also think it was a case of overthinking, as the actual solution was simple in the end and didn’t require as much code as we thought. 

Finally, things got a bit messy when we were attempting to split the code into components for the first time. It was a bit tricky figuring out what variables and functions had to be passed down and where for the code to work properly, but we were able to solve this with trial and error.

## Wins 

I really enjoyed collaborating with Tom on this project and I’m really proud of how simple to read our final code turned out. We had some great ‘Eureka!’ moments on this journey together. For instance, we realised that the word results we were retrieving from the API was sometimes an extremely large list and it was very difficult trying to display them onto one page. Neither of us had very much experience with pagination and as we were pressed for time and on a tight deadline we didn’t have much time to study up on it. One major win was being able to get around this issue by creating a second results page. By targeting the indexes of the word array received from the API we were able to limit the amount of words displayed to only hundreds when we mapped through the data. We then gave the user the option of navigating to the next page and seeing more results if they desired. 

I am really pleased we managed to get the two APIs working together and getting the app completed by the deadline. I also really like the feel of the application and think it’s a fun tool if you’re aware of the joke behind the theme. 

![2023-05-05 (21)](https://user-images.githubusercontent.com/80596226/236503552-9af83bc2-ebb7-4e7f-b9a8-8ddab38b024a.png)

## Key Learnings/Takeaways

One key takeaway from this project is how fun it can be to manipulate data from APIs. I really thought it was cool how we were able to get two APIs working together in our app. I found it an invaluable experience working with Tom and learning how others approach writing code. On the technical side, I saw a massive improvement in how I understand setting data ‘in state’ and navigating APIs. I’ve also recognised that console.log can be your best friend when you are building projects like this and for debugging. 

## Bugs 

The only bug still visible in our app is the search bar shrinks a tiny bit when the user submits their request. This seemed to be fixed before the deadline, but somehow it has re-emerged. This might be because we were sending each other code back and forth and somehow the code for this particular bug fix got left behind. We also ran out of time before the deadline to properly finish off our error handling, however the app works totally fine. 

## Future Improvements

We had the idea of implementing ChatGPT into this project if we had time. The idea was to have an option for the user to retrieve a poem written by the AI involving the word that they had submitted. Another feature we wanted to include was storing the history of the user’s searches so they could refer back to them if they needed to. Finally, going back and fixing the bugs mentioned above will definitely be done post course.
