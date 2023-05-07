
export const enum FooBarBaz {
  FOO = 'Foo',
  BAR = 'Bar',
  BAZ = 'Baz',
}

export type StatusEnum = keyof typeof FooBarBaz;

export interface ChartNode {
  runCount: number;
  timeValue: number;
}
