import * as React from 'react'
import { ComponentType, SFC } from 'react'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'

import { ComponentsMap } from './DocPreview'

export interface PlaygroundProps {
  components: ComponentsMap
  className?: string
  style?: any
  wrapper?: ComponentType<any>
  children: any
  __scope: Record<string, any>
  __position: number
  __code: string
  __codesandbox: string
}

const BasePlayground: SFC<PlaygroundProps> = ({
  components,
  className,
  style,
  wrapper: Wrapper,
  children,
  __scope,
  __position,
  __code,
  __codesandbox,
}) => {
  console.log('COMPS', components);
  console.log('COMPS-R', components.render);
  if (!components || !components.render) return null

  return (
    <components.render
      className={className}
      style={style}
      components={components}
      component={Wrapper ? <Wrapper>{children}</Wrapper> : children}
      scope={__scope}
      position={__position}
      code={__code}
      codesandbox={__codesandbox}
    />
  )
}

export const Playground = withMDXComponents(BasePlayground)
