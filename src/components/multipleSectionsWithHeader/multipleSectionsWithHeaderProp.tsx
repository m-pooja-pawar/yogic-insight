import {SectionWithHeaderProp} from '../sectionWithHeader/sectionWithHeaderProp';

export interface MultipleSectionsWithHeaderProp {
  readonly data: readonly SectionWithHeaderProp[];
  readonly header: string;
  readonly id: string;
  readonly more_data?: readonly SectionWithHeaderProp[];
  readonly short_description?: string;
  readonly sub_data?: readonly MultipleSectionsWithHeaderProp[];
}
