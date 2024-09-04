import { taskCriteria } from '@/constants';
import { ColumnDef } from '@tanstack/react-table';
import { ReactNode } from 'react';
import { FilterDef } from '../CommonTypes';

export type ChatBubbleProps = {
  message: string;
  isSpeaker: boolean;
  userName: string;
};

export type ErrorModalProps = {
  open: boolean;
  onClose: () => void;
  errorMessage: string | null;
  className?: string;
  headerTitle?: string;
};

export interface HTMLContentVisualizerProps {
  htmlContent: string;
  title: string;
  showTitle: boolean;
  style?: string;
}

export type ColumnFilter = {
  id: string;
  value: any;
};

export interface DatatableProps {
  canLoad?: boolean;
  loadingState?: boolean;
  data: any[];
  columnDef: ColumnDef<any, any>[];
  filterControlsDef?: FilterDef[];
  dateFilterControlType?: 'past' | 'future' | 'none';
  pageSize?: number;
  headerClassName?: string;
  headerCellClassName?: string;
  styled?: boolean;
  tooltipShowingXofY?: boolean;
  cellsClassName?: string;
  tableClassName?: string;
  defaultColumnSize?: number;
  columnVisibility?: Record<string, boolean>;
  isLoading?: boolean;
  cellRenderer?: (cell: any, cellIndex: number, row: any, rowIndex: number) => React.ReactNode;
  rowRenderer?: (row: any, rowIndex: number, cells: any[]) => React.ReactNode;
}

export type ImageComponentProps = {
  src: string;
  fallbackSrc: string;
};

export interface LinkContentVisualizerProps {
  title: string;
  showTitle: boolean;
  url: string;
  showSlider?: boolean;
  sliderSettings?: {
    min: number;
    max: number;
    step: number;
    initialValue: number;
  };
  ratingData?: number;
  onRatingChange?: (rating: number) => void;
}

export type MultiSelectQuestionProps = {
  isMultiScore?: boolean;
  isSlider?: boolean;
  multiSelectQuestionData: string[];
  selectedMultiSelectValues: string[];
  handleSelectionChange: (newValue: string) => void;
};

export type ResponseVisualizerProps = {
  task?: {
    taskData: {
      responses: {
        id: React.Key | null | undefined;
        model: string;
        htmlContent: string;
        title: string;
        showTitle: boolean;
        completion: { sandbox_url: string };
      }[];
    };
  };
  minValSlider: number;
  maxValSlider: number;
  ratings: { [key: string]: number };
  multiScoreOptions: string[];
  isMultiScore: boolean;
  handleRatingChange: (model: string, rating: number) => void;
};

export interface SliderProps {
  min: number;
  max: number;
  step: number;
  minLabel?: string;
  maxLabel?: string;
  initialValue: number;
  onChange: (value: number) => void;
  showSections?: boolean;
  className?: string;
}

export type SliderQuestionProps = {
  isMultiScore: boolean;
  handleSliderChange: (value: number) => void;
};

export type TaskPromptProps = {
  title?: string;
  taskType: string;
  formattedPrompt: React.ReactNode;
};

export type QuestionPageProps = {
  children: ReactNode;
};

export type RankOrder = { [key: string]: string };

export type TaskCriteria = (typeof taskCriteria)[keyof typeof taskCriteria];

export type Task = {
  taskId: string;
  title: string;
  body: string;
  expireAt: string;
  type: string;
  taskData: {
    task: string;
    prompt: string;
    criteria: Array<{
      type: string;
      options?: string[];
      max?: number;
      min?: number;
    }>;
    responses: Array<any>;
  };
  status: string;
  maxResults: number;
};
