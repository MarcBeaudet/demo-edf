<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Demo EDF
</h1>

## Quick start

    A live example of this project is available at: [demo-edf.surge.sh](https://www.demo-edf.surge.sh)

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using the this starter
    gatsby new demo-edf https://github.com/MarcBeaudet/demo-edf
    ```

1.  **Start your server.**

    We will use a REST API to provide data for our Gastby site.

    More informations about endpoints used for this project can be found in the `gatsby-config.js` file at `graphql-source-apiserver`

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd demo-edf/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data.

    Open the `demo-edf` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1.  **Build and deploy your site using surge.sh**

    ```shell
    # build the website
    (./demo-edf): gatsby build

    # install surge.sh globally
    npm install --global surge

    #deploy your site
    (./demo-edf): surge public/
    

