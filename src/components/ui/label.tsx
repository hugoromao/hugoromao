import { cx } from '@/utils/all';

type LabelProps = {
  children: React.ReactNode;
};

export default function Label({ children }: LabelProps) {
  return (
    <span
      className={cx(
        'mt-5 inline-block text-xs font-medium uppercase tracking-wider'
      )}>
      {children}
    </span>
  );
}
