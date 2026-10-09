import { SectionItemVM } from '../repositories/sections';

const MAX_SOLUTIONS = 20;
const MAX_COUNT = 10000;

export interface SemesterCheck {
  /** Combinaciones posibles (una sección por asignatura). */
  total: number;
  /** Combinaciones sin choques, contando hasta MAX_COUNT. */
  valid: number;
  capped: boolean;
  /** Primeras combinaciones sin choques. */
  solutions: Array<Array<SectionItemVM>>;
  /** Mayor combinación sin choques cuando no hay ninguna completa. */
  best: Array<SectionItemVM>;
}

/** Busca combinaciones sin choques tomando una sección de cada grupo (un grupo por asignatura). */
export function checkSemester(groups: Array<Array<SectionItemVM>>): SemesterCheck {
  const order = [...groups].sort((a, b) => a.length - b.length);
  const check: SemesterCheck = {
    total: order.reduce((acc, group) => acc * group.length, 1),
    valid: 0,
    capped: false,
    solutions: [],
    best: [],
  };
  const picked: Array<SectionItemVM> = [];
  const fits = (section: SectionItemVM) => picked.every((other) => !clash(section, other));

  const full = (index: number): void => {
    if (check.capped) {
      return;
    }
    if (index === order.length) {
      check.valid++;
      check.capped = check.valid >= MAX_COUNT;
      if (check.solutions.length < MAX_SOLUTIONS) {
        check.solutions.push([...picked]);
      }
      return;
    }
    for (const section of order[index]) {
      if (fits(section)) {
        picked.push(section);
        full(index + 1);
        picked.pop();
      }
    }
  };
  full(0);
  if (check.valid) {
    return check;
  }

  const partial = (index: number): void => {
    if (picked.length + order.length - index <= check.best.length) {
      return;
    }
    if (index === order.length) {
      check.best = [...picked];
      return;
    }
    for (const section of order[index]) {
      if (fits(section)) {
        picked.push(section);
        partial(index + 1);
        picked.pop();
      }
    }
    partial(index + 1);
  };
  partial(0);
  return check;
}

function clash(a: SectionItemVM, b: SectionItemVM): boolean {
  return (a.schedules || []).some((x) => (b.schedules || []).some(
    (y) => x.day?.id === y.day?.id && x.start < y.end && y.start < x.end,
  ));
}
