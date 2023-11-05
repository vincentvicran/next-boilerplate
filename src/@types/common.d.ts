declare namespace Com {
  interface ActivityIndicatorProps {
    animating: boolean
    children?: React.ReactNode | React.ReactNode[]
    style?: React.CSSProperties
  }

  interface BoxProps
    extends React.HTMLAttributes<HTMLDivElement>,
      PaddingParams {
    children?: React.ReactNode | React.ReactNode[]
    flexBox?: boolean
    flexWrap?: boolean
    row?: boolean
    flex?: number
    vertical?: boolean
    jCenter?: boolean
    jSpace?: boolean
    jEnd?: boolean
    alCenter?: boolean
    alStart?: boolean
    alEnd?: boolean
    rowGap?: number
    columnGap?: number
    className?: string
    style?: React.CSSProperties
    cg?: number
    rg?: number
  }

  type ButtonColorType = 'default' | 'primary' | 'critical' | 'success'

  interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    title?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
    onClick?: (arg: React.MouseEvent<HTMLButtonElement>) => void
    color?: ButtonColorType
    textTransform?: 'capitalize' | 'uppercase' | 'lowercase'
    [x: string]: any
  }

  interface SmallButtonProps extends ButtonProps {}

  interface IconButtonProps
    extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'title'> {}

  interface AddMoreButtonProps {
    title?: string
    icon?: React.ReactNode
    onClick: (arg: React.MouseEvent<HTMLButtonElement>) => void
  }

  interface ButtonCardProps {
    title: string
    description: string
    icon: React.ReactNode
    onClick?: () => void
  }

  interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

  interface CheckBoxProps extends React.ComponentPropsWithoutRef<'input'> {
    name: string
    label?: string
    handleCheckboxChange: (
      name: string,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => void
    check: boolean
    labelStyle?: React.CSSProperties
    type?: 'checkbox'
  }

  interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string
    title: string
  }

  interface FilterChipProps extends ChipProps {
    onClose?: () => void
  }

  interface CollapseProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    iconVisible?: boolean
    title: React.ReactNode
    content: React.ReactNode
  }

  interface CompWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    style?: React.CSSProperties
  }

  interface ConfirmationModalProps {
    displayElement: React.ReactNode
    label: string
    onConfirmClick: (a?: any) => void
    onCancelClick?: (a?: any) => void
    confirmLabel?: string
    cancelLabel?: string
    loading?: boolean
    danger?: boolean
    success?: boolean
    black?: boolean
    additionalContent?: () => any
  }

  interface CustomModalProps {
    displayElement: React.ReactNode
    children(options: { onCloseModalHandler(): any }): React.ReactNode
    onOutSideClickHandler?: boolean
    modalStyles?: React.CSSProperties
    width?: string | number
    height?: string | number
    disableScroll?: boolean
  }

  namespace Dropdown {
    type triggerElementArgType = {
      active: boolean
    }

    type placementType =
      | 'bottomleft'
      | 'bottomright'
      | 'bottommiddle'
      | 'topleft'
      | 'topright'
      | 'topmiddle'

    interface DropdownProps {
      children?: React.ReactNode
      trigger: (elementArg: triggerElementArgType) => React.ReactNode
      active?: boolean
      isAnimated?: boolean
      animationType?: any
      style?: Omit<React.CSSProperties, 'transform' | 'position' | 'opacity'>
      placement?: placementType
      outDismiss?: boolean
      inDismiss?: boolean
      triggerToggle?: boolean
    }
  }

  namespace Grid {
    interface GridContainerProps {
      lg: number
      md: number
      sm: number
      children: React.ReactNode
      rowGap?: number
      columnGap?: number
    }
    interface GridItemProps {
      lg?: number
      children: React.ReactNode
    }
  }

  interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
    link: string
    alt: string
    className?: string
    style?: React.CSSProperties
  }

  interface ImageRenderProps {
    onClickRemove?: () => void
    imageURL: string
    multiple?: boolean
    size?: number
    onViewImage?: () => void
    itemType?: any
  }

  type DataInfoTypes = 'info' | 'warning' | 'error' | 'success'

  interface InfoBarProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
    data: Partial<Record<DataInfoTypes, React.ReactNode>>
  }

  interface InputFieldProps extends React.ComponentPropsWithoutRef<'input'> {
    name?: string
    value?: string | number
    defaultValue?: string | number | null
    placeholder: string
    style?: React.CSSProperties
    onChange: React.FormEventHandler<HTMLInputElement>
    className?: string
    type?: string
    inputType?: 'alphanumeric' | 'nonZero' | 'citizen' | 'numSymbol' | 'tel'
    disabled?: boolean
    error?: any
    lefticon?: React.ReactNode
    righticon?: React.ReactNode
    required?: boolean
    max?: string | number
    min?: string | number
    autofocus?: boolean
    dateMax?: number | string
    dateMin?: number | string
    readonly?: boolean
    containerStyle?: React.CSSProperties
  }

  interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {}

  interface FormInputProps {
    children: React.ReactNode
    label: string
    newElement?: React.ReactNode
    required?: boolean
    style?: React.CSSProperties
  }

  interface SearchInputProps extends React.ComponentPropsWithoutRef<'input'> {
    containerStyle?: React.CSSProperties
  }

  interface LineItemTableColumns<T, K extends Extract<keyof T, string>> {
    field: K
    name: string
    colStyle?: React.CSSProperties
    headStyle?: React.CSSProperties
    render?:
      | 'input'
      | 'checkbox'
      | 'select'
      | ((
          item?: Partial<T[K]>,
          itemId?: number,
          itemData?: T,
          index?: number,
        ) => React.ReactNode)
    width?: string
    height?: string
    trueValue?: string
    falseValue?: string
    selectOptions?: Array<{ value: string | number; label: string }>
    filterOptions?: Array<{ value: string | number; label: string }>
    inputProps?: Partial<Com.InputFieldProps>
    selectProps?: Partial<
      Com.SelectFieldProps<{ value: string; label: string }>
    >
    checkboxProps?: Partial<Com.CheckBoxProps>
  }

  interface LineItemActions<T> {
    onAddHandler?: (item: T, ...arg: any) => void
    onEditHandler?: (item: T, ...arg: any) => void
    onDeleteHandler?: (item: T, ...arg: any) => void
    onViewDetailHandler?: (item: T, ...arg: any) => void
    onViewHandler?: (item: T, ...arg: any) => void
    onContentCopy?: (item: T, ...arg: any) => void
    onManageHandler?: (item: T, ...arg: any) => void
    onResetHandler?: (item: T, ...arg: any) => void
  }

  interface LineItemTableProps<T, K extends Extract<keyof T, string>> {
    title?: React.ReactNode
    baseItem: Partial<T>
    columns: LineItemTableColumns<T, K>[]
    data: Array<T>
    actions?: LineItemActions<T>
    dataLoader?: boolean
    totalCount?: number
    csv?: boolean
    onPageChange?: (page: number, limit: number) => void
    searchHandler?: (...arg: any) => void
    filterHandler?: (...arg: any) => void
    sortHandler?: (...arg: any) => void
  }

  interface MediaProps {
    image: Array<ImageDataTypes>
    setImage:
      | React.Dispatch<React.SetStateAction<Array<ImageDataTypes>>>
      | ((data: any) => void)
    setImage:
      | React.Dispatch<React.SetStateAction<Array<ImageDataTypes>>>
      | ((data: any) => void)
    defaultImages?: Array<string>
    removedImage?: Array<string | number>
    id: number
    type: Com.SvgCardType
    setRemovedImage?: React.Dispatch<
      React.SetStateAction<Array<string | number>>
    >
    multiple?: boolean
  }

  namespace Menu {
    interface MenuProps extends React.ComponentPropsWithoutRef<'div'> {}

    interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
      danger?: boolean
    }
  }

  interface ModalContainerProps {
    children: React.ReactNode
    visible: boolean
    style?: React.CSSProperties
    //   isAnimated?: boolean
    //   animationType?: string
    disableScroll?: boolean
    modalContainerStyle?: React.CSSProperties
    closeModal?: () => void
    modalSize?: string
    width?: number | string
    height?: number | string
    overlay?: boolean
    overlayBlur?: number
    overlayDark?: boolean
  }

  interface PaginationProps
    extends Pick<React.ComponentPropsWithoutRef<'div'>, 'style'> {
    count: number
    page: number
    onChange: (newPage: number) => void
  }

  interface PaginationNumberProps {
    index: number
    page: number
    onPageChange: (e: React.MouseEvent<HTMLDivElement>, newPage: number) => void
  }

  interface SelectFieldProps<T> {
    data?: any
    isViewing?: boolean
    getOptionLabel?: keyof T
    getOptionValue?: keyof T
    options: T[]
    formatGroupLabel?: any
    onChangeValue?: (arg: T) => void
    isSearchable?: boolean
    isClearable?: boolean
    placeholder?: string
    isLoading?: boolean
    isMulti?: boolean
    defaultValue?: T
    value?: T
    isOptionDisabled?: any
    formatOptionLabel?: any
    filterOption?: any
    instanceId?: any
    borderless?: boolean
    isDisabled?: boolean
    controlStyle?: React.CSSProperties
    lineItem?: boolean
    error?: boolean | string
  }

  interface TextProps extends React.ComponentPropsWithoutRef<'div'> {
    displayxlarge?: boolean
    displaylarge?: boolean
    displaymedium?: boolean
    pageheading?: boolean
    heading?: boolean
    subheading?: boolean
    body?: boolean
    caption?: boolean
    button?: boolean
    p?: number
    pl?: number
    pr?: number
    pt?: number
    pb?: number
    m?: number
    ml?: number
    mr?: number
    mt?: number
    mb?: number
  }

  interface ToolTipProps extends ToolTipPositionType {
    children: React.ReactNode
    text?: string
    style?: React.CSSProperties
    containerStyle?: React.CSSProperties
    breakText?: boolean
  }

  interface ToolTipPositionType {
    left?: boolean
    right?: boolean
    top?: boolean
    down?: boolean
  }

  interface PaddingParams {
    p?: number
    pl?: number
    pr?: number
    pt?: number
    pb?: number
    m?: number
    ml?: number
    mr?: number
    mt?: number
    mb?: number
    style?: React.CSSProperties
  }

  interface DeStatusDetailProps {
    custom: number
    custom_reason: string | null
    insurance: number
    insurance_reason: string | null
    temp_owner: number | null
    temp_owner_reason: string | null
    vech_owner: number | null
    vehicle: number
    vehicle_reason: string | null
  }

  interface VehicleNumberPlateProps {
    de_status_details?: DeStatusDetailProps
    full_vech_name: string
    id: number
    license_name: string
    lot_id: number
    lot_number: string
    office_code?: null | '1' | '3' | '4' | '5' | '6'
    symbol: string
    vehicle_number: string
    vehicle_status_type_id: '1' | '3' | '4' | '5' | '6'
  }

  interface PanesProps {
    title: string
    onClick?: (data: any) => void
    submittedStatus?: 'red' | 'green' | 'orange' | 'yellow'
    render: () => React.ReactNode
    badge?: number | string
    style?: React.CSSProperties
  }

  interface TabProps {
    initialIndex?: number
    panes: PanesProps[]
    onTabChange?: (activeindex: number) => void
    activeUserProp?: boolean
    rightComponent?: React.ReactNode
    tabLimit?: number
    gotoFirst?: (cb: () => void) => void
    showIndicator?: boolean
    titleContentGap?: number
  }

  interface VerticalPanesProps
    extends Omit<PanesProps, 'submittedStatus' | 'badge'> {
    isFinanced?: boolean
    isMinor?: boolean
  }

  interface VerticalTabProps
    extends Pick<TabProps, 'onTabChange' | 'activeUserProp'> {
    panes: VerticalPanesProps[]
  }

  interface TableColumns<T, K extends Extract<keyof T, string>> {
    field: K
    name: string
    colStyle?: React.CSSProperties
    headStyle?: React.CSSProperties
    render?: (
      item?: Partial<T[K]>,
      itemId?: number,
      itemData?: T,
      index?: number,
    ) => React.ReactNode
  }

  interface TableProps<T, K extends Extract<keyof T, string>> {
    columns: TableColumns<T, K>[]
    data: Array<T>
    actions?: boolean
    dataLoader?: boolean
    totalCount?: number
    csv?: boolean
    pagination?: boolean
    onPageChange?: (page: number, limit: number) => void
    deleteLoader?: boolean
    resetLoader?: boolean
    onDeleteHandler?: (arg: T, cb?: (arg?: any) => void) => void
    onEditHandler?: (arg: T, cb?: (arg?: any) => void) => void
    onViewHandler?: (arg: T, cb?: (arg?: any) => void) => void
    onContentCopy?: (arg: T, cb?: (arg?: any) => void) => void
    onResetHandler?: (arg: T, cb?: (arg?: any) => void) => void
    onSelectHandler?: (arg: T, cb?: (arg?: any) => void) => void
    onViewDetailHandler?: (arg: T, cb?: (arg?: any) => void) => void
    selected?: (item: T) => boolean
  }

  interface keyValueTableProps {
    datas: keyValueTableDataProps[]
    editable: boolean
    onSubmit: (data: any) => void
    padding?: React.CSSProperties['padding']
    fontSize?: React.CSSProperties['fontSize']
    fullWidth?: React.CSSProperties['width']
  }

  interface keyValueTableDataProps {
    title: string
    name: string
    options?: { title: string; value: string }[]
    disabled: boolean
    placeholder?: string
    value: any
    type: string
  }

  interface KeyValueTableEditableProps {
    editable?: boolean
    onSubmit?: () => void
    children: React.ReactNode
    fullWidth?: boolean
  }

  interface KeyValueTableEditProps {
    padding?: React.CSSProperties['padding']
    fontSize?: React.CSSProperties['fontSize']
    title: string
    children: React.ComponentPropsWithoutRef<'div'>['children']
  }

  interface DateInputAdProps {
    value: string
    primaryName: string
    secName: string
    validPrimaryName?: string
    validSecName?: string
    getOneYearFromNow?: boolean
    canInputFuture?: boolean
    callback: (a: any, b: string) => void
    className?: string
    disabled?: boolean
    [rest: string]: any
  }

  interface DateInputBSProps {
    value: string
    primaryName: string
    secName: string
    validPrimaryName?: string
    validSecName?: string
    getOneYearFromNow?: boolean
    canInputFuture?: boolean
    callback: (a: any, b: string) => void
    className?: string
    disabled?: boolean
    [rest: string]: any
  }
  interface DatepickerProps {
    name?: string
    defaultValue?: string
    placeholder?: string
    onChange: () => void
    className?: string
    type: string
    disabled?: boolean

    value: string
  }

  interface DhaddaProps {
    docType: string
    dynamic: boolean
    loading: boolean
    vehicleNumberData: Api.VehicleNumberDetails | undefined
  }
  interface ImageEditorProps {
    originalImages: string
    images: string[] | undefined
    originalFileUrl: (arg: string) => void
    fileUrl: (arg: string) => string
    activeImageIndex?: number
    onSaveLoading: boolean
    onSave?: (
      croppedImge: string,
      imageName: string,
      callBack: () => void,
    ) => void
    onRestoreLoading: boolean
    onRestore: (images: string, cb: () => void) => void
    cropEnabled: boolean
    timeHash: any
    onNextFromLastImage?: () => void
    onPreviousFromFirstImage?: () => void
    onPrint: (a: any) => void
    userInfo: any
    retakeButton: any
  }

  interface ImageEditorFullProps extends ImageEditorProps {
    visible: boolean
    onClose: () => void
    name: string | undefined
    numberPlate: React.ReactNode
    userInfo: any
    retakeButton: any
  }

  interface KeyValueDataTypes {
    title: string
    name?: string
    value: string | null
    type?: string
    disabled?: boolean
    options?: { title: string; value: string }[]
    placeholder?: string
  }
  interface KeyValueTableProps {
    data: KeyValueDataTypes[]
    onSubmit?: (a: any) => void
    editable?: boolean
    padding?: number
    fontSize?: number
    fullWidth?: boolean
  }

  interface ImageDataTypes {
    url: string
    file: File
  }

  interface ImageUploadProps extends React.ComponentPropsWithoutRef<'input'> {
    images?: ImageDataTypes[]
    fixedResolution?: {
      width: number
      height: number
    }
    onChange: (a: ImageDataTypes[]) => void
    children: ({
      imageData,
      onUploadImage,
      onRemove,
      deleteAllHandler,
    }: {
      imageData: ImageDataTypes[]
      onUploadImage: (a: any) => void
      onRemove: (i: number) => void
      deleteAllHandler: () => void
    }) => React.ReactNode
    multiple?: boolean
    // buttonStyle: React.CSSProperties
    // title:string,
    buttonclick?: React.ReactNode
    accept?: string
    fixedResolution?: boolean
  }

  interface OrganizationCardProps {
    image: string
    title: string
    panNo: string
    branch: string
    location: string
  }

  interface KeyValueProps {
    data: any
    rightAligned?: boolean
    cols?: number
  }

  type SvgCardType =
    | 'signature'
    | 'citizenship'
    | 'logo'
    | 'image'
    | 'photo'
    | 'passport'
    | 'stamp'
    | 'documents'
  interface SvgLabelProps extends React.ComponentPropsWithoutRef<'label'> {
    title?: React.ReactNode
    desc?: React.ReactNode
    disIcon?: React.ReactNode
    iconSize?: number
    type?: SvgCardType
  }

  interface StatInfoProps {
    icon: React.ReactNode
    value: string
  }

  interface KeyValuePairProps<T> {
    data: T
  }
}
