import React from 'react'

import {VStack} from 'src/app/common'

import {Label} from '../label'
import {InputError, TextAreaStyled} from './textArea.style'

interface TextAreaFieldProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  labelName?: string
  error?: string | boolean | undefined
}

export const TextArea = ({
  labelName,
  required,
  error,
  ...restProps
}: TextAreaFieldProps) => {
  return (
    <VStack>
      {labelName && (
        <Label
          labelName={labelName}
          required={required}
          containerStyle={{margin: '4px 0'}}
        />
      )}
      {error && <InputError style={{margin: '4px 0'}}>{error}</InputError>}

      <TextAreaStyled {...restProps} />
    </VStack>
  )
}
