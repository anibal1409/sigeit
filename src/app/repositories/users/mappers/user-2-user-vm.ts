import { UserVM, RowActionUser } from '../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function User2UserVM(user: any): UserVM {
  return {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    id_document: user.id_document,
    birthday_date: user.birthday_date,
    email: user.email,
    status: user.status,
    password: user.password,
    id_department: user.id_department,
    role: user.role,
    options: {
      options: [
        {
          name: 'Editar',
          value: RowActionUser.update,
        },
        {
          name: 'Eliminar',
          value: RowActionUser.delete,
        },
      ],
    },
  };
}
