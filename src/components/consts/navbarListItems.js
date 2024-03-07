import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import FunctionsIcon from '@mui/icons-material/Functions';
import SchoolIcon from '@mui/icons-material/School';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

export const mainNavbarItems = [
    {
        id:0,
        icon: <PeopleIcon />,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id:1,
        icon: <StorageIcon />,
        label: 'Database',
        route: 'database',
    },
    {
        id:2,
        icon: <SdStorageIcon />,
        label: 'Storage',
        route: 'storage',
    },
    {
        id:3,
        icon: <FunctionsIcon />,
        label: 'Functions',
        route: 'functions',
    },
    {
        id:4,
        icon: <SchoolIcon />,
        label: 'Machine learning',
        route: 'machine-learning',
    },
    {
        id:5,
        icon: <DevicesOtherIcon />,
        label: 'Others',
        route: 'others',
    },
]