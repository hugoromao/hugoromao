import Label from '@/components/ui/label';

type CategoryLabelProps = {
  categories: string[];
};

export default function CategoryLabel({
  categories
}: CategoryLabelProps) {
  return (
    <div className="flex gap-3">
      {categories
        ? categories
            .slice(0)
            .map((category, index) => (
              <Label key={index}>{category}</Label>
            ))
        : null}
    </div>
  );
}
