// import { lazy } from 'react';

// project import
// import Loadable from 'components/Loadable';
// import MainLayout from 'layout/MainLayout';

import Books from '../pages/Books';
import BestSeller from '../pages/BestSeller';
import Enquiries from '../pages/Enquiries';


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <Books />,
    children: [
        {
            path: 'bestSeller',
            element: <BestSeller />
        },
        {
            path: 'enquiries',
            element: <Enquiries />
        },
    ]
};

export default MainRoutes;
