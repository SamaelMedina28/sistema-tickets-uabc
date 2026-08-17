import { Link, usePage } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid, Users, Building, Tag, Ticket, FileText } from 'lucide-react';
import SupportUnitController from '@/actions/App/Http/Controllers/SupportUnitController';
import UserController from '@/actions/App/Http/Controllers/UserController';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem, User } from '@/types';

const navItemsAdmin: NavItem[] = [
    {
        title: 'Usuarios',
        href: UserController.index(),
        icon: Users,
    },
    {
        title: 'Soportes',
        href: SupportUnitController.index(),
        icon: Building,
    }
];

const navItemsHead: NavItem[] = [
    {
        title: 'Miembros',
        href: "#",
        icon: Users,
    },
    {
        title: 'Categorias',
        href: "#",
        icon: Tag,
    }
];

const navItemsMembers: NavItem[] = [
    {
        title: 'Mis Tickets',
        href: "#",
        icon: Ticket,
    }
];

const navItemsService: NavItem[] = [
    {
        title: 'Historial',
        href: "#",
        icon: FileText,
    }
];

// Mapeo directo relacionando el nombre del rol en la base de datos con su arreglo
const navByRole: Record<string, NavItem[]> = {
    admin: navItemsAdmin,
    lider: navItemsHead,
    miembro: navItemsMembers,
    solicitante: navItemsService,
};

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    // Obtener usuario autenticado de los props de Inertia
    const { auth } = usePage<{ auth: { user: User } }>().props;
    const userRole = auth.user?.rol as keyof typeof navByRole;

    let mainNavItems = navByRole[userRole] ?? navItemsService;
    mainNavItems = [
        {
            title: 'Dashboard',
            href: dashboard(),
            icon: LayoutGrid,
        },
        ...mainNavItems
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}