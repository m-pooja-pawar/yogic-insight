export interface SectionWithHeaderProp {
  readonly data: readonly string[];
  readonly header: string;
  readonly sub_data?: readonly SectionWithHeaderProp[];
}
