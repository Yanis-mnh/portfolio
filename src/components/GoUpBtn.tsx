type props = {
  onButtonClick: (id: string) => void;
};

const GoUpBtn: React.FC<props> = ({ onButtonClick }) => {
  return (
    <>
      <button
        onClick={() => {
          onButtonClick("navbar");
        }}
        className="button go_up_btn"
      >
        ↑
      </button>
    </>
  );
};

export default GoUpBtn;
