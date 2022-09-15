interface IButtonLocation {
  isSelected: boolean;
  imageUrl: string;
  onClick: () => void;
}

const ButtonLocation = (props: IButtonLocation) => {
  return (
    <button
      className="rounded-full overflow-hidden w-10 h-10"
      onClick={props.onClick}
    >
      <img
        className={`rounded-full ${
          props.isSelected && "border-4 border-cyan-500"
        }`}
        src={props.imageUrl}
        alt="Brazil"
      />
    </button>
  );
};

export { ButtonLocation };
