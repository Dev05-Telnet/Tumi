import cn from 'classnames'
import React from 'react'
import s from './Swatch.module.css'
import { Check } from '@components/icons'
import Button, { ButtonProps } from '@components/ui/Button'
import { isDark } from '@lib/colors'
interface SwatchProps {
  active?: boolean
  children?: any
  className?: string
  variant?: 'size' | 'color' | string
  color?: string
  imageUrl?: string
  label?: string | null
}

const Swatch: React.FC<Omit<ButtonProps, 'variant'> & SwatchProps> = React.memo(
  ({
    active,
    className,
    color = '',
    imageUrl = '',
    label = null,
    variant = 'size',
    ...props
  }) => {
    variant = variant?.toLowerCase()

    if (label) {
      label = label?.toLowerCase()
    }

    const swatchClassName = cn(
      s.swatch,
      {
        [s.color]: color,
        [s.active]: active,
        [s.size]: variant === 'size',
        [s.dark]: color ? isDark(color) : false,
        [s.textLabel]: !color && label && label.length > 3,
      },
      className
    )

    return (
      <Button
        aria-label="Variant Swatch"
        className={swatchClassName}
        {...(label && (color || imageUrl) && { title: label })}
        style={color ? { backgroundColor: color } : {}}
        {...props}
      >
        {color && active && (
          <span>
            <Check />
          </span>
        )}
        {imageUrl && <img style={{ width: '28px' }} src={imageUrl} />}
        {!color && !imageUrl ? label : null}
      </Button>
    )
  }
)

export default Swatch
