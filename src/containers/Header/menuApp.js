export const adminMenu = [
    { //Quản lý người dùng
        name: 'menu.admin.manage-user', menus: [
            // {
            //     name: 'menu.admin.crud',
            //     link: '/system/user-manage'
            // },
            {
                name:"Quản lí học sinh", //'menu.admin.crud-redux',
                link: '/system/user-redux'
            },
            {
                name:"Quản lí giáo viên",// 'menu.admin.manage-doctor',
                link: '/system/manage-teacher'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            // {
            //     name: 'menu.admin.manage-admin',
            //     link: '/system/manage-admin'
            // },

            { //Quản lý lịch trình khám bệnh
                name: "Quản lí nhân viên",//'menu.doctor.manage-schedule',
                link: '/teacher/manage-staff'
            },
        ]
    },

    { //Quản lý khóa học
        name: 'Quản lý khóa học',
        menus: [
            {
                name: 'Quản lý khóa học',
                link:  '/teacher/manage-course'//'/system/manage-clinic'
            }
        ]
    },
    // { //Quản lý phòng khám
    //     name: 'menu.admin.clinic',
    //     menus: [
    //         {
    //             name: 'menu.admin.manage-clinic',
    //             link: '/system/manage-clinic'
    //         }
    //     ]
    // },
    // { //Quản lý chuyên khoa
    //     name: 'menu.admin.specialty',
    //     menus: [
    //         {
    //             name: 'menu.admin.manage-specialty',
    //             link: '/system/manage-specialty'
    //         }
    //     ]
    // },
    // { //Quản lý cẩm nang
    //     name: 'menu.admin.handbook',
    //     menus: [
    //         {
    //             name: 'menu.admin.manage-handbook',
    //             link: '/system/manage-handbook'
    //         }
    //     ]
    // },
];

export const teacherMenu = [
    // { //Quản lý người dùng
    //     name: "Quản lí người dùng",//'menu.admin.manage-user',
    //     menus: [
    //         // { //Quản lý lịch trình khám bệnh
    //         //     name: 'menu.doctor.manage-schedule',
    //         //     link: '/doctor/manage-schedule'
    //         // },
    //         { //Quản lý bệnh nhân khám bệnh
    //             name: "Quản lí Học sinh",//'menu.doctor.manage-patient',
    //             link: '/doctor/manage-patient'
    //         },
    //     ]
    // },
    {
        name:" Quản lí lớp học",
        menus:[
            { //Quản lý bệnh nhân khám bệnh
                name: "Quản lí Lớp học",//'menu.doctor.manage-patient',
                link: '/teacher/manage-class'
            },
            {
                name:"Quản lí hs",
                link:'/teacher/manage-class-student'
            }
        ]
    }
];