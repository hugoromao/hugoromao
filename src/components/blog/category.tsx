import Label from '@/components/ui/label';

type CategoryLabelProps = {
  categories: string[];
};

export default function CategoryLabel({
  categories
}: CategoryLabelProps) {
  if (categories.length === 0) return null;

  return (
    <div className="flex gap-3">
      {categories.map((category, index) => (
        <Label key={index}>{category}</Label>
      ))}
    </div>
  );
}
