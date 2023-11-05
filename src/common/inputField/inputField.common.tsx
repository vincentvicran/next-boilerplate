import React, {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {colors} from 'src/modules'
import {Box} from '../box/box.common'
import {Text} from '../text/text.common'

export const InputField = React.forwardRef<
  HTMLInputElement,
  Com.InputFieldProps
>((props, ref) => {
  const {
    // value,
    name,
    defaultValue,
    placeholder,
    style,
    onChange,
    className,
    type,
    inputType,
    disabled,
    autofocus,
    dateMax,
    dateMin,
    readonly,
    error,
    containerStyle,
    max,
    ...rest
  } = props
  const [typepassWord, setTypepassWord] = useState('password')
  return (
    <div className="input-field-container" style={containerStyle}>
      <input
        name={name}
        ref={ref}
        defaultValue={defaultValue as string | number}
        // onChange={onChange}
        onChange={(e) => {
          if (/^\s/.test(e?.target?.value)) {
            e.preventDefault()
            return
          }

          if (inputType === 'nonZero') {
            if (/^[1-9]*$|^[1-9][0-9]*$/.test(e?.target?.value)) {
              e.preventDefault()
              onChange(e)
              return
            }
            return
          }
          if (inputType === 'citizen') {
            if (/^[(0-9a-z-/,)]*$/i.test(e?.target?.value)) {
              e.preventDefault()
              onChange(e)
              return
            }
            return
          }

          if (inputType === 'numSymbol') {
            if (/^[(0-9a-z-/)]*$/i.test(e?.target?.value)) {
              e.preventDefault()
              onChange(e)
              return
            }
            return
          }
          if (inputType === 'alphanumeric') {
            if (/^[0-9A-Za-z]*$/.test(e?.target?.value)) {
              e.preventDefault()
              onChange(e)
              return
            }
            return
          }

          if (type === 'tel') {
            if (/^[0-9]*$/.test(e?.target?.value)) {
              e.preventDefault()
              onChange(e)
              return
            }
            return
          }

          onChange(e)
        }}
        style={{...style, borderColor: error ? 'red' : ''}}
        className={`inputfield body ${className} ${disabled && `disabled`} ${
          type === 'password' && 'password'
        }`}
        placeholder={placeholder}
        type={type === 'password' ? typepassWord : type}
        onInput={
          type === 'number'
            ? (e: any) => {
                if (max) {
                  if (e.target.value.length > max) {
                    e.target.value = e.target.value.slice(0, max)
                  }
                }
                if (e.target.value < 0) {
                  e.target.value = 0
                }

                // return e.target.value
              }
            : (e: any) => e.target.value ?? e.currentTarget.value
        }
        max={dateMax}
        min={dateMin}
        disabled={disabled}
        autoFocus={autofocus}
        readOnly={readonly}
        // value={value}
        {...rest}
      />
      {type === 'password' && (
        <Box
          className="password-icon"
          flexBox
          alCenter
          onClick={() =>
            setTypepassWord((prev) =>
              prev === 'password' ? 'text' : 'password'
            )
          }
        >
          {typepassWord === 'password' ? (
            <AiOutlineEye />
          ) : (
            <AiOutlineEyeInvisible />
          )}
        </Box>
      )}

      {error && <div className="input-error">{error}</div>}
    </div>
  )
})

export const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  Com.TextAreaProps
>((props, ref) => {
  const {className, disabled, cols = 40, rows = 5, ...rest} = props
  return (
    <textarea
      ref={ref}
      cols={cols}
      rows={rows}
      className={`inputfield ${className} ${disabled && `disabled`}`}
      disabled={disabled}
      {...rest}
    />
  )
})

export const FormInput = ({
  children,
  label,
  newElement,
  required,
  style
}: Com.FormInputProps) => {
  return (
    <Box flexBox vertical rg={4} style={style}>
      <Box flexBox alCenter jSpace>
        <Text body style={{fontWeight: 500}}>
          {label} {required && <span style={{color: 'red'}}>*</span>}
        </Text>
        <Text style={{fontSize: '14px', color: colors.text.secondary}}>
          {' '}
          {newElement}
        </Text>
      </Box>

      {children}
    </Box>
  )
}

export const SearchField = React.forwardRef<
  HTMLInputElement,
  Com.SearchInputProps
>((props, ref) => {
  const {className, disabled, containerStyle, ...rest} = props
  return (
    <div className="input-field-container" style={containerStyle}>
      <input
        ref={ref}
        className={`inputfield body ${className} ${disabled && `disabled`}`}
        disabled={disabled}
        // value={value}
        {...rest}
      />
      <Box className="search-icon" flexBox alCenter>
        <BiSearch />
      </Box>
    </div>
  )
})
