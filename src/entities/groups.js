export default {
    title: 'Groups',
    name: 'groups',
    url: '/groups',
    actions: {
        list: {
            fields: [
                {name: 'name'}
            ],

            filters: [
                {
                    name: 'name1',
                    component: 'material.TextField',
                    underlineShow: true,
                    hintText: 'Search1...',
                    id: 'search',
                    open: true
                }
            ],

            hasMany: 'products'
        },
        show: {
            fields: [
                {name: 'name'},
                {
                    name: 'Products', fieldType: 'tab',
                    fields: [
                        // {name: 'products'}
                    ]
                }
            ],
            params: {
                filter: {
                    include: 'products'
                }
            },
            hasMany: 'products'
        },
        create: {
            fields: [
                {name: 'name'},
                {
                    name: 'Test', fieldType: 'tab', fields: [
                    {name: 'name1'}
                ]
                }
            ],
            url: ()=>'/groups'
        },
        edit: {
            fields: [
                {name: 'name', component: 'material.TextField'}
            ],
            initFields: [
                'name'
            ]
        },
        del: {
            url: ({id})=>'/groups/' + id
        }
    },
    // hidden: true
}