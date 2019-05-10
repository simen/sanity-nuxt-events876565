export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events876565-studio',
                  apiId: '8badf3f2-0fb6-474f-80ab-a73f7aa18260'
                },
                {
                  buildHookId: '5cd588ab0d84abbd9eee787f',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events876565',
                  apiId: 'd244ee93-c1d6-4c3b-aed7-0927c6a37999'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nuxt-events876565',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events876565.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
