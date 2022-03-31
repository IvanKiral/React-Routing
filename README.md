# React Multilanguage Routing

This project is an example how to use routing with translations with react.

### Used packages

- **React Router**
  - Package for dealing with routing in react 
  - installation ```npm install react-router-dom@6```
- **React Intl**
  - package provide api to translate texts and format dates 
  - installation ```npm i -S react-intl```
- **React Cookie**
  - Package for dealing with cookies. Last used language is stored in cookies.
  - installation ```npm install react-cookie```
  
### Project structure
Project is divide into following folders:
- **components** - contains components mostly used for translations
  - `LanguageSwitcher` - component switches languages and contains function to adjust pathname
  - `LocalizedIntl` - extract language from URL and load intl based on it
  - `LocalizedLanguage` - component to translate and print Not Found message
  - `DefaultNavigate` - component that navigates from base url(e.g localhost/) into localized url (localhost/en)
  - `NotFound` - component creates intl and takes language from cookie for not found component
- **Localization** - contains json files with language mutations - they must be in the format key:value ( should not have nested objects )
- **utils** - create of the Kontent delivery client object
- **views**
  - `About` - about us page
  - `Home` - home page prints datetime
  - `Movies` - prints list of movies fetched from  Kontent
  - `Movie` - display fetched data from Kontent
  

`index.tsx` contains routing and cookies setup and contains top level routing - routes to languages mutation, 404
`app.tsx` renders language switcher navigation menu and contains routes between views


#### Routing tips:
- in V6 now routes do not depend on position, the route is picked by best match
- language is stored in cookies in case url is changed to unknown language

useful link : https://reactrouter.com/docs/en/v6/upgrading/v5


## How to run
1. First install packages with `npm install`
2. Run the project with ` npm run start`
