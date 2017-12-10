# Installation
**In project directory**  
If Yarn isn't installed: `brew install yarn`  
Then: `yarn`

# Usage
**Development**  
`yarn run dev`

**Build**  
`yarn run build`

**Production**  
`yarn start`

# Deployment
1) Optionally remove `.html` file extensions in links to hide in URL bar
2) On your server install forever globally `sudo npm install forever -g`
3) On your server, in your project directory run `forever start -c "npm start" ./`

**Debug deployment**  
To check if `forever` processes are running run `forever list`  
To stop `forever` processes run `forever stop`

**Digital Ocean deployment**  
To deploy to digital ocean there is 2 files that will help in this repo.  
- `README-DO.md`  
is a list of commands to run on a fresh Linux install of a Digital Ocean droplet  
- `README-nginx.md`  
is a sample Nginx config with an installation guide

### Dev Deployment
Install **Now CLI** for easy demo  
`sudo npm install -g now`  
`now`

# Working With the Files

### Adding HTML Pages
1) Create html page in `/app`
2) Add HTMLWebpackPlugin variable under the `HTML Pages` section in `webpack.config.js`
3) Add variable in list of `plugins` at the bottom of `webpack.config.js`
4) Add new route in `server.js` (for production)

### Adding React Components to HTML
`index.js` is the file to `import` and `render` all ReactJS components to their `#div`s

### Editing Metadata & Analytics
Metadata component is in `app/js/components/HeadInfo.js`  
Editable information is located in `app/js/index.js`  
  
To add different metadata to another page duplicate `Page Header Info` section in `index.js` file - then change the id selector in both `index.js` and `HTML` page template  
  
To add analytics edit the tracking code under `Analytics Info` inside `index.js`

### Sitemap Generator
A sitemap is automatically generated in the project directory when the production build is run with `yarn start`  
  
If you want a `robots.txt` file generated along with `sitemap.xml` file change `sitemap.XMLtoFile();` to `sitemap.toFile();` inside the `server.js` file.  
  
If you would like to make changes to the `sitemap.xml` or `robots.txt` see additional config options [here](https://github.com/hex7c0/express-sitemap)

### 404 Not Found Page
The `404.html` file will not display in development (`yarn run dev`) because it's routed via `server.js` with Express. In order to view the changes you make to the `404.html` template, you'll need build and run in production - then navigate to a broken link.