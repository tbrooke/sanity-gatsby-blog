export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce21044d93aa77cc6687a14',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7cs5nrte',
                  apiId: '75f5f375-2b64-4b48-bb83-1c5e5f8bc8d3'
                },
                {
                  buildHookId: '5ce21045e40cf192e3be152e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-38eo423u',
                  apiId: 'da61e5a3-830b-4ad6-b2b5-fd7290e4e9dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbrooke/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-38eo423u.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
