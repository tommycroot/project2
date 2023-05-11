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

After looking around the web for APIs, we decided to use two involving words as we didn’t see any examples of these being used in previous work shown to us. Our first bit of planning was to create a wireframe using Excalidraw. We decided that we would implement the functionality before moving onto the styling and we identified that we needed to tackle retrieving the data and working out the functionality of the search bar before working on the random word generator. We also shared ideas about the added features we could add if we had enough time such as storing the user’s history locally. 

Since we weren’t taught forking until the deployment stage of this project, Tom and I spent the entirety of the coding sessions taking turns screen sharing. We would send across finished files whenever one of us had completed a section of code, so we each had the project running locally on our own machines. This helped out when we ran into issues or tricky parts of code such as the displaying of results too big to fit on one page as we could work on the problem individually. 

![2023-05-05 (15)](https://user-images.githubusercontent.com/80596226/236497663-d37adf69-b7db-4653-9956-4f2d05f53996.png)

## Build/Code Process

We began by working on the frame of the site and retrieving the data from the API. We decided to use Bootstrap to help us with our CSS stylings and overall page structure. It had recently been introduced to us in class, so it seemed like a good opportunity to test it out.  It was a fun experience figuring out how to use an API key on our own for the first time. We discovered that we needed to use the ‘X-API-Key,’ which is a custom HTTP header that contains an API key which is used for authentication when making requests to the API. ‘X-API-Key’ needed to be added to the headers of the authenticated axios instance as a key-value pair. The value of this API key is stored in the environment variable ‘REACT_APP_API_KEY’ which is set outside of the code in a configuration file. 

![2023-05-08 (5)](https://github.com/tommycroot/project2/assets/80596226/85e1cc87-b62c-4dcd-bdb9-04ad2ec55d32)
<figcaption>The App component defines an axios instance with an ‘X-Api-Key’ header for authentication which is passed down to the Home component as a prop. The component also defines a few routes using the ‘BrowserRouter’ which enables navigation within the application without the page. The ‘useState’ hook is used to define a state variable called ‘output’ and the function to update it is called ‘setOutput.’ The ‘output’ variable is passed down to the Home, Results and ResultsTwo components.</figcaption>

A must have feature for us on this project was to have a search function, so the user is able to type and retrieve the rhyming words results they requested. We used a map method and displayed them as list items. 

![2023-05-05 (19)](https://user-images.githubusercontent.com/80596226/236501888-a7294137-23f1-428d-ba29-c2a40590c15d.png)
<figcaption>The Results component receives ‘output’ as a prop which is an array of rhyming words. The ‘Link’ component from ‘react-router-dom’ is used to create links to the home page and the next page of results. The Results component checks the length of the ‘output’ array and if it is not empty displays the rhyming words in two lists with a maximum of 100 words per list. If the array has more than 200 words the component displays a link to the next page. If the ‘output’ array is empty then the component displays a message, a gif and a link to the home page (‘/’).</figcaption>

We then moved onto implementing the use of the random word generator API. This API had a slightly different end point, but we were able to link it to the handleSubmit function. In the screenshot below you can see the difference in end points and how we managed to use the data taken from the random word API and set it to the input used in our handleSubmit function. 

![2023-05-05 (20)](https://user-images.githubusercontent.com/80596226/236502670-3db7b0fd-1de3-4ecc-bd6c-177bfd58f5fa.png)
<figcaption>The async function ‘handleSubmit’ sends a GET request to the authenticated API endpoint to retrieve rhyming words for the input word and sets the state of ‘output’ to the received data. The async function ‘submitRandom’ sends a GET request to the authenticated API endpoint to retrieve a random word and sets the state of ‘input’ to the received word.</figcaption>

We also added two components returning GIFs to help with the issue of loading. We didn’t want the user to keep clicking buttons if there was a delay in retrieving the data, so we decided to implement GIFs to let the user know to wait. Without the loading GIFs, users might assume that the app is unresponsive and become frustrated. The GIFs were added to the functions handling the button events.  In the screenshot above you can see that we set the state of these loading GIFs to true before retrieving the data from our APIs, so the loading GIFs are automatically displayed before the results are even attempted to be retrieved. 

We decided to use an Eminem theme for this project because we felt like most people think about rappers when they think about rhyming. We used the famous ‘Mom’s Spaghetti’ meme from his autobiographical movie ‘8 Mile’ to help sprinkle some levity into our project. The ‘Mom’s Spaghetti’ meme is a line from the song ‘Lose Yourself’ featured in the movie. The phrase ‘Mom’s Spaghetti’ became a popular meme that represents nervousness and anxiety. The idea of the theme was a joke by me and originally a placeholder, but we started to embrace it more and more as the project went on. The styling organically became a homage to the websites of the 90s as we were building it. We experimented with different design styles but eventually decided to embrace the 90s aesthetic as Eminem first became a massive star as the decade was drawing to a close. 

## Challenges 

We encountered a few road bumps during our journey. The first major problem we met was not being able to display our results correctly. Perhaps it was the pressure of being on a tight deadline, but we initially chose to display our results inside a p tag, which delivered one enormous string. This confused us, but eventually we realised this error, corrected it so we were displaying individual words one at a time and got back on track with the project. 

![2023-05-08 (8)](https://github.com/tommycroot/project2/assets/80596226/d5064acf-f434-49cc-86a2-62750901b60c)
<figcaption>Instead of being placed in a p tag, the ‘output’ prop is mapped over to create a list of words displayed on the page. The map function creates an ‘li’ element for each word in the ‘output’ array and the ‘key’ attribute is used to uniquely identify each ‘li’ element.</figcaption>

The second issue that hampered us was not being able to set the random word to the input of the submit function. For a while, you had to press the button twice before the rhyming results of the random word were displayed. This was to do with the way in which we had ordered the setting of states within our functions. I also think it was a case of overthinking, as the actual solution was simple in the end and didn’t require as much code refactoring as we thought. 

Finally, things got a bit messy when we were attempting to split the code into components for the first time. It was a bit tricky figuring out what variables and functions had to be passed down and where for the code to work properly, but we were able to solve this with trial and error.  

One thing that we could do differently next time is to start with a more structured plan before diving into the code. This would have helped us to identify potential road bumps early on and make it easier to divide the work between us. We could also allocate more time for testing and debugging, as these are crucial stages in any development project. Additionally, we could consider using a project management tool to help us to stay organised and on track with our goals and deadlines.

## Wins 

I really enjoyed collaborating with Tom on this project and I’m really proud of how simple to read our final code turned out. We had some great ‘Eureka!’ moments on this journey together. For instance, we realised that the word results we were retrieving from the API was sometimes an extremely large list and it was very difficult trying to display them onto one page. Neither of us had very much experience with pagination and as we were pressed for time and on a tight deadline we didn’t have much time to study up on it. One major win was being able to get around this issue by creating a second results page. By targeting the indexes of the word array received from the API we were able to limit the amount of words displayed to only hundreds when we mapped through the data. We then gave the user the option of navigating to the next page and seeing more results if they desired. 

I am really pleased we managed to get the two APIs working together and getting the app completed by the deadline. I also really like the feel of the application and think it’s a fun tool if you’re aware of the joke behind the theme. 

![2023-05-05 (21)](https://user-images.githubusercontent.com/80596226/236503552-9af83bc2-ebb7-4e7f-b9a8-8ddab38b024a.png)

## Key Learnings/Takeaways

ne key takeaway from this project was the enjoyment of manipulating data from APIs. It was fascinating to see how two APIs can work together seamlessly within an application. I believe this experience will be very beneficial to me as a developer in the future, especially when working on more complex projects that require a more extensive understanding of data manipulation.

Working collaboratively with Tom was an invaluable experience that taught me a lot about collaborative problem-solving. Each of us brought a unique perspective to the table and this helped us to move forward more efficiently. This experience also taught me the importance of listening to other people’s ideas and learning how to compromise to achieve our common goals. 

From a technical perspective, I saw significant improvement in my ability to set data ‘in state’ and navigate APIs effectively. This experience helped me to solidify my understanding of React’s state management and API integration, which will be very useful in future projects.
I also learned that ‘console.log’ can be your best friend when building projects like this. It’s an essential tool for debugging problems and it really helps us to identify and fix errors quickly. Overall, this project was a valuable learning experience that gave me a lot of confidence in my abilities as a developer and taught me valuable lessons about collaboration and problem-solving.

## Bugs 

The only bug still visible in our app is the search bar shrinks a tiny bit when the user submits their request. This seemed to be fixed before the deadline, but somehow it has re-emerged. This might be because we were sending each other code back and forth and somehow the code for this particular bug fix got left behind. We also ran out of time before the deadline to properly finish off our error handling, however the app works totally fine. 

## Future Improvements

We had the idea of implementing ChatGPT into this project if we had time. The idea was to have an option for the user to retrieve a poem written by the AI involving the word that they had submitted. Another feature we wanted to include was storing the history of the user’s searches so they could refer back to them if they needed to. Finally, going back and fixing the bugs mentioned above needs to be done post course as well as improved mobile styling.
