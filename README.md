# Storage Tracker
### Current Version 1.0
A personal portfolio project and personal utility application

## Installation and Set Up
Users will need to have PostgreSQL set up to use this application locally.

After pulling the latest version, run the  `NPM Install` command to install all required packages.

run the command `npm run Init` to created the required storagetracker database in PostgreSQL

**Optional:** Users can run the `npm run seed` command to populate the database with demo data.

To run the application locally, run the `npm run dev` command and navigate to `localhost:8000`

## Current Features 
At current Version 1.0 users can
- Create Locations, Containers, and Contents
- Edit the names for Locations, Containers, and Contents.
- Delete Locations, Containers, and Contents.

## Terminology Used
**Location:** Larger spaces where you store your belongings; i.e. Rental Unit, Garage, Basement, etc...

**Container:** The boxes and other items you used to store your belongins; i.e. Cardboard Box, Safe Box, Plastic Bins, etc...

**Content:** The actual items being stored.


## RoadMap
### Iterartion 1 .5
- Home page
	- Show icon indicating what type of building the Location is
- Location page
	- Display name of current Location being viewed
    - Display Fill Percentage for each Container
    - Add drop down to select predefined Container's fill state
		- 100%, 75%, 50%, 25%, 0%
- Container Page
    - Display name of current Container being viewed
	- display thumbnail on tile

### Iteration 2
- Home page
	- Instead of simple buttons, big icons of buildings next to each other, give idea of a neighborhood
- Location page
- Container Page
	- User upload 1 image per item
	- Hovering over thumbnail displays larger image

### Iteration 3
- Home Page
- Location Page
	- grid of boxes to represent containers
		- brown box with name of box on white sticker like frame
		- box name in handwritten style font
- Container Page
	- Carousel of all Content images in Container

### Iteration 4
- Desktop view to open page next to selection (i.e. Location to Container)
	- Visual breadcrumb concept
	- Single page app display

## Credits and Packages Used
### Styling and Components
Styling, fonts, and icons from [Material UI](https://mui.com/).
### NPM Packages
- React
    - React-Dom
    - React-Redux
    - React-Router
    - React-Router-Dom
- Vite
    - Vite-Express
- PostgreSQL
- Express
- Axios
- Lodash
- Morgan
- Nodemon
- Redux
- Sequelize