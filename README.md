This is a [Next.js](https://nextjs.org/) template using the `app` directory with [Tina CMS](https://tina.io/). 

## Getting Started

1. Set environment variables using `.env`, `.env.local` or any other way you wish. Include your cloudinary cloud name, apikey and api secret. Use the `.env.example` file to guide you on what to add. 

2. Install Dependencies:

```bash
npm install
# or
yarn
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the results.

You can start adding content by navigating to [/admin](http://localhost:3000/admin).

## Project Structure

This template uses the src directory and the app directory (beta). Please refer to the [Next.js `appDir`](https://beta.nextjs.org/docs) docs for more information on how to develop your project.

The CMS configuration is found at `.tina/config.ts`. This directory is modular to help better organise the project so you do not have to repeat code (DRY). It provides a base for you to start, including:
- Blog schema with a title, excerpt, date, tags, image, rich text content. Content is saved as MDX.
- Pages schema with a page name, page information (title and description), hero section and page sections. Saved as JSON.
- Tags schema with a tagname. The blog references this collection. Saved as JSON.
- Menus schema (This acts as a data file so there is one file in the collection which cannot be created or deleted), it includes a Main Menu list and call to action object.
- Site Configuration schema with logos, meta data, developer settings and more. Saved as JSON. This also acts as a data file like the Menus schema.

Note that you can add custom MDX components into the rich text fields. You can also add custom React components to any field. For more information please follow the [Tina CMS docs](https://tina.io/docs/extending-tina/custom-field-components/).

This template also provides some simple utility functions such as a `deepMerge` function to allow you to create overridable CMS field functions. It also has other fields such as URL fields that can be reused.

## Learn More

For any more information, please refer to the [Tina CMS Docs](https://tina.io/docs) and the [Next.js Beta Docs](https://beta.nextjs.org/docs). 

## Issues

Tina CMS is still reasonably new so there are still some features missing. Please keep up to date with Tina CMS releases and contribute if you can. If there is anything that we can do to improve this boilerplate please let me know.