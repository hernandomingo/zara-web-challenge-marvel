interface CounterProps {
  totalCount: number;
}

export const Counter = ({ totalCount }: CounterProps) => {
  return (
    <div className="mb-9">
      <p>{totalCount} RESULTS</p>
    </div>
  );
};
