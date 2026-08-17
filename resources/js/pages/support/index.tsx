import { Head } from '@inertiajs/react';
import { index } from '@/actions/App/Http/Controllers/SupportUnitController';

export default function Index({ soportes }: { soportes: any }) {
    return (
        <>
            <Head title="Soportes" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    
                    {soportes.map((soporte: any) => (
                        <div key={soporte.id} className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <h3 className="text-xl font-bold">{soporte.name}</h3>
                            
                        </div>
                    ))}
                </div>
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
