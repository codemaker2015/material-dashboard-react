# Material Dashboard React

![Product Gif](src/assets/github/md-react.gif)

Material Dashboard React is a free Material-UI Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts through an easy to use and beautiful set of components. Material Dashboard React was built over the popular Material-UI framework.

Material Dashboard React makes use of light, surface and movement. The general layout resembles sheets of paper following multiple different layers, so that the depth and order is obvious. The navigation stays mainly on the left sidebar and the content is on the right inside the main panel.

Material Dashboard React comes with 5 color filter choices for both the sidebar and the card headers (blue, green, orange, red and purple) and an option to have a background image on the sidebar.

Material Dashboard React was created using [create-react-app](https://github.com/facebook/create-react-app) and it uses a framework built by our friend [Olivier - Material-UI v3.1.0](https://github.com/mui-org/material-ui), who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to his team for the effort and forward thinking they put into it.

Special thanks go to:
+ [React-chartist](https://github.com/fraserxu/react-chartist) for the wonderful charts.

We are very excited to share this dashboard with you and we look forward to hearing your feedback!

You can find the Github Repo here.

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)


## Versions

[<img src="src/assets/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard)
[<img src="src/assets/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-react)
[<img src="src/assets/github/vuejs.png" width="60" height="60" />](https://www.creative-tim.com/product/vue-material-dashboard)
[<img src="src/assets/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/material-dashboard-angular2)


| HTML | React | Vue | Angular |
| --- | --- | --- | --- |
| [![Material Dashboard HTML](src/assets/github/opt_md_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard) | [![Material Dashboard React](src/assets/github/opt_mdr_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard-react) | [![Vue Material Dashboard ](src/assets/github/opt_md_vue_thumbnail.jpg)](https://www.creative-tim.com/product/vue-material-dashboard) | [![Material Dashboard Angular](src/assets/github/opt_md_angular_thumbnail.jpg)](https://www.creative-tim.com/product/material-dashboard-angular2)

## Demo

| Dashboard | User Profile | Tables | Maps | Notification |
| --- | --- | --- | --- | --- |
| [![Start page](src/assets/github/dashboard.png)](https://demos.creative-tim.com/material-dashboard-react/#/dashboard) | [![User profile page](src/assets/github/user_profile.png)](https://demos.creative-tim.com/material-dashboard-react/#/user) | [![Tables page ](src/assets/github/tables.png)](https://demos.creative-tim.com/material-dashboard-react/#/table) | [![Maps Page](src/assets/github/maps.png)](https://demos.creative-tim.com/material-dashboard-react/#/maps) | [![Notification page](src/assets/github/notification.png)](https://demos.creative-tim.com/material-dashboard-react/#/notifications)

[View More](https://demos.creative-tim.com/material-dashboard-react/#/dashboard).


## Quick start

Quick start options:

- `npm i material-dashboard-react`
- Clone the repo: `git clone https://github.com/codemaker2015/material-dashboard-react.git`.
- [Download from Github](https://github.com/codemaker2015/material-dashboard-react/archive/main.zip).
- [Download from Admin Dashboard](https://www.creative-tim.com/product/material-dashboard-react).


## Documentation
The documentation for the Material Dashboard React is hosted at our [website](https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial).


## File Structure

Within the download you'll find the following directories and files:

```
material-dashboard-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── bower.json
├── gulpfile.js
├── jsconfig.json
├── package.json
├── documentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   │   └── faces
│   │   └── js
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   │   └── material-dashboard-react.css
    │   ├── github
    │   │   ├── md-react.gif
    │   │   └── react.svg
    │   ├── img
    │   │   └── faces
    │   └── jss
    │       ├── material-dashboard-react
    │       │   ├── components
    │       │   ├── layouts
    │       │   └── views
    │       └── material-dashboard-react.js
    ├── components
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardAvatar.js
    │   │   ├── CardBody.js
    │   │   ├── CardFooter.js
    │   │   ├── CardHeader.js
    │   │   └── CardIcon.js
    │   ├── CustomButtons
    │   │   └── Button.js
    │   ├── CustomInput
    │   │   └── CustomInput.js
    │   ├── CustomTabs
    │   │   └── CustomTabs.js
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Grid
    │   │   ├── GridContainer.js
    │   │   └── GridItem.js
    │   ├── Navbars
    │   │   ├── AdminNavbarLinks.js
    │   │   ├── Navbar.js
    │   │   └── RTLNavbarLinks.js
    │   ├── Sidebar
    │   │   └── Sidebar.js
    │   ├── Snackbar
    │   │   ├── Snackbar.js
    │   │   └── SnackbarContent.js
    │   ├── Table
    │   │   └── Table.js
    │   ├── Tasks
    │   │   └── Tasks.js
    │   └── Typography
    │       ├── Danger.js
    │       ├── Info.js
    │       ├── Muted.js
    │       ├── Primary.js
    │       ├── Quote.js
    │       ├── Success.js
    │       └── Warning.js
    ├── layouts
    │   ├── Admin.js
    │   └── RTL.js
    ├── variables
    │   ├── charts.js
    │   └── general.js
    └── views
        ├── Dashboard
        │   └── Dashboard.js
        ├── Icons
        │   └── Icons.js
        ├── Maps
        │   └── Maps.js
        ├── Notifications
        │   └── Notifications.js
        ├── RTLPage
        │   └── RTLPage.js
        ├── TableList
        │   └── TableList.js
        ├── Typography
        │   └── Typography.js
        ├── UpgradeToPro
        │   └── UpgradeToPro.js
        └── UserProfile
            └── UserProfile.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="src/assets/github/chrome.png" width="64" height="64"> <img src="src/assets/github/firefox.png" width="64" height="64"> <img src="src/assets/github/edge.png" width="64" height="64"> <img src="src/assets/github/safari.png" width="64" height="64"> <img src="src/assets/github/opera.png" width="64" height="64">