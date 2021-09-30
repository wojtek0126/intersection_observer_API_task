# intersection_observer_API_task

nice recruitment task let's go!
The requirements: 
- There is an HTML document with an article extracted from Wikipedia: https://gist.github.com/warpech/f607480c6a0f14452d8bde3cb1f0cd84
- Your task is to add a graphical effect to this document while scrolling, using Intersection Observer API. For example, change the background color when the user scrolls between the sections of the article.
- Deliver the result as a GitHub repo or in a playground like JSFiddle, CodeSandbox, etc.
- Don't overdo it. I assume that the task will not take more than 2 hours.
- As part of your response, describe your solution in written form by email in less than 10 sentences.
- We will validate the correct usage of a web API (Intersection Observer in this case), the overall code quality and your ability to communicate the solution.




Solution details: I have divided the content into intersections using <section> tags. I have deducted that each intersection was starting with <h2> tag. Content from-to each <h2> tag was injected into these sections. I have defined styles for <section> under existing styles in <head> of index.html. I have created observer.js file and added <script src="observer.js"></script> on the bottom of <body>. Both styles and observer.js working properly upon initial testing. I have created basic observer script that is changing background color of each intersection upon scrolling, and resets to initial color on the way out, so scrolling back up resets the effect. Added some transition effect that was costing maybe one minute extra, just to make color switch look nicer. MAIN ISSUE to solve with my code was the fact that background color transition was starting automatically on first element upon load of page, and it was breaking the requirement number 2: "..change the background color when the user scrolls between the sections of the article." as it was changing color before any action by user. Solved it by wrapping observer function and element to observe into window.onscroll function. From now on, observer callback initiates only after user scrolls the content down. 
Action time: Whole task, including writing this report took few hours, including two breaks. Initial part of this task took around an hour of work. Major of remaining work time was spent upon finding suitable solution for the issue with auto starting of the observer function on page load. 
Extra info: There was no information about margins between intersections, currently there are divided by <section> automatic margin.





