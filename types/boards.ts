// Type definitions for board configurator

export interface BoardType {
  id: string;
  name: string;
  description: string;
  thickness: string;
  image: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  description: string;
  thickness: string;
  image: string;
}

export interface ColorOption {
  id: string;
  name: string;
  colorClass: string;
  image?: string;
}

export interface EdgeBandingOption {
  id: string;
  name: string;
  description: string;
  diagram: 'none' | 'long-sides' | 'all-sides' | 'single';
}

export interface RelatedProduct {
  id: string;
  name: string;
  description: string[];
  image: string;
}

export interface BoardConfiguration {
  width: number | null;
  length: number | null;
  boardTypeId: string | null;
  materialId: string | null;
  colorId: string | null;
  edgeBandingId: string | null;
}

