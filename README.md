# Netflix-GPT

-   Create React App
-   TailwindCSS Setup
-   Header
-   Routing of App
-   Login Form
-   Sign Up Form (Use Formik For Very large forms)
-   Form Validation
-   useRef Hook
-   Google Firebase [Authentication, Hosting, Backend of our App].
    -   Firebase Setup
    -   Hosting our app to production: [https://netflixgpt-f63bd.web.app/]
    -   Create SignUp User Account
    -   Implement SignIn User API.
-   Store User into Redux Store
    -   Created Our User Store with userSlice.
-   Implemented SignOut
-   Change Header: Photo
-   Update Profile API Call
-   BugFix: If user is not login can access browse page and vice versa.
-   BugFix: Header Login/Logout button fixed.
-   Hygiene Practice: Unsubscribed to the onAuthStateChange Callback.
-   Hygiene Practice: Add Hardcoded values to constants.js
-   Register TMDB API.
-   GET data from TMDB (NOW PLAYING MOVIES LIST API).
-   Custom Hook for NowPlayingMovies.
-   Created a MovieSlice.
-   Update Store and movie Data.
-   Planning For MainContainer and Secondary Container.
-   Fetch Data for Trailer Video.
-   Update Store with Trailer Video.
-   Embedded the Youtube Video and make it auto-play, mute and loop.
-   Tailwind Classes for MainContainer.
-   Build Secondary Component.
-   Build Movie Card.
-   Build Movie Lists.
-   TMDB Image CDN URL.
-   Beautify Browser Page with Tailwind CSS.
-   Custom Scroll Feature in Movies Lists (index.css).
-   Custom Hooks For Popular, Trending, Upcoming Movies.
-   GPT Search Feature.
-   Toggling Button For GPT Feature.
-   Created a slice for GPT Feature in Redux.
-   Build GPT Search Bar
-   (Bonus Feature) Multi-Language Page.
-   (Bonus Feature) Header Drop-Down For Language Selector.
-   (Bonus Feature) ConfigSlice for lang in redux store.
-   Integrate GPT APIs.
-   .env file for GPT Key.
-   Install OpenAPI packages.
-   Initialize open api in our system (Check Utils).
-   Generated Queries on GPT Search Bar.
-   PROB: Billing Cycle Needed for using GPT API. (Fixed by paying $5)
-   Fetched Movie from GPT and Fetch corresponding data from TMDB.
-   Resolved Promise Array obtained by TMDB API.
-   Redux Slice for GPT MOVIES and Add Data in redux.
-   Used MovieList Component to display movies suggested by GPT.
-   Secured GPT KEY and TMDB KEY in .env file (Mandatory to put "REACT_APP_KEY_NAME" in .env file).

## Features

-   Login/Sign Up
    -   Sign In/ Sign Up Form
    -   Redirect to Browser Page
-   Browser (After Authentication)
    -   Header
    -   Main Movie
        -   Trailer in Background
        -   Title & Description
        -   Movie Suggestions
            -   MovieLists X N
-   NetflixGPT
    -   Search Bar
    -   Movie Suggestions.

## Access TMDB (THE MOVIE DB)

-   Login in TMDB.
-   GO TO edit Profile.
-   GO TO API SECTION.
-   Register APP.
-   API read/access token and API key.

## OPEN AI KEY

-   Use platform.openai.com
-   Generate API Key(Vulnerable)
-   Hided it in .env file.
-   PROBLEM: BILLING CYCLE NEEDED.
-   FIXED: Payed $5 for API KEY.
