type RatingProps = {
  quantity: number;
};

export const Rating: React.FC<RatingProps> = ({ quantity }) => {
  return (
    <section className="flex gap-[5px] mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="20"
          height="20"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z"
            className={quantity >= star ? "fill-yellow" : "fill-shadow_primary"}
          />
        </svg>
      ))}
    </section>
  );
};
