import { FC } from 'react';

interface Props {
  children: React.ReactNode | JSX.Element
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div className={'darklayout'}>
      <h3>Dark Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
