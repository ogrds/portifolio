type DividerProps = {
  text?: string;
  id: string;
};

export const Divider: React.FC<DividerProps> = ({ text, id }) => {
  return (
    <div
      id={id}
      className="mt-20 flex items-center text-center before:content-[''] before:inline-block before:h-[1px] before:w-5 before:grow before:bg-shadow_primary before:align-middle after:content-[''] after:inline-block after:h-[1px] after:w-5 after:grow after:bg-shadow_primary after:align-middle"
    >
      {text && (
        <span className="text-base text-white opacity-50 tracking-widest uppercase whitespace-nowrap py-0 px-4">
          {text}
        </span>
      )}
    </div>
  );
};
