export type CategoryItemProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
};

export interface CategoryListProps {
  activeCategories: string[];
  handleCategoryClick: (categoryLabel: string) => void;
}

export interface TaskTableProps {
  tasks: any[];
  columnDef: any[];
  pagination: any;
  loading: boolean;
  handlePageChange: (pageIndex: number | string) => void;
}

export interface WalletManagementProps {
  address: string | null;
  openModal: () => void;
  closeModal: (show: boolean) => void;
  setShowUserCard: (show: boolean) => void;
  setShowSubscriptionCard: (show: boolean) => void;
}

export interface YieldInputProps {
  value: string;
  onChange: (value: string) => void;
}

export interface YieldInputGroupProps {
  label: string;
  values: string[];
  otherValues?: string[];
  onClear: () => void;
  onChange: (index: number, value: string) => void;
}
