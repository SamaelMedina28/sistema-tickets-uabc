import { Head, Link } from '@inertiajs/react';
import { Pencil, Trash, Eye } from 'lucide-react';
import { edit, index, show, destroy } from '@/actions/App/Http/Controllers/UserController';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UserFormDialog from '@/components/users/UserFormDialog';
import type { SupportUnit } from '@/types/support';
import type { User } from '@/types/user';

export default function Index({ usuarios, soportes }: { usuarios: User[], soportes: SupportUnit[] }) {

  return (
    <>
      <Head title="Usuarios" />
      <div className="flex h-full flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <Heading title="Usuarios" description="Gestión de los usuarios y miembros del soporte tecnico" />
          <UserFormDialog soportes={soportes} />
        </div>
        {/* tabla de soportes */}
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
              <TableHead>Matricula</TableHead>
              <TableHead>Unidad de soporte</TableHead>
              <TableHead className="flex items-center justify-center">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usuarios.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.rol.charAt(0).toUpperCase() + user.rol.slice(1)}</TableCell>
                <TableCell>{user.enrollment_number}</TableCell>
                <TableCell>{user.support_unit.name}</TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={show(user.id)} prefetch>
                      <Eye size={16} />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={edit(user.id)} prefetch>
                      <Pencil size={16} />
                    </Link>
                  </Button>
                  <Button variant="destructive" size="icon" asChild>
                    <Link href={destroy(user.id)} prefetch>
                      <Trash size={16} />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

Index.layout = {
  breadcrumbs: [
    {
      title: 'Soportes',
      href: index(),
    },
  ],
};
