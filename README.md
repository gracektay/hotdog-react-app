# Code Day!


This project uses React. Run the following commands in Terminal to get things running smoothly!

```
npm install

yarn start
```

Thought Process:
  > I noticed that there's a lot of repeated elements on this page, so a component architecure with React made sense for this project. Plus it seemed like a fun challenge!
  - Step 1 - Compile all the necessary assets into appropriate folders, such as photos and fonts.
  - Step 2 - Identify the major components and subcomponents and create appropriate directories and files accordingly.
  - Step 3 - Design Footer *SOLVED --> PROBLEM: No functionality added yet*
  - Step 4 - Designed Image Grid. No notes on mobile, so I've adjusted the images to scale as page size goes down *SOLVED changed grid structure and styling with % width. Cannot Add Proxima, cost $29. Updated with media queries to adjust its height responsively. -->  PROBLEM: Change instagram font to Proxima. See if I can eliminate small white spaces* 
  - Step 5 - Designed Menu Component. Added a hover style element with a bottom border "action blue", using the same button color that's in intro for consistency in action colors. On medium devices and below, I've deactivated hover and stacked the links to reduce mobile issues.
  - Step 6 - Designed Intro Banner component. Decided to set root font size as 16px. 12 on medium and below devices, and did calculations to allow em to be used for scalability.
  - Step 7 - Designed main tile content section that alternates based on an inputted index. The content row uses a module operator to identify which order to show the content. Since there isn't a mobile view, I've made it respond simply. *SOLVED with order-->  PROBLEM: Need to fix the mobile view since it alternates if the text is above or below the image*