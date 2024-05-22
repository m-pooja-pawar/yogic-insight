export interface AsanaTechnique {
  readonly header?: string;
  readonly id: string;
  readonly img: string;
  readonly instruction: string;
}

export interface AsanaStage {
  readonly id: string;
  readonly img: string;
  readonly info?: readonly string[];
  readonly technique: readonly AsanaTechnique[];
}

export interface AsanaData {
  readonly benefits?: readonly string[];
  readonly description?: string;
  readonly header: string;
  readonly header_en?: string;
  readonly info?: readonly string[];
  readonly limitations?: readonly string[];
  readonly stage: readonly AsanaStage[];
  readonly startingPosition?: AsanaTechnique;
}
