type TopicProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const Topic: React.FC<TopicProps> = ({ children, subtitle, title }) => {
  return (
    <div className="mt-8">
      {title && (
        <h3 className="mt-0 inline-block text-white text-2xl mb-3">{title}</h3>
      )}
      {subtitle && (
        <span className="block text-white text-base mb-3">
          {subtitle}
        </span>
      )}
      {children}
    </div>
  );
};
