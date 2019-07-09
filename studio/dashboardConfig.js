export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d23f8c7331a31b8de0bd299',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o8higcuu',
                  apiId: 'fe8526ea-fe02-42ab-8a09-f89ce2fc70a3'
                },
                {
                  buildHookId: '5d23f8c7eb7037cc219050d9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dy25iiip',
                  apiId: '348c598d-0af2-421d-b07c-c76bd83cbde3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Freytag/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dy25iiip.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
