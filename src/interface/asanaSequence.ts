export interface AsanaList {
  readonly id: string;
  readonly img: string;
  readonly label: string;
  readonly routing?: string;
}

export interface AsanaSequenceList {
  readonly asanas: readonly AsanaList[];
  readonly basicInfo: string;
  readonly carouselData?: readonly AsanaList[];
  readonly header: string;
  readonly sequence: boolean;
}
