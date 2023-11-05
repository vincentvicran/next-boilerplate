import Select from 'react-select'
import Theme from 'src/theme'

// import { colors } from '../../../modules'

interface SelectFieldProps {
  data?: any
  isViewing?: boolean
  getOptionLabel?: any
  getOptionValue?: any
  options: any[]
  formatGroupLabel?: any
  onChangeValue?: (arg: any) => void
  isSearchable?: boolean
  isClearable?: boolean
  placeholder?: string
  isLoading?: any
  defaultValue?: any
  isMulti?: any
  value?: any
  isOptionDisabled?: any
  formatOptionLabel?: any
  instanceId?: any
  borderless?: boolean
  isDisabled?: boolean
  onFocus?: any
  fontSize?: any
}

export const SelectField = ({
  options,
  formatGroupLabel,
  onChangeValue,
  getOptionLabel = 'label',
  getOptionValue = 'id',
  isSearchable,
  isClearable,
  placeholder,
  isLoading,
  defaultValue,
  isMulti,
  value,
  isOptionDisabled,
  formatOptionLabel,
  instanceId = 'react-select',
  borderless,
  isDisabled,
  onFocus,
  fontSize = 14,
  ...props
}: SelectFieldProps) => {
  const selectStyles = {
    valueContainer: (provided: any) => ({
      ...provided,
      height: 'auto',
      flexWrap: 'wrap',
      fontSize
    }),
    control: (styles: any, {isFocused}: {isFocused: boolean}) => ({
      ...styles,
      borderRadius: 4,
      borderColor: borderless
        ? 'transparent'
        : isFocused
        ? Theme.colors.$primary300
        : Theme.colors.$gray200,
      backgroundColor: '#F8F8F8',
      boxShadow: isFocused && 'none',
      '&:hover': {
        borderColor: borderless ? 'transparent' : Theme.colors.$primary100
      },
      fontSize
    }),
    option: (styles: any, {isSelected}: any) => {
      return {
        ...styles,
        backgroundColor: isSelected ? Theme.colors.$primary200 : '#fff',
        '&:hover': {
          backgroundColor: isSelected
            ? Theme.colors.$primary200
            : Theme.colors.$gray200
        },
        fontSize
      }
    },
    indicatorSeparator: (styles: any) => ({
      ...styles,
      display: 'none'
    }),
    menu: (styles: any) => ({
      ...styles,
      zIndex: 100
    }),
    placeholder: (styles: any) => ({
      ...styles,
      color: Theme.colors.$gray200
    })
  }

  let optionLabel
  if (typeof getOptionLabel === 'string') {
    optionLabel = (option: any) => `${option[getOptionLabel]}`
  } else if (typeof getOptionLabel === 'function') {
    optionLabel = getOptionLabel
  }

  let optionValue
  if (typeof getOptionValue === 'string') {
    optionValue = (option: any) => `${option[getOptionValue]}`
  } else if (typeof getOptionValue === 'function') {
    optionValue = getOptionValue
  }

  return (
    <div>
      <Select
        formatOptionLabel={formatOptionLabel}
        isOptionDisabled={isOptionDisabled}
        isMulti={isMulti}
        instanceId={instanceId}
        className="selectfield"
        classNamePrefix="react-select"
        styles={selectStyles}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isLoading={isLoading}
        onChange={onChangeValue}
        getOptionLabel={optionLabel}
        getOptionValue={optionValue}
        options={options}
        formatGroupLabel={formatGroupLabel}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onFocus={onFocus}
        {...props}
      />
    </div>
  )
}

/*
        <SelectField
          options={categoryData?.rows ?? []}
          getOptionLabel={(option: Api.CategoryListByTypeItem) =>
            option.category_details.title
          }
          getOptionValue={(option: Api.CategoryListByTypeItem) =>
            option.category_details.id
          }
          onChangeValue={(item: Api.CategoryListByTypeItem) =>
            setValue('commonCategoryId', item?.category_details?.id)
          }
          isSearchable
          isClearable
          placeholder="Select Room Type"
          value={categoryData?.rows?.find(({category_details}) => {
            return category_details.id === Number(data.commonCategoryId)
          })}
        />
      */
