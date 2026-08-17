import { Head, Link } from '@inertiajs/react';
import { Pencil } from 'lucide-react';
import { create, edit, index } from '@/actions/App/Http/Controllers/SupportUnitController';
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
import type { SupportUnit } from '@/types/support';

export default function Index({ soportes }: { soportes: SupportUnit[] }) {
    console.log(soportes);

    return (
        <>
            <Head title="Soportes" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <div className="flex items-center justify-between">
                    <Heading title="Soportes" description="Gestión de las unidades de soporte técnico" />
                    <Button asChild>
                        <Link href={create()} prefetch>
                            Nuevo
                        </Link>
                    </Button>
                </div>
                {/* tabla de soportes */}
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-25">ID</TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Ubicación</TableHead>
                            <TableHead>Líder</TableHead>
                            <TableHead>Miembros</TableHead>
                            <TableHead>Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {soportes.map((soporte) => (
                            <TableRow key={soporte.id}>
                                <TableCell className="font-medium">{soporte.id}</TableCell>
                                <TableCell>{soporte.name}</TableCell>
                                <TableCell>{soporte.location}</TableCell>
                                <TableCell>{soporte.heads.length}</TableCell>
                                <TableCell>{soporte.members.length}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href={edit(soporte.id)} prefetch>
                                            <Pencil size={16} />
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
