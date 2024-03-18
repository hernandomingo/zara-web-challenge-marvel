interface CounterProps {
  totalCount?: number;
}

export const Counter = ({ totalCount = 0 }: CounterProps) => {
  return (
    <div className="mb-9">
      <p>{totalCount} RESULTS</p>
    </div>
  );
};
