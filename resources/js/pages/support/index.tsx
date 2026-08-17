import { Link, Head } from '@inertiajs/react';
import { index, edit } from '@/actions/App/Http/Controllers/SupportUnitController';
import Heading from '@/components/heading';

export default function Index({ soportes }: { soportes: any }) {
    return (
        <>
            <Head title="Soportes" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <Heading title="Soportes" description="Gestión de las unidades de soporte técnico" />
                {/* tabla de soportes */}
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {soportes.map((soporte: any) => (
                            <tr key={soporte.id}>
                                <td>{soporte.id}</td>
                                <td>{soporte.name}</td>
                                <td>
                                    <Link href={edit(soporte.id)}>
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
