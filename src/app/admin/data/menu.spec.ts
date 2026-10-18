import { UserRole } from '../../repositories/users/model';
import {
  canAccessSection,
  menuForRole,
} from './menu';

describe('menu', () => {
  it('permite secciones fuera del menú (inicio, perfil)', () => {
    expect(canAccessSection(UserRole.Student, '')).toBeTrue();
    expect(canAccessSection(UserRole.Student, 'profile')).toBeTrue();
  });

  it('bloquea secciones del menú que el rol no tiene', () => {
    expect(canAccessSection(UserRole.Teacher, 'users')).toBeFalse();
    expect(canAccessSection(UserRole.Administrator, 'users')).toBeTrue();
  });

  it('da Formatos al jefe de departamento', () => {
    expect(canAccessSection(UserRole.HeadDepartment, 'formats')).toBeTrue();
  });

  it('devuelve el menú del rol ordenado por nombre', () => {
    const names = menuForRole(UserRole.Administrator).map((item) => item.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, 'es')));
    expect(names).not.toContain('Carga Académica');
  });
});
