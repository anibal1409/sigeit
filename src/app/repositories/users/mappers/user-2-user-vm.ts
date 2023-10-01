import {
  RowActionUser,
  UserVM,
} from '../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function User2UserVM(user: any): UserVM {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    idDocument: user.idDocument,
    birthdayDate: user.birthdayDate,
    email: user.email,
    status: user.status,
    password: user.password,
    departmentId: user.departmentId,
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
