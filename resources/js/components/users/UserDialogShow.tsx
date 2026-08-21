import { Building2, Eye, IdCard, Mail, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import type { User } from '@/types/user';

type Soporte = { id: number; name: string };

export default function UserDialogShow({ soportes, user }: { soportes: Soporte[]; user: User }) {
    const [open, setOpen] = useState(false);

    const supportUnitName =
        user.support_unit?.name ||
        soportes.find((s) => s.id === user.support_unit?.id)?.name ||
        'Sin unidad asignada';

    // Obtener iniciales para el Avatar
    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

    const isLider = user.rol?.toLowerCase() === 'lider';

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader className="sr-only">
                    <DialogTitle>Perfil de {user.name}</DialogTitle>
                </DialogHeader>

                {/* Encabezado con Avatar e información principal */}
                <div className="flex items-center gap-4 border-b pb-4 pt-2">
                    <Avatar className="h-14 w-14 border">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-none">{user.name}</h3>
                        <div className="flex items-center gap-2 pt-1">
                            <Badge variant={isLider ? 'default' : 'secondary'} className="capitalize">
                                <ShieldCheck className="mr-1 h-3 w-3" />
                                {isLider ? 'Líder' : 'Miembro'}
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Lista de detalles del usuario */}
                <div className="grid gap-4 py-2 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <IdCard className="h-4 w-4 shrink-0 text-foreground/70" />
                        <div className="flex-1">
                            <p className="text-xs font-medium text-muted-foreground">Matrícula</p>
                            <p className="font-mono text-foreground font-medium">{user.enrollment_number || 'N/A'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="h-4 w-4 shrink-0 text-foreground/70" />
                        <div className="flex-1">
                            <p className="text-xs font-medium text-muted-foreground">Correo Institucional</p>
                            <p className="text-foreground font-medium">{user.email}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Building2 className="h-4 w-4 shrink-0 text-foreground/70" />
                        <div className="flex-1">
                            <p className="text-xs font-medium text-muted-foreground">Unidad de Soporte</p>
                            <p className="text-foreground font-medium">{supportUnitName}</p>
                        </div>
                    </div>
                </div>

                <DialogFooter className="pt-2">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Cerrar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}