import { Form, Link } from '@inertiajs/react';
import { LoaderCircle, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { User } from '@/types/user';
import { update } from '@/routes/usuarios';

type Soporte = { id: number; name: string };

export default function UserFormDialogEdit({ soportes, user }: { soportes: Soporte[], user: User }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
            <Pencil size={16} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Editar usuario</DialogTitle>
          <DialogDescription>
            Completa los datos para editar el usuario.
          </DialogDescription>
        </DialogHeader>

        <Form action={update(user.id)} className="space-y-6">
          {({ processing, errors }) => (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="enrollment_number">Matrícula</Label>
                  <Input
                    id="enrollment_number"
                    name="enrollment_number"
                    type="text"
                    placeholder="2023123"
                    value={user.enrollment_number}
                  />
                  {errors.enrollment_number && (
                    <p className="text-sm text-destructive">
                      {errors.enrollment_number}
                    </p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Juan Pérez"
                    autoComplete="name"
                    value={user.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="usuario@ejemplo.com"
                    autoComplete="email"
                    value={user.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="rol">Rol</Label>
                  <Select name="rol" defaultValue={(user.rol != 'admin' ? user.rol : 'lider')}>
                    <SelectTrigger id="rol" className="w-full">
                      <SelectValue placeholder="Selecciona un rol" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lider">Líder</SelectItem>
                      <SelectItem value="miembro">Miembro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.rol && (
                    <p className="text-sm text-destructive">{errors.rol}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="support_unit_id">Unidad de soporte</Label>
                  <Select name="support_unit_id" defaultValue={user.support_unit?.id.toString()}>
                    <SelectTrigger id="support_unit_id" className="w-full">
                      <SelectValue placeholder="Selecciona una unidad" />
                    </SelectTrigger>
                    <SelectContent>
                      {soportes.map((soporte) => (
                        <SelectItem key={soporte.id} value={soporte.id.toString()}>
                          {soporte.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.support_unit_id && (
                    <p className="text-sm text-destructive">
                      {errors.support_unit_id}
                    </p>
                  )}
                </div>
              </div>

              <DialogFooter>
                <Button type="submit" disabled={processing}>
                  {processing && (
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Actualizar
                </Button>
              </DialogFooter>
            </>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  );
}